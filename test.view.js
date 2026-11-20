var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/view.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [283,181,182,183,184,185,186,187,188,189,190,191];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all View tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
var r = TB.get(184).run({});
ok(typeof r === 'number', '184 black bg ran (' + r + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
