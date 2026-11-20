var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/shapes.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [226,198,199,200,201,202,203,204,205,206,207,208,209,210,211];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Shapes tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
var c = TB.comp();
var r = TB.get(198).run({});
ok(typeof r === 'number', '198 circle wizard ran (' + r + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
