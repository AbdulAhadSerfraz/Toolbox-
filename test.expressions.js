var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/expressions.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [284,192,193,194,195,196,197];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Expressions tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
var c = TB.comp();
var L = c.layers.addSolid([0.5,0.5,0.5],'Expr Test',100,100,1,3);
var p = L.property('Opacity');
p.expression = 'time*10';
var r = TB.get(192).run({});
ok(typeof r === 'number', '192 enable ran (' + r + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
