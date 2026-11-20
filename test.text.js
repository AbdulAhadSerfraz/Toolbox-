var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/text.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [212,291,292,228,229,235,213,214,215,216];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Text tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
var c = TB.comp();
var L = c.layers.addText('Hello World');
L.selected = true;
TB.FORM_VALUES = ['Hello', 'Hi', 'Selected layers'];
var r2 = TB.get(212).run({});
ok(typeof r2 === 'number', '212 find/replace ran (' + r2 + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
