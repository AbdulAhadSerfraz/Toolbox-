var TB_HEADLESS = true;
#include "dist/Toolbox.jsx"
TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }

var c = TB.comp();

/* Side-effect tools that touch the real file system or open Explorer windows:
   registration-checked only, not executed. */
var SKIP = { 162: 'opens Explorer', 163: 'opens Explorer', 191: 'writes screenshot', 159: 'writes .aep', 281: 'folder search' };

/* fixture used by (re-selected before) each click */
var fx1 = c.layers.addSolid([0.6, 0.6, 0.6], 'Sweep Solid', 120, 120, 1, 5);
var fx2 = c.layers.addShape(); fx2.name = 'Sweep Shape';
var fx3 = c.layers.addText('Sweep Text'); fx3.name = 'Sweep Text';
var fx4 = c.layers.addNull(); fx4.name = 'Sweep Null';
var fx5 = c.layers.addShape(); fx5.name = 'Sweep Shape 2';
fx1.property('Opacity').setValueAtTime(0, 0);
fx1.property('Opacity').setValueAtTime(1, 100);
fx1.property('Position').setValueAtTime(0, [100, 100]);
fx1.property('Position').setValueAtTime(1, [200, 200]);
var ARM_ERR = 0;

var msgs = [];
TB._status = function (t) { msgs.push(String(t)); };

function arm() {
    /* re-acquire the fixture (some tools delete layers) and rebuild it if needed */
    function find(nm) {
        for (var i = 1; i <= c.numLayers; i++) if (c.layer(i).name === nm) return c.layer(i);
        return null;
    }
    fx1 = find('Sweep Solid'); fx2 = find('Sweep Shape'); fx3 = find('Sweep Text'); fx4 = find('Sweep Null');
    var fx5 = find('Sweep Shape 2');
    if (!fx1 || !fx2 || !fx3 || !fx4 || !fx5) {
        if (!fx1) { fx1 = c.layers.addSolid([0.6, 0.6, 0.6], 'Sweep Solid', 120, 120, 1, 5); }
        if (!fx2) { fx2 = c.layers.addShape(); fx2.name = 'Sweep Shape'; }
        if (!fx3) { fx3 = c.layers.addText('Sweep Text'); fx3.name = 'Sweep Text'; }
        if (!fx4) { fx4 = c.layers.addNull(); fx4.name = 'Sweep Null'; }
        if (!fx5) { fx5 = c.layers.addShape(); fx5.name = 'Sweep Shape 2'; }
        try {
            fx1.property('Opacity').setValueAtTime(0, 0);
            fx1.property('Opacity').setValueAtTime(1, 100);
            fx1.property('Position').setValueAtTime(0, [100, 100]);
            fx1.property('Position').setValueAtTime(1, [200, 200]);
        } catch (e1) { }
    }
    try {
        app.run('edit.deselectAll', {});
        [fx1, fx2, fx3, fx4].forEach(function (L) {
            try { L.locked = false; L.shy = false; L.enabled = true; } catch (e0) { }
        });
        /* a no-op expression so the bake/find-replace expression tools have material */
        try { fx1.property('Position').expression = 'value'; } catch (e5) { }
        /* keys.select narrows the selection to the key-bearing layer, so arm keys
           first, then add the other fixture layers back on top */
        app.run('layer.select', { layers: [fx1.id] });
        app.run('keys.select', { keys: [
            { layer: fx1.id, prop: fx1.property('Opacity').__uid, time: fx1.property('Opacity').keyTime(1) },
            { layer: fx1.id, prop: fx1.property('Opacity').__uid, time: fx1.property('Opacity').keyTime(2) },
            { layer: fx1.id, prop: fx1.property('Position').__uid, time: fx1.property('Position').keyTime(1) },
            { layer: fx1.id, prop: fx1.property('Position').__uid, time: fx1.property('Position').keyTime(2) }
        ] });
        try { app.run('layer.select', { layers: [fx2.id, fx3.id, fx4.id, fx5.id], add: true }); } catch (e6) { }
        /* guide copy/paste needs at least one guide to exist (clearGuides throws when none) */
        try { app.run('view.clearGuides', {}); } catch (e7) { }
        try { app.run('view.addGuide', { orientation: 'vertical', position: 50 }); } catch (e8) { }
        c.time = 0;
    } catch (e2) { ARM_ERR++; }
    msgs.length = 0;
}

var executed = 0, skipped = 0, errors = 0;
var errList = [];
/* per-id dialog answers for tools whose defaults would abort early */
var OVERRIDES = {
    196: ['wiggle', 'wobble', 'Active comp'],
    212: ['Sweep', 'SWEEP', 'Active comp'],
    291: ['Arial', 'Verdana', 'Active comp']
};
/* environment messages that are not tool bugs */
var TOLERATE = ['Allow Scripts to Write Files', 'No copied guides'];
function tolerated(m) {
    for (var i = 0; i < TOLERATE.length; i++) if (m.indexOf(TOLERATE[i]) >= 0) return true;
    return false;
}
var envGated = 0;
TB_SPEC.forEach(function (s) {
    if (SKIP[s.id]) { skipped++; return; }
    arm();
    TB.FORM_VALUES = OVERRIDES[s.id] || null;
    var before = msgs.length;
    var t0 = Date.now ? 0 : 0;
    TB.PANEL.click(s.id, { shift: false, ctrl: false, alt: false });
    executed++;
    /* any '! ' message means the tool reported a graceful error - tolerated but logged */
    for (var i = before; i < msgs.length; i++) {
        if ((msgs[i].charAt(0) === '!' || msgs[i].indexOf('! ') === 0) && !tolerated(msgs[i])) {
            errors++;
            if (errList.length < 40) errList.push(s.id + ': ' + msgs[i]);
            break;
        } else if (tolerated(msgs[i])) { envGated++; break; }
    }
});

/* skipped ones: registration only */
var skipOK = true;
Object.keys(SKIP).forEach(function (id) { if (!TB.get(Number(id))) skipOK = false; });

/* duplicate 264: both name variants must resolve */
TB.FORM_VALUES = null;
arm();
TB._lastItem = { id: 264, name: 'Steady In - Ease Out' };
var v1 = TB.get(264).run({}, TB._lastItem);
TB._lastItem = { id: 264, name: 'Slow In - Steady Out' };
var v2 = TB.get(264).run({}, TB._lastItem);

ok(executed + skipped === 174, 'sweep covered all 174 spec entries (' + executed + ' run, ' + skipped + ' registration-only)');
ok(skipOK, 'side-effect tools registered: ' + Object.keys(SKIP).join(','));
ok(ARM_ERR === 0, 'fixture re-arm stayed healthy (' + ARM_ERR + ' failures)');
ok(v1 >= 0 && v2 >= 0, 'duplicate id 264 runs under both names (' + v1 + ', ' + v2 + ')');
ok(errors === 0, 'no unexpected tool errors during sweep (' + errors + ' errored, ' + envGated + ' env-gated)');
if (errList.length) writeLn(errList.join('\n'));

writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
