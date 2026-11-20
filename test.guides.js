var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/guides.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [167,168,169,236,237,170,171,172,173,174,175,176,177,178,179,180];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Guides tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
var r = TB.get(176).run({});
ok(typeof r === 'number' && r >= 1, '176 center guides ran (' + r + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
