var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/project.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [160,161,162,163,281,282,164,165,166];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Project tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
var r = TB.get(164).run({});
ok(typeof r === 'number' && r >= 1, '164 folder structure ran (' + r + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
