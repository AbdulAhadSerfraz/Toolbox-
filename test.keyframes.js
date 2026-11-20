var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/keyframes.js"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }
var ids = [268,232,238,239,227,137,138,234,233,139,140,141,142,143,144,145,146,147,148,149];
var missing = [];
ids.forEach(function(id){ var t=TB.get(id); if(!t||!t.run) missing.push(id); });
ok(missing.length===0, 'all Keyframes tools registered' + (missing.length?(' (missing '+missing.join(',')+')'):''));
/* smoke: snap keys to frames on demo comp keyed property */
var c = TB.comp();
var L = c.layer(1);
var p = L.property('Opacity');
p.setValueAtTime(0, 50); p.setValueAtTime(0.5, 80);
app.run('layer.select', {layers:[L.id]});
app.run('keys.select', {keys:[{layer:L.id, prop:p.__uid, time:0},{layer:L.id, prop:p.__uid, time:0.5}], selectProperties:true});
var r = TB.get(137).run({});
ok(typeof r === 'number', '137 snap ran (' + r + ')');
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
