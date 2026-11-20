/* Headless smoke test: core + host easing round-trip.
   Run: effectcraft-cli script test\core.test.js --demo */

#include "src/core.js"
#include "src/host.js"

TB.OFFLINE = true;   /* dialogs answer with their defaults when headless */

var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
function near(a, b, eps) { return Math.abs(a - b) <= (eps === undefined ? 0.05 : eps); }

/* --- registry --- */
var called = 0;
TB.reg(9001, function (m) { called++; });
ok(TB.registered() >= 1, 'registry registers tools');
TB.reg(9001, function (m) { called += 10; });
TB.get(9001).run({});
ok(called === 10, 're-registration replaces the run function');

/* --- dialogs honour the test override --- */
TB.FORM_VALUES = [42];
var v = TB.form('t', [{ id: 'n', type: 'number', value: '1' }]);
ok(v && String(v.n) === '42', 'TB.form returns injected values');
var p = TB.prompt('t', 'label', '7');
ok(String(p) === '7' || p === null, 'TB.prompt falls back to defaults headless');

/* --- undo wrapper reports errors instead of throwing --- */
var ran = 0;
var r = TB.act('smoke', function () { ran++; return 'x'; });
ok(r === 'x' && ran === 1, 'TB.act runs inside one undo group');
var e = TB.act('boom', function () { TB.fail('expected failure'); });
ok(e === undefined && ran === 1, 'TB.act swallows and reports errors');

/* --- selection helpers --- */
var comp = TB.comp();
ok(comp.numLayers > 0, 'TB.comp returns the active composition');
ok(TB.layers('all').length === comp.numLayers, "TB.layers('all') lists every layer");

/* --- build a keyed property from scratch --- */
var L = comp.layers.addSolid([0.2, 0.6, 1], 'TB Key Test', 200, 200, 1, 5);
var pos = L.property('Position');
pos.setValueAtTime(0, [100, 100]);
pos.setValueAtTime(1, [500, 300]);
ok(pos.numKeys === 2, 'two keyframes created');

/* select the keys through the command bus, exactly as a timeline click would */
app.run('layer.select', { layers: [L.id] });
app.run('keys.select', {
    keys: [{ layer: L.id, prop: pos.__uid, time: 0 }, { layer: L.id, prop: pos.__uid, time: 1 }],
    selectProperties: true
});
var pairs = TB.pairs(pos);
ok(pairs.length === 1 && pairs[0][0] === 0, 'TB.pairs finds the adjacent pair');
ok(TB.keyProps().length === 1, 'TB.keyProps returns the selected keyed property');

/* --- easing round trip --- */
var curve = [0.42, 0, 0.58, 1];
var n = TH.applyCurve(pos, curve, 'both', pairs);
ok(n === 1, 'TH.applyCurve eased one segment');

var back = TH.curveOfSegment(pos, 1);
ok(near(back[0], curve[0], 0.02) && near(back[1], curve[1], 0.06) &&
   near(back[2], curve[2], 0.02) && near(back[3], curve[3], 0.06),
   'curve reads back (' + back.map(function (x) { return Math.round(x * 100) / 100; }).join(', ') + ')');

/* --- direction: 'out' must leave the incoming side alone --- */
var before = TH.curveOfSegment(pos, 1)[3];
TH.applyCurve(pos, [0.9, 1, 1, 1], 'out', pairs);
var after = TH.curveOfSegment(pos, 1);
ok(near(after[3], before, 0.06) && near(after[0], 0.9, 0.02),
   "side 'out' changes only the outgoing handle (y2 kept " + Math.round(after[3] * 100) / 100 + ')');

/* --- linear / hold round trip --- */
pos.setInterpolationTypeAtKey(1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
pos.setInterpolationTypeAtKey(2, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
var linearCurve = TH.curveOfSegment(pos, 1);
ok(near(linearCurve[1], linearCurve[0], 0.02) && near(linearCurve[3], linearCurve[2], 0.02),
   'LINEAR keys read as a straight diagonal cubic (' + linearCurve.map(function (x) { return Math.round(x * 100) / 100; }).join(', ') + ')');

pos.setInterpolationTypeAtKey(2, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
var held = null;
try { TH.curveOfSegment(pos, 1); } catch (e) { held = e.message; }
ok(!!held && /Hold/.test(held), 'HOLD keys are refused with a clear message');
pos.setInterpolationTypeAtKey(2, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);

/* --- numbers, text, layer helpers --- */
ok(TB.num('3,5', 0) === 3.5 && TB.clamp(12, 0, 10) === 10, 'number helpers');
ok(TB.pad(7, 3) === '007', 'TB.pad');
ok(TH.hasText(L) === false, 'solid layer reports no text');
ok(TH.effectGroup(L) !== null, 'Effects group reachable');

/* --- commands exist --- */
ok(typeof app.run === 'function' && typeof app.executeCommand === 'function', 'host command APIs present');
ok(TH.menuId('Pre-compose') > 0, 'menu lookup works');

writeLn(fail === 0 ? 'ALL PASS' : (fail + ' FAILED'));

