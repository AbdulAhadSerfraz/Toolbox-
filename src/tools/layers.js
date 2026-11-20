/* Toolbox tools — Layers (17 tools, ids 118-135 + 267 + 273 + 230) */
(function () {
    'use strict';

    function allLayers(c) { var out = [], i; for (i = 1; i <= c.numLayers; i++) out.push(c.layer(i)); return out; }
    function applySel(c, list) {
        var i, j, on = [];
        for (i = 1; i <= c.numLayers; i++) c.layer(i).selected = false;
        for (i = 0; i < list.length; i++) {
            for (j = 0; j < on.length; j++) if (on[j] === list[i]) break;
            if (j === on.length) { list[i].selected = true; on.push(list[i]); }
        }
        return on.length;
    }
    function layerIndex(c, L) { for (var i = 1; i <= c.numLayers; i++) if (c.layer(i) === L) return i; return -1; }

    /* 118 Trim Layers — trim in/out points to the work area */
    TB.reg(118, function () {
        var c = TB.comp(), all = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var n = 0, i, L;
        app.beginUndoGroup('Toolbox · Trim Layers');
        for (i = 0; i < all.length; i++) {
            L = all[i];
            if (L.inPoint < c.workAreaStart) L.inPoint = c.workAreaStart;
            if (L.outPoint > c.workAreaStart + c.workAreaDuration) L.outPoint = c.workAreaStart + c.workAreaDuration;
            n++;
        }
        app.endUndoGroup();
        TB.say('Trimmed ' + n + ' layer' + (n === 1 ? '' : 's') + ' to the work area.');
        return n;
    }, { glyph: 'trim' });

    /* 267 Trim to Layer (trim comp work area to selected layer bounds) */
    TB.reg(267, function () {
        var c = TB.comp();
        var L = c.selectedLayers.length ? c.selectedLayers[0] : null;
        if (!L) TB.fail('Select a layer to trim the composition to.');
        c.workAreaStart = L.inPoint;
        c.workAreaDuration = L.outPoint - L.inPoint;
        TB.say('Work area set to ' + L.name + ' (' + TB.timeLabel(c, L.inPoint) + ' → ' + TB.timeLabel(c, L.outPoint) + ').');
        return 1;
    }, { glyph: 'trim' });

    /* 119 Offset Layers in Time */
    TB.reg(119, function () {
        var c = TB.comp();
        var v = TB.form('Offset Layers in Time', [
            { id: 'frames', label: 'Offset (frames, + or -)', type: 'number', value: '10' }
        ]);
        if (v === null) return 0;
        var frames = TB.num(v.frames, 10);
        var sec = frames / (c.frameRate || 24);
        var all = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var i;
        app.beginUndoGroup('Toolbox · Offset Layers');
        for (i = 0; i < all.length; i++) {
            all[i].startTime += sec;
        }
        app.endUndoGroup();
        TB.say('Offset ' + all.length + ' layer' + (all.length === 1 ? '' : 's') + ' by ' + frames + ' frame' + (Math.abs(frames) === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'offset' });

    /* 120 Shift Layer Times (random-ish stagger) */
    TB.reg(120, function () {
        var c = TB.comp();
        var v = TB.form('Shift Layer Times', [
            { id: 'frames', label: 'Shift (frames)', type: 'number', value: '5' },
            { id: 'stagger', label: 'Stagger each layer by (frames)', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var base = TB.num(v.frames, 5) / (c.frameRate || 24);
        var stag = TB.num(v.stagger, 0) / (c.frameRate || 24);
        var all = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var i;
        app.beginUndoGroup('Toolbox · Shift Layer Times');
        for (i = 0; i < all.length; i++) all[i].startTime += base + i * stag;
        app.endUndoGroup();
        TB.say('Shifted ' + all.length + ' layer' + (all.length === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'shiftKeys' });

    /* 121 Reorder Layers — move selected to top/bottom/up/down */
    TB.reg(121, function (m) {
        var c = TB.comp();
        var dir = TB.pick('Reorder Layers', 'Move selected layers', ['To Top', 'Up', 'Down', 'To Bottom'], 'Up');
        if (dir === null) return 0;
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Reorder Layers');
        if (dir === 'To Top') {
            for (var i = 0; i < sel.length; i++) sel[i].moveToBeginning();
        } else if (dir === 'To Bottom') {
            for (var i = sel.length - 1; i >= 0; i--) sel[i].moveToEnd();
        } else if (dir === 'Up') {
            for (var i = 0; i < sel.length; i++) { try { sel[i].moveBefore(sel[i].index > 1 ? c.layer(sel[i].index - 1) : sel[i]); } catch (e) { } }
        } else {
            for (var i = sel.length - 1; i >= 0; i--) { try { sel[i].moveAfter(sel[i].index < c.numLayers ? c.layer(sel[i].index + 1) : sel[i]); } catch (e) { } }
        }
        app.endUndoGroup();
        TB.say('Reordered ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + ' (' + dir + ').');
        return sel.length;
    }, { glyph: 'order' });

    /* 122 Parent to Null — create a null and parent selected layers to it */
    TB.reg(122, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        var nullL = c.layers.addNull();
        nullL.name = 'Null ' + sel.length;
        nullL.moveBefore(sel[0]);
        app.beginUndoGroup('Toolbox · Parent to Null');
        for (var i = 0; i < sel.length; i++) sel[i].parent = nullL;
        app.endUndoGroup();
        nullL.selected = true;
        TB.say('Created null "' + nullL.name + '" and parented ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'parents' });

    /* 123 Parent in Order — parent each selected layer to the one above */
    TB.reg(123, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers).sort(function (a, b) { return a.index - b.index; });
        if (sel.length < 2) TB.fail('Select at least two layers.');
        app.beginUndoGroup('Toolbox · Parent in Order');
        for (var i = 1; i < sel.length; i++) sel[i].parent = sel[i - 1];
        app.endUndoGroup();
        TB.say('Parented ' + (sel.length - 1) + ' layer' + (sel.length - 1 === 1 ? '' : 's') + ' in order.');
        return sel.length - 1;
    }, { glyph: 'parents' });

    /* 124 Parent to Above Layer */
    TB.reg(124, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        var n = 0;
        app.beginUndoGroup('Toolbox · Parent to Above');
        for (var i = 0; i < sel.length; i++) {
            var idx = sel[i].index;
            if (idx > 1) { sel[i].parent = c.layer(idx - 1); n++; }
        }
        app.endUndoGroup();
        TB.say('Parented ' + n + ' layer' + (n === 1 ? '' : 's') + ' to the layer above.');
        return n;
    }, { glyph: 'parents' });

    /* 273 Parent to First Selected */
    TB.reg(273, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (sel.length < 2) TB.fail('Select at least two layers.');
        var root = sel[0];
        app.beginUndoGroup('Toolbox · Parent to First');
        for (var i = 1; i < sel.length; i++) sel[i].parent = root;
        app.endUndoGroup();
        TB.say('Parented ' + (sel.length - 1) + ' layer' + (sel.length - 1 === 1 ? '' : 's') + ' to ' + root.name + '.');
        return sel.length - 1;
    }, { glyph: 'parents' });

    /* 230 Duplicate Layers */
    TB.reg(230, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Duplicate Layers');
        var n = 0;
        for (var i = 0; i < sel.length; i++) { sel[i].duplicate(); n++; }
        app.endUndoGroup();
        TB.say('Duplicated ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'duplicate' });

    /* 125 Rename Layers */
    TB.reg(125, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var base = TB.prompt('Rename Layers', 'Base name', sel.length === 1 ? sel[0].name : 'Layer');
        if (base === null) return 0;
        base = TB.strip(base);
        if (!base) TB.fail('Enter a name.');
        var pad = String(sel.length).length;
        app.beginUndoGroup('Toolbox · Rename Layers');
        for (var i = 0; i < sel.length; i++) {
            sel[i].name = sel.length === 1 ? base : base + ' ' + TB.pad(i + 1, pad);
        }
        app.endUndoGroup();
        TB.say('Renamed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'rename' });

    /* 126 Layer Colors */
    TB.reg(126, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var col = TB.pick('Layer Colors', 'Label color index (1-16)', ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'], '1');
        if (col === null) return 0;
        var n = parseInt(col, 10);
        app.beginUndoGroup('Toolbox · Layer Colors');
        for (var i = 0; i < sel.length; i++) sel[i].label = n;
        app.endUndoGroup();
        TB.say('Set label color ' + n + ' on ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'palette' });

    /* 127 Lock/Unlock All */
    TB.reg(127, function (m) {
        var c = TB.comp();
        var all = allLayers(c);
        var lock = m && m.shift ? false : true;
        /* toggle: if any unlocked, lock all; else unlock all */
        var anyUnlocked = false, i;
        for (i = 0; i < all.length; i++) if (all[i].locked !== true) { anyUnlocked = true; break; }
        var target = anyUnlocked;
        app.beginUndoGroup('Toolbox · Lock/Unlock All');
        for (i = 0; i < all.length; i++) all[i].locked = target;
        app.endUndoGroup();
        TB.say((target ? 'Locked ' : 'Unlocked ') + all.length + ' layer' + (all.length === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'lock' });

    /* 128 Lock/Unlock Shy */
    TB.reg(128, function () {
        var c = TB.comp();
        var all = allLayers(c);
        var anyShy = false, i;
        for (i = 0; i < all.length; i++) if (all[i].shy === true) { anyShy = true; break; }
        var target = !anyShy;
        app.beginUndoGroup('Toolbox · Lock/Unlock Shy');
        for (i = 0; i < all.length; i++) all[i].shy = target;
        app.endUndoGroup();
        TB.say((target ? 'Made ' : 'Unmade ') + all.length + ' layer' + (all.length === 1 ? '' : 's') + ' shy.');
        return all.length;
    }, { glyph: 'shy' });

    /* 129 Enable/Disable All */
    TB.reg(129, function (m) {
        var c = TB.comp();
        var all = allLayers(c);
        var anyEnabled = false, i;
        for (i = 0; i < all.length; i++) if (all[i].enabled !== false) { anyEnabled = true; break; }
        var target = !anyEnabled;
        app.beginUndoGroup('Toolbox · Enable/Disable All');
        for (i = 0; i < all.length; i++) all[i].enabled = target;
        app.endUndoGroup();
        TB.say((target ? 'Enabled ' : 'Disabled ') + all.length + ' layer' + (all.length === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'eye' });

    /* 134 Attachment Point (anchor to a layer's anchor point) */
    TB.reg(134, function () {
        TB.notice('Attachment Point', ['Select a layer, then run this tool to snap its anchor point to its parent position.']);
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Attachment Point');
        var n = 0;
        for (var i = 0; i < sel.length; i++) {
            var L = sel[i], p = null;
            try { p = L.parent; } catch (e) { p = null; }
            if (p) {
                try {
                    var ap = L.property('Anchor Point') || L.transform.anchorPoint;
                    var pos = p.property('Position') || p.transform.position;
                    ap.setValue(pos.value);
                    n++;
                } catch (e) { }
            }
        }
        app.endUndoGroup();
        TB.say('Snapped anchor points on ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'anchor' });

    /* 135 Reset Layer (transform reset to defaults) */
    TB.reg(135, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        app.beginUndoGroup('Toolbox · Reset Layer');
        for (var i = 0; i < sel.length; i++) {
            var L = sel[i];
            try { (L.property('Position') || L.transform.position).setValue([0, 0]); } catch (e) { }
            try { (L.property('Scale') || L.transform.scale).setValue([100, 100, 100]); } catch (e) { }
            try { (L.property('Rotation') || L.transform.rotation).setValue(0); } catch (e) { }
            try { (L.property('Opacity') || L.transform.opacity).setValue(100); } catch (e) { }
            try { (L.property('Anchor Point') || L.transform.anchorPoint).setValue([0, 0]); } catch (e) { }
        }
        app.endUndoGroup();
        TB.say('Reset transforms on ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'reset' });

})();
