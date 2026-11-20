var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/selection.js"

TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
function countSel(c) { return c.selectedLayers.length; }
function selNames(c) {
    var out = [], s = c.selectedLayers, i;
    for (i = 0; i < s.length; i++) out.push(s[i].name);
    return out.sort().join(', ');
}
function clearSel(c) { app.run('edit.deselectAll', {}); }

/* ---------- fixture uses the demo comp (active item) ---------- */
var c = TB.comp();

var solidA = c.layers.addSolid([1, 0, 0], 'Sel Solid A', 100, 100, 1, 3);
var shapeL = c.layers.addShape();            shapeL.name = 'Sel Shape';
var textL  = c.layers.addText('hello');      textL.name  = 'Sel Text';
var nullL  = c.layers.addNull();             nullL.name  = 'Sel Null';
var camL   = c.layers.addCamera('Sel Cam', [320, 180]);
var lightL = c.layers.addLight('Sel Light', [320, 180]);

var throwL = c.layers.addSolid([0, 1, 0], 'Sel Throw', 50, 50, 1, 2);
app.run('layer.precompose', { layers: [throwL.id], name: 'Sel Precomp', mode: 'move' });
var pcLayer = null;
for (var pi = 1; pi <= c.numLayers; pi++) if (c.layer(pi).name === 'Sel Precomp') pcLayer = c.layer(pi);

var guideL = c.layers.addSolid([0, 0, 1], 'Sel Guide', 50, 50, 1, 2);
guideL.guideLayer = true;

var audioL = c.layers.addSolid([1, 1, 0], 'Sel Audio', 50, 50, 1, 2);
audioL.hasAudio = true;

var par1 = c.layers.addSolid([0.5, 0.5, 0.5], 'Sel Parent1', 20, 20, 1, 1);
var par2 = c.layers.addSolid([0.5, 0.5, 0.5], 'Sel Parent2', 20, 20, 1, 1);
var par3 = c.layers.addSolid([0.5, 0.5, 0.5], 'Sel Child3', 20, 20, 1, 1);
par2.parent = par1;
par3.parent = par2;

writeLn('fixture ready: ' + c.numLayers + ' layers');

/* ---------- 101 Select Matching Property ---------- */
clearSel(c);
var posProp = solidA.property('Position');
posProp.selected = true;
var r101 = TB.get(101).run({});
ok(r101 >= 2, '101 matching property selected on ' + r101 + ' layer(s)');
ok(c.selectedProperties.length >= 2, '101 several properties selected now (' + c.selectedProperties.length + ')');

clearSel(c);
var r101c = TB.get(101).run({ ctrl: true });
ok(r101c >= 1, '101 Ctrl reuses the last property path (' + r101c + ')');

/* ---------- 102 Inverse ---------- */
clearSel(c);
textL.selected = true;
TB.get(102).run({});
ok(countSel(c) === c.numLayers - 1 && textL.selected === false,
   '102 inverse flipped a single selection (' + countSel(c) + '/' + c.numLayers + ')');

/* ---------- 103 Select Layers at Frame ---------- */
clearSel(c);
c.time = 1;
var r103 = TB.get(103).run({});
ok(r103 >= 1, '103 selected ' + r103 + ' layer(s) at the playhead');
ok(solidA.selected === true, '103 layer spanning the playhead is selected');
TB.get(103).run({ shift: true });
ok(solidA.selected === false, '103 Shift selects only disabled layers');
TB.get(103).run({ ctrl: true });
ok(solidA.selected === true, '103 Ctrl selects only enabled layers');

/* ---------- 104 Odd/Even ---------- */
TB.FORM_VALUES = ['Odd'];
var r104o = TB.get(104).run({});
ok(r104o >= 1, '104 odd layers selected: ' + r104o);
(function () {
    var s = c.selectedLayers, i, allOdd = true;
    for (i = 0; i < s.length; i++) if (s[i].index % 2 === 0) allOdd = false;
    ok(allOdd, '104 all selected layers have odd indices');
})();
TB.FORM_VALUES = ['Even'];
var r104e = TB.get(104).run({});
ok(r104e >= 1, '104 even layers selected: ' + r104e);

/* ---------- 231 Select Every Nth Layer ---------- */
TB.FORM_VALUES = ['3', '1'];
var r231 = TB.get(231).run({});
ok(r231 === Math.ceil(c.numLayers / 3), '231 every 3rd layer = ' + r231 +
   ' (expected ' + Math.ceil(c.numLayers / 3) + ')');
