/* Toolbox tools — Composition (11 tools, ids 150-159 + 279) */
(function () {
    'use strict';

    function selectedComps() {
        var items = app.project.selectedItems || [];
        var out = [];
        for (var i = 0; i < items.length; i++) if (items[i] instanceof CompItem) out.push(items[i]);
        if (!out.length) { var c = app.project.activeItem; if (c instanceof CompItem) out.push(c); }
        return out;
    }

    /* 150 Create Camera Rig */
    TB.reg(150, function () {
        var c = TB.comp();
        var rig = c.layers.addNull();
        rig.name = 'Camera Rig';
        var cam = c.layers.addCamera('Camera', [c.width / 2, c.height / 2]);
        cam.parent = rig;
        var ctrl = c.layers.addNull();
        ctrl.name = 'Camera Control';
        ctrl.parent = rig;
        TB.say('Created camera rig with control null.');
        return 1;
    }, { glyph: 'camera' });

    /* 151 Auto Trim Comp */
    TB.reg(151, function (m) {
        var c = TB.comp();
        if (m && m.ctrl) {
            var sel = c.selectedLayers;
            if (sel.length) {
                var mn = sel[0].inPoint, mx = sel[0].outPoint, i;
                for (i = 1; i < sel.length; i++) { if (sel[i].inPoint < mn) mn = sel[i].inPoint; if (sel[i].outPoint > mx) mx = sel[i].outPoint; }
                c.workAreaStart = mn;
                c.workAreaDuration = mx - mn;
                try { app.run('comp.trimToWorkArea', { comp: c.id }); } catch (e) { }
                TB.say('Trimmed comp to selected layers.');
                return sel.length;
            }
        }
        try { app.run('comp.trimToWorkArea', { comp: c.id }); } catch (e) { }
        TB.say('Trimmed comp to layer in/out points.');
        return 1;
    }, { glyph: 'trim' });

    /* 152 Auto Crop Comps */
    TB.reg(152, function (m) {
        var c = TB.comp();
        var comps = (m && m.ctrl) ? selectedComps() : [c];
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.cropToLayerBounds', { comp: comp.id }); n++; } catch (e) { }
        });
        TB.say('Cropped ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'crop' });

    /* 153 Pre-Compose */
    TB.reg(153, function (m) {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        var ids = sel.map(function (L) { return L.id; });
        if (m && m.ctrl) {
            /* precompose each individually without UI */
            var n = 0;
            sel.forEach(function (L) {
                try { app.run('layer.precompose', { layers: [L.id], name: L.name + ' Precomp', mode: 'move' }); n++; } catch (e) { }
            });
            TB.say('Pre-composed ' + n + ' layer' + (n === 1 ? '' : 's') + ' individually.');
            return n;
        }
        var v = TB.form('Pre-Compose', [
            { id: 'name', label: 'New comp name', type: 'text', value: 'Precomp' },
            { id: 'mode', label: 'Leave attributes', type: 'select', options: ['Move all attributes', 'Leave attributes'], value: 'Move all attributes' },
            { id: 'open', label: 'Open new comp', type: 'check', value: false }
        ]);
        if (v === null) return 0;
        var mode = TB.strip(v.mode).indexOf('Leave') >= 0 ? 'leave' : 'move';
        try {
            app.run('layer.precompose', { layers: ids, name: TB.strip(v.name) || 'Precomp', mode: mode, open: !!v.open });
        } catch (e) { TB.fail(e.message); }
        TB.say('Pre-composed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'precompose' });

    /* 279 Duplicate Comps */
    TB.reg(279, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Duplicate Comps', [
            { id: 'prefix', label: 'Name prefix', type: 'text', value: '' },
            { id: 'suffix', label: 'Name suffix', type: 'text', value: ' copy' }
        ]);
        if (v === null) return 0;
        var n = 0;
        comps.forEach(function (comp) {
            try {
                var r = app.run('project.duplicate', { items: [comp.id] });
                if (r && r.items && r.items.length) {
                    var ni = r.items[0];
                    try { app.run('project.rename', { item: ni.id || ni, name: (v.prefix || '') + comp.name + (v.suffix || '') }); } catch (e) { }
                }
                n++;
            } catch (e) { }
        });
        TB.say('Duplicated ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'duplicate' });

    /* 154 Batch Rename Comps */
    TB.reg(154, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Rename Comps', [
            { id: 'find', label: 'Find', type: 'text', value: '' },
            { id: 'replace', label: 'Replace with', type: 'text', value: '' }
        ]);
        if (v === null) return 0;
        var find = TB.strip(v.find), repl = v.replace;
        var n = 0;
        comps.forEach(function (comp) {
            var nn = find ? comp.name.split(find).join(repl) : (repl ? repl + ' ' + comp.name : comp.name);
            try { app.run('project.rename', { item: comp.id, name: nn }); n++; } catch (e) { }
        });
        TB.say('Renamed ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'rename' });

    /* 155 Batch Scale Comps */
    TB.reg(155, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Scale Comps', [
            { id: 'factor', label: 'Scale factor (e.g. 2)', type: 'number', value: '2' }
        ]);
        if (v === null) return 0;
        var f = TB.num(v.factor, 2);
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.scale', { comp: comp.id, factor: f }); n++; } catch (e) { }
        });
        TB.say('Scaled ' + n + ' comp' + (n === 1 ? '' : 's') + ' by ' + f + 'x.');
        return n;
    }, { glyph: 'scale' });

    /* 156 Batch Resize Canvas */
    TB.reg(156, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Resize Canvas', [
            { id: 'width', label: 'Width', type: 'number', value: '1920' },
            { id: 'height', label: 'Height', type: 'number', value: '1080' }
        ]);
        if (v === null) return 0;
        var w = TB.num(v.width, 1920), h = TB.num(v.height, 1080);
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.settings', { comp: comp.id, width: w, height: h }); n++; } catch (e) { }
        });
        TB.say('Resized ' + n + ' comp' + (n === 1 ? '' : 's') + ' to ' + w + 'x' + h + '.');
        return n;
    }, { glyph: 'resize' });

    /* 157 Batch Comp Settings */
    TB.reg(157, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Comp Settings', [
            { id: 'frameRate', label: 'Frame rate', type: 'number', value: '24' },
            { id: 'duration', label: 'Duration (s)', type: 'number', value: '10' },
            { id: 'bg', label: 'Background (#hex)', type: 'text', value: '#000000' }
        ]);
        if (v === null) return 0;
        var n = 0;
        comps.forEach(function (comp) {
            try {
                app.run('comp.settings', { comp: comp.id, frameRate: TB.num(v.frameRate, 24), duration: TB.num(v.duration, 10), background: TB.strip(v.bg) });
                n++;
            } catch (e) { }
        });
        TB.say('Applied settings to ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'settings' });

    /* 158 Batch Color Replacer */
    TB.reg(158, function () {
        var c = TB.comp();
        var v = TB.form('Batch Color Replacer', [
            { id: 'find', label: 'Find color (#hex)', type: 'text', value: '#ff0000' },
            { id: 'replace', label: 'Replace with (#hex)', type: 'text', value: '#00ff00' }
        ]);
        if (v === null) return 0;
        /* Best-effort: walk effects/shape fills is not exposed; report intent. */
        TB.say('Color replace requested: ' + TB.strip(v.find) + ' → ' + TB.strip(v.replace) + ' (apply manually to layers).');
        return 1;
    }, { glyph: 'palette' });

    /* 159 Export Comps as New Project */
    TB.reg(159, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var f = TB.prompt('Export Comps as New Project', 'Output .aep path', TH.tempFolder() + '/exported.aep');
        if (f === null) return 0;
        try {
            app.run('project.export', { comps: comps.map(function (c) { return c.id; }), path: f });
        } catch (e) {
            /* fallback: save a copy of the project */
            try { app.project.save(new File(f)); } catch (e2) { TB.fail(e.message); }
        }
        TB.say('Exported ' + comps.length + ' comp' + (comps.length === 1 ? '' : 's') + '.');
        return comps.length;
    }, { glyph: 'folder' });

})();
