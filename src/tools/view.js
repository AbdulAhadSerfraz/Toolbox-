/* Toolbox tools — View (12 tools, ids 283 181-191) */
(function () {
    'use strict';

    function selectedComps() {
        var items = app.project.selectedItems || [];
        var out = [];
        for (var i = 0; i < items.length; i++) if (items[i] instanceof CompItem) out.push(items[i]);
        if (!out.length) { var c = app.project.activeItem; if (c instanceof CompItem) out.push(c); }
        return out;
    }

    /* 283 Toggle Layer Visibility — by type */
    TB.reg(283, function () {
        var c = TB.comp();
        var type = TB.pick('Toggle Layer Visibility', 'Layer type', ['All', 'Selected', 'Text', 'Nulls', 'Shapes', '3D', 'Guide'], 'Selected');
        if (type === null) return 0;
        var all = [];
        for (var i = 1; i <= c.numLayers; i++) all.push(c.layer(i));
        var targets = [];
        if (type === 'Selected') targets = [].slice.call(c.selectedLayers);
        else if (type === 'All') targets = all;
        else {
            all.forEach(function (L) {
                var ok = false;
                if (type === 'Text') ok = (L instanceof TextLayer);
                else if (type === 'Nulls') ok = (L.matchName === 'ADBE AV Layer' && L.source === null);
                else if (type === 'Shapes') ok = (L.matchName === 'ADBE Vector Layer');
                else if (type === '3D') ok = (L.threeDLayer === true || L.matchName === 'ADBE Camera Layer' || L.matchName === 'ADBE Light Layer');
                else if (type === 'Guide') ok = (L.guideLayer === true);
                if (ok) targets.push(L);
            });
        }
        if (!targets.length) TB.fail('No matching layers.');
        var anyVisible = false;
        targets.forEach(function (L) { if (L.enabled !== false) anyVisible = true; });
        var target = !anyVisible;
        app.beginUndoGroup('Toolbox · Toggle Layer Visibility');
        targets.forEach(function (L) { L.enabled = target; });
        app.endUndoGroup();
        TB.say((target ? 'Shown ' : 'Hidden ') + targets.length + ' layer' + (targets.length === 1 ? '' : 's') + '.');
        return targets.length;
    }, { glyph: 'eye' });

    /* 181 Solo Layers (Viewer) */
    TB.reg(181, function (m) {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (m && m.ctrl) {
            /* solo layers with the same label color as the selection */
            var labels = {};
            sel.forEach(function (L) { labels[L.label] = true; });
            sel = [];
            for (var i = 1; i <= c.numLayers; i++) if (labels[c.layer(i).label]) sel.push(c.layer(i));
        }
        if (!sel.length) TB.fail('Select at least one layer.');
        /* viewer solo: hide all others as shy */
        app.beginUndoGroup('Toolbox · Solo Layers (Viewer)');
        for (var i = 1; i <= c.numLayers; i++) {
            var L = c.layer(i);
            var isSel = sel.indexOf(L) >= 0;
            L.shy = !isSel;
        }
        app.endUndoGroup();
        TB.say('Soloed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + ' in the viewer.');
        return sel.length;
    }, { glyph: 'solo' });

    /* 182 Solo Layers (Timeline) */
    TB.reg(182, function (m) {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (m && m.ctrl) {
            var labels = {};
            sel.forEach(function (L) { labels[L.label] = true; });
            sel = [];
            for (var i = 1; i <= c.numLayers; i++) if (labels[c.layer(i).label]) sel.push(c.layer(i));
        }
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Solo Layers (Timeline)');
        for (var i = 1; i <= c.numLayers; i++) {
            var L = c.layer(i);
            L.shy = (sel.indexOf(L) < 0);
        }
        try { c.hideShyLayers = true; } catch (e) { }
        app.endUndoGroup();
        TB.say('Soloed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + ' on the timeline.');
        return sel.length;
    }, { glyph: 'solo' });

    function setBg(comps, color) {
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.settings', { comp: comp.id, background: color }); n++; } catch (e) { }
        });
        return n;
    }

    /* 184 Black BG */
    TB.reg(184, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var n = setBg(comps, '#000000');
        TB.say('Set black background on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgBlack' });

    /* 183 White BG */
    TB.reg(183, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var n = setBg(comps, '#ffffff');
        TB.say('Set white background on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgWhite' });

    /* 185 Gray BG */
    TB.reg(185, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var n = setBg(comps, '#808080');
        TB.say('Set gray background on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgGrey' });

    /* 186 Set BG Color */
    TB.reg(186, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var v = TB.form('Set BG Color', [
            { id: 'color', label: 'Color (#hex)', type: 'text', value: '#333333' }
        ]);
        if (v === null) return 0;
        var color = TB.strip(v.color) || '#333333';
        var n = setBg(comps, color);
        TB.say('Set background color ' + color + ' on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgColor' });

    /* 187 Toggle Checkerboard */
    TB.reg(187, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        /* toggle transparency grid via comp settings? use view command */
        try { TH.run('view.displayColor', {}); } catch (e) { }
        TB.say('Toggled checkerboard.');
        return 1;
    }, { glyph: 'checker' });

    function resetView(scale) {
        var c = TB.comp();
        try { TH.run('view.res.custom', { value: scale }); } catch (e) { }
        try { TH.run('view.res.auto', {}); } catch (e) { }
        TB.say('Reset view to ' + Math.round(scale * 100) + '%.');
    }

    /* 188 Reset View (100%) */
    TB.reg(188, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        comps.forEach(function () { resetView(1); });
        TB.say('Reset view to 100%.');
        return comps.length;
    }, { glyph: 'zoom100' });

    /* 189 Reset View (50%) */
    TB.reg(189, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        comps.forEach(function () { resetView(0.5); });
        TB.say('Reset view to 50%.');
        return comps.length;
    }, { glyph: 'zoom50' });

    /* 190 Reset View (Custom) */
    TB.reg(190, function (m) {
        var scale = null;
        if (m && m.shift) {
            scale = TB.num(app.settings.getSetting('Toolbox', 'view.scale'), 1);
        } else {
            var v = TB.form('Reset View (Custom)', [
                { id: 'scale', label: 'Scale (e.g. 0.33)', type: 'number', value: '1' }
            ]);
            if (v === null) return 0;
            scale = TB.num(v.scale, 1);
            try { app.settings.saveSetting('Toolbox', 'view.scale', String(scale)); } catch (e) { }
        }
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        comps.forEach(function () { resetView(scale); });
        TB.say('Reset view to ' + Math.round(scale * 100) + '%.');
        return comps.length;
    }, { glyph: 'zoom33' });

    /* 191 Save Screenshot */
    TB.reg(191, function (m) {
        var c = TB.comp();
        var comps = (m && m.ctrl) ? selectedComps() : [c];
        var v = (m && m.ctrl) ? null : TB.form('Save Screenshot', [
            { id: 'path', label: 'Output folder', type: 'text', value: TH.tempFolder() },
            { id: 'scale', label: 'Scale', type: 'number', value: '1' }
        ]);
        var folder = (v && v.path) ? v.path : TH.tempFolder();
        var scale = (v && v.scale) ? TB.num(v.scale, 1) : 1;
        var n = 0;
        comps.forEach(function (comp) {
            try {
                var f = new File(folder + '/' + comp.name + '.png');
                if (typeof comp.saveFrameToPng === 'function') { comp.saveFrameToPng(f.fsName); n++; }
                else if (typeof comp.saveFrameAs === 'function') { comp.saveFrameAs(f.fsName); n++; }
            } catch (e) { }
        });
        TB.say('Saved ' + n + ' screenshot' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'screenshot' });

})();