clearSel(c);
var r231c = TB.get(231).run({ ctrl: true });
ok(r231c === r231, '231 Ctrl repeats the last N (' + r231c + ')');

/* ---------- 105 Random Select/Deselect ---------- */
TB.FORM_VALUES = ['100', 'Select'];
var r105 = TB.get(105).run({});
ok(r105 === c.numLayers, '105 100% select grabs every layer (' + r105 + ')');
TB.FORM_VALUES = ['0', 'Select'];
var r105z = TB.get(105).run({});
ok(r105z === 0, '105 0% select leaves nothing (' + r105z + ')');
TB.FORM_VALUES = ['100', 'Deselect'];
var r105d = TB.get(105).run({});
ok(r105d === 0, '105 100% deselect clears everything (' + r105d + ')');

/* ---------- 106-113 type selectors ---------- */
clearSel(c);
var r106 = TB.get(106).run({});
ok(r106 >= 1 && textL.selected === true, '106 text layer selected (' + r106 + ')');
TB.get(106).run({ shift: true });
ok(textL.selected === false, '106 Shift = everything except text (' + countSel(c) + ')');

clearSel(c);
var r107 = TB.get(107).run({});
ok(r107 >= 1 && nullL.selected === true, '107 null selected (' + r107 + ')');
TB.get(107).run({ shift: true });
ok(nullL.selected === false, '107 Shift = everything except nulls');

clearSel(c);
var r108 = TB.get(108).run({});
ok(r108 >= 1 && pcLayer && pcLayer.selected === true, '108 precomp selected (' + r108 + ')');
TB.get(108).run({ shift: true });
ok(pcLayer.selected === false, '108 Shift = everything except precomps');

clearSel(c);
var r109 = TB.get(109).run({});
ok(r109 >= 1 && shapeL.selected === true, '109 shape selected (' + r109 + ')');
TB.get(109).run({ shift: true });
ok(shapeL.selected === false, '109 Shift = everything except shapes');

clearSel(c);
var r110 = TB.get(110).run({});
ok(camL.selected === true && lightL.selected === true, '110 3D camera+light selected (' + r110 + ')');
TB.get(110).run({ shift: true });
ok(camL.selected === false, '110 Shift = everything except 3D');

clearSel(c);
var r111 = TB.get(111).run({});
ok(r111 >= 1 && guideL.selected === true, '111 guide layer selected (' + r111 + ')');
TB.get(111).run({ shift: true });
ok(guideL.selected === false, '111 Shift = everything except guides');

clearSel(c);
var r112 = TB.get(112).run({});
ok(r112 >= 1 && lightL.selected === true, '112 light selected (' + r112 + ')');
TB.get(112).run({ shift: true });
ok(lightL.selected === false, '112 Shift = everything except lights');

clearSel(c);
var r113 = TB.get(113).run({});
ok(r113 >= 1, '113 audio layers selected (' + r113 + ')');
var beforeShift113 = countSel(c);
TB.get(113).run({ shift: true });
ok(countSel(c) === c.numLayers - r113, '113 Shift = everything except audio (' + countSel(c) + ')');

/* ---------- 114/115/116 hierarchy ---------- */
clearSel(c);
var r114 = TB.get(114).run({});
ok(par1.selected === true && par2.selected === true && par3.selected === false,
   '114 parents selected (' + r114 + '): ' + selNames(c));

clearSel(c);
var r115 = TB.get(115).run({});
ok(par2.selected === true && par3.selected === true && par1.selected === false,
   '115 children selected (' + r115 + '): ' + selNames(c));

clearSel(c);
par3.selected = true;
var r116 = TB.get(116).run({});
ok(par1.selected === true && par2.selected === true && par3.selected === true,
   '116 full hierarchy from the leaf (' + r116 + ')');

clearSel(c);
par1.selected = true;
TB.get(116).run({ ctrl: true });
ok(par1.selected === true && par3.selected === true && countSel(c) === 3,
   '116 Ctrl selects the whole branch below (' + countSel(c) + ')');

/* ---------- registration completeness ---------- */
var missing = [];
[101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,231].forEach(function (id) {
    var t = TB.get(id);
    if (!t || !t.run) missing.push(id);
});
ok(missing.length === 0, 'all 17 Selection tools registered' + (missing.length ? ' (missing ' + missing.join(',') + ')' : ''));

writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
