var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/easing.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [275,276,277,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Easing tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
/* smoke: apply Sine In to a keyed property */
var c = TB.comp();
var L = c.layers.addSolid([0.5,0.5,0.5], 'Easing Test', 100, 100, 1, 5);
var p = L.property('Opacity');
p.setValueAtTime(0, 0); p.setValueAtTime(1, 100);
app.run('layer.select', {layers:[L.id]});
app.run('keys.select', {keys:[{layer:L.id, prop:p.__uid, time:0},{layer:L.id, prop:p.__uid, time:p.keyTime(2)}], selectProperties:true});
var r = TB.get(240).run({});
ok(typeof r === 'number', '240 sine in ran (' + r + ')');
/* copy/paste */
TB.get(275).run({});
var r2 = TB.get(276).run({});
ok(typeof r2 === 'number', '276 paste ran (' + r2 + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
