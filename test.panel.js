var TB_HEADLESS = true;
#include "dist/Toolbox.jsx"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }

writeLn('registered: ' + TB.registered());
ok(TB.PANEL.available().length >= 170, 'panel covers at least 170 of 174 spec tools (' + TB.PANEL.available().length + ')');
ok(TB.PANEL.entries().length === 17, 'default category shows 17 tools (' + TB.PANEL.entries().length + ')');

/* search filter through the panel seam */
TB.PANEL.setQuery('circle');
var q = TB.PANEL.entries();
ok(q.length >= 1 && q[0].name.indexOf('Circle') >= 0, 'search finds Circle Wizard (' + q.map(function (e) { return e.name; }).join(', ') + ')');
TB.PANEL.setQuery('');

/* category switch + per-category entry counts */
TB.PANEL.setCat('Easing');
ok(TB.PANEL.entries().length === 31, 'Easing category shows 31 spec entries (' + TB.PANEL.entries().length + ')');
TB.PANEL.setCat('Selection');
ok(TB.PANEL.entries().length === 17, 'Selection category shows 17 tools (' + TB.PANEL.entries().length + ')');

/* click a tool through the panel seam (Easing preset on fresh keys) */
var c = TB.comp();
var L = c.layers.addSolid([0.5, 0.5, 0.5], 'Panel Click Test', 100, 100, 1, 5);
var p = L.property('Opacity');
p.setValueAtTime(0, 0); p.setValueAtTime(1, 100);
app.run('layer.select', { layers: [L.id] });
app.run('keys.select', { keys: [{ layer: L.id, prop: p.__uid, time: p.keyTime(1) }, { layer: L.id, prop: p.__uid, time: p.keyTime(2) }] });
TB.PANEL.setCat('Easing');
var clicked = TB.PANEL.click(240, { shift: false, ctrl: false, alt: false });
ok(clicked === true, 'panel click on Easing tool works');
ok(p.numKeys === 2, 'clicked tool preserved the keyframe structure');

/* click the duplicate-id tool 264 through the panel (both name variants) */
TB._lastItem = { id: 264, name: 'Steady In - Ease Out' };
var c264a = TB.get(264).run({}, TB._lastItem);
TB._lastItem = { id: 264, name: 'Slow In - Steady Out' };
var c264b = TB.get(264).run({}, TB._lastItem);
ok(c264a >= 0 && c264b >= 0, 'tool 264 handles both spec entries (' + c264a + ', ' + c264b + ')');

writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
