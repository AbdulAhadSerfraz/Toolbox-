var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/layers.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [118,267,119,120,121,122,123,124,273,230,125,126,127,128,129,134,135];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Layers tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
/* smoke: rename layers on demo comp */
var c = TB.comp();
var n = TB.get(125).run({});
ok(typeof n === 'number', '125 rename ran (' + n + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
