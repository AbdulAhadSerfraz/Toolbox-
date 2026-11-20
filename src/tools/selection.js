/* Toolbox tools — Selection (17 tools, ids 101-116 + 231) */
(function () {
    'use strict';

    /* ---------- shared helpers ---------- */

    function allLayers(c) {
        var out = [], i;
        for (i = 1; i <= c.numLayers; i++) out.push(c.layer(i));
        return out;
    }

    /* Replace the comp's layer selection with exactly `list`. */
    function applySel(c, list) {
        var i, j, on = [];
        for (i = 1; i <= c.numLayers; i++) c.layer(i).selected = false;
        for (i = 0; i < list.length; i++) {
            for (j = 0; j < on.length; j++) if (on[j] === list[i]) break;
            if (j === on.length) { list[i].selected = true; on.push(list[i]); }
        }
        return on.length;
    }

    function invert(list, all) {
        var out = [], i, j;
        for (i = 0; i < all.length; i++) {
            for (j = 0; j < list.length; j++) if (list[j] === all[i]) break;
            if (j === list.length) out.push(all[i]);
        }
        return out;
    }

    /* ---------- layer predicates ---------- */

    function isText(L) { try { return L instanceof TextLayer; } catch (e) { return false; } }
    function isNull(L) {
        try { return L.matchName === 'ADBE AV Layer' && L.source === null; }
        catch (e) { return false; }
    }
    function isPrecomp(L) { try { return L.source instanceof CompItem; } catch (e) { return false; } }
    function isShape(L) { try { return L.matchName === 'ADBE Vector Layer'; } catch (e) { return false; } }
    function is3D(L) {
        try {
            if (L.threeDLayer === true) return true;
            var m = L.matchName;
            return m === 'ADBE Camera Layer' || m === 'ADBE Light Layer';
        } catch (e) { return false; }
    }
    function isGuide(L) { try { return L.guideLayer === true; } catch (e) { return false; } }
    function isLight(L) { try { return L instanceof LightLayer; } catch (e) { return false; } }
    function isAudio(L) { try { return L.hasAudio === true; } catch (e) { return false; } }

    /* Shift inverts the predicate for the "select all except X" variants. */
    function pickBy(c, pred, m) {
        var all = allLayers(c), out = [], i;
        var want = m && m.shift ? false : true;
        for (i = 0; i < all.length; i++) if (pred(all[i]) === want) out.push(all[i]);
        var n = applySel(c, out);
        if (n === 0) TB.say(want ? 'No matching layers.' : 'Every layer matches — nothing to invert.');
        return n;
    }

    /* ---------- remembered input (Ctrl variants) ---------- */

    function lastInput(key, def) {
        try {
            var v = app.settings.getSetting('Toolbox', key);
            if (v === undefined || v === null || v === '') return def;
            return v;
        } catch (e) { return def; }
    }
    function saveInput(key, v) {
        try { app.settings.saveSetting('Toolbox', key, String(v)); } catch (ignore) { }
    }

    /* ---------- property path helpers (tool 101) ---------- */

    function propPath(p) {
        var parts = [p.name], g = p;
        while (g && g.propertyDepth > 1) { g = g.propertyGroup(1); parts.unshift(g.name); }
        return parts.join('/');
    }

    function findProp(L, path) {
        var p = null;
        try { p = L.property(path); } catch (e) { p = null; }
        if (p && p.propertyType === PropertyType.PROPERTY) return p;
        /* fall back: match the leaf name anywhere below the layer */
        var leaf = path.split('/').pop();
        (function walk(node, depth) {
            if (p || depth > 6) return;
            var i, q;
            for (i = 1; i <= node.numProperties; i++) {
                q = node.property(i);
                if (!q) continue;
                if (q.propertyType === PropertyType.PROPERTY) {
                    if (q.name === leaf) { p = q; return; }
                } else if (q.propertyType === PropertyType.INDEXED_GROUP ||
                           q.propertyType === PropertyType.NAMED_GROUP) {
                    if (q.name === leaf) {
                        var j, r;
                        for (j = 1; j <= q.numProperties; j++) {
                            r = q.property(j);
                            if (r && r.propertyType === PropertyType.PROPERTY) { p = r; return; }
                        }
                    }
                    walk(q, depth + 1);
                }
            }
        })(L, 0);
        return p;
    }

    /* ==================== tools ==================== */

    /* 101 Select Matching Property */
    TB.reg(101, function (m) {
        var c = TB.comp(), i;
        var path = null;
        var sel = c.selectedProperties;
        for (i = 0; i < sel.length; i++) {
            if (sel[i].propertyType === PropertyType.PROPERTY) { path = propPath(sel[i]); break; }
        }
        if (m.ctrl && !path) path = lastInput('sel.matching', null);
        if (!path) {
            var answer = TB.prompt('Select Matching Property',
                'Property name or path', lastInput('sel.matching', 'Transform/Position'));
            if (answer === null) return 0;
            path = TB.strip(answer);
            if (!path) TB.fail('Enter a property name, e.g. Transform/Position.');
        }
        saveInput('sel.matching', path);

        var targets = (c.selectedLayers.length > 1) ? [].slice.call(c.selectedLayers) : allLayers(c);
        try { app.run('edit.deselectAll', {}); } catch (ignore) { }
        var n = 0, found = null;
        for (i = 0; i < targets.length; i++) {
            found = findProp(targets[i], path);
            if (found) { try { found.selected = true; n++; } catch (ignore) { } }
        }
        if (!n) TB.fail('No property named "' + path + '" was found on the target layers.');
        TB.say('Selected "' + path + '" on ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'matching' });

    /* 102 Inverse Selection */
    TB.reg(102, function () {
        var c = TB.comp();
        var n = applySel(c, invert(c.selectedLayers, allLayers(c)));
        TB.say('Inverted selection — ' + n + ' layer' + (n === 1 ? '' : 's') + ' selected.');
        return n;
    }, { glyph: 'invert' });

    /* 103 Select Layers at Frame */
    TB.reg(103, function (m) {
        var c = TB.comp(), t = c.time, all = allLayers(c), out = [], i, L;
        var filter = m.ctrl ? 'enabled' : (m.shift ? 'disabled' : null);
        for (i = 0; i < all.length; i++) {
            L = all[i];
            if (!(L.inPoint <= t + 1e-6 && L.outPoint >= t - 1e-6)) continue;
            if (filter === 'enabled' && L.enabled !== true) continue;
            if (filter === 'disabled' && L.enabled !== false) continue;
            out.push(L);
        }
        var n = applySel(c, out);
        TB.say('Selected ' + n + ' layer' + (n === 1 ? '' : 's') + ' at ' +
            TB.timeLabel(c, t) + (filter ? ' (' + filter + ' only)' : '') + '.');
        return n;
    }, { glyph: 'frame' });

    /* 104 Select Odd/Even Layers */
    TB.reg(104, function () {
        var c = TB.comp();
        var which = TB.pick('Select Odd/Even Layers', 'Layer numbers', ['Odd', 'Even'], 'Odd');
        if (which === null) return 0;
        var wantOdd = TB.strip(which).toLowerCase() !== 'even';
        var all = allLayers(c), out = [], i;
        for (i = 0; i < all.length; i++) if (((i + 1) % 2 === 1) === wantOdd) out.push(all[i]);
        var n = applySel(c, out);
        TB.say('Selected ' + n + ' ' + (wantOdd ? 'odd' : 'even') + '-numbered layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'oddEven' });

    /* 231 Select Every Nth Layer */
    TB.reg(231, function (m) {
        var c = TB.comp();
        var stored = lastInput('sel.everyNth', '2|1');
        var parts = String(stored).split('|');
        var n = 2, start = 1;
        if (!m.ctrl) {
            var v = TB.form('Select Every Nth Layer', [
                { id: 'n', label: 'Select every Nth layer', type: 'number', value: parts[0] || '2' },
                { id: 'start', label: 'Starting at layer number', type: 'number', value: parts[1] || '1' }
            ]);
            if (v === null) return 0;
            n = Math.round(TB.num(v.n, 2));
            start = Math.round(TB.num(v.start, 1));
            if (n < 1) TB.fail('N must be at least 1.');
            saveInput('sel.everyNth', n + '|' + start);
        } else {
            n = Math.max(1, Math.round(TB.num(parts[0], 2)));
            start = Math.max(1, Math.round(TB.num(parts[1], 1)));
        }
        var all = allLayers(c), out = [], i;
        for (i = start - 1; i < all.length; i += n) out.push(all[i]);
        var count = applySel(c, out);
        TB.say('Selected ' + count + ' of ' + all.length + ' layers (every ' + n + 'th, starting at ' + start + ').');
        return count;
    }, { glyph: 'nth' });

    /* 105 Random Select/Deselect */
    TB.reg(105, function () {
        var c = TB.comp();
        var v = TB.form('Random Select/Deselect', [
            { id: 'percent', label: 'Percent of layers', type: 'number', value: '50' },
            { id: 'action', label: 'Action', type: 'select', options: ['Select', 'Deselect'], value: 'Select' }
        ]);
        if (v === null) return 0;
        var pct = TB.clamp(TB.num(v.percent, 50), 0, 100);
        var selecting = TB.strip(v.action).toLowerCase() !== 'deselect';
        var all = allLayers(c), current = c.selectedLayers, out = [], i, L, keep;
        for (i = 0; i < all.length; i++) {
            L = all[i];
            keep = current.indexOf(L) >= 0;
            if (Math.random() * 100 < pct) {
                /* hit: select (selecting) or deselect (deselecting) */
                keep = selecting ? true : false;
            } else {
                /* miss: keep prior state when deselecting, drop when selecting */
                if (selecting) keep = false;
            }
            if (keep) out.push(L);
        }
        var n = applySel(c, out);
        TB.say((selecting ? 'Randomly selected ' : 'Randomly kept ') + n +
            ' of ' + all.length + ' layers (' + Math.round(pct) + '%).');
        return n;
    }, { glyph: 'dice' });

    /* 106 Select Text Objects (Shift = everything except text) */
    TB.reg(106, function (m) {
        var c = TB.comp(), n = pickBy(c, isText, m);
        if (n) TB.say((m.shift ? 'Selected all layers except text: ' : 'Selected text layers: ') + n + '.');
        return n;
    }, { glyph: 'text' });

    /* 107 Select Nulls (Shift = everything except nulls) */
    TB.reg(107, function (m) {
        var c = TB.comp(), n = pickBy(c, isNull, m);
        if (n) TB.say((m.shift ? 'Selected all layers except nulls: ' : 'Selected null layers: ') + n + '.');
        return n;
    }, { glyph: 'null' });

    /* 108 Select Precomps (Shift = everything except precomps) */
    TB.reg(108, function (m) {
        var c = TB.comp(), n = pickBy(c, isPrecomp, m);
        if (n) TB.say((m.shift ? 'Selected all layers except pre-comps: ' : 'Selected pre-comp layers: ') + n + '.');
        return n;
    }, { glyph: 'precomp' });

    /* 109 Select Shape Objects (Shift = everything except shapes) */
    TB.reg(109, function (m) {
        var c = TB.comp(), n = pickBy(c, isShape, m);
        if (n) TB.say((m.shift ? 'Selected all layers except shapes: ' : 'Selected shape layers: ') + n + '.');
        return n;
    }, { glyph: 'shape' });

    /* 110 Select 3D Layers (Shift = everything except 3D) */
    TB.reg(110, function (m) {
        var c = TB.comp(), n = pickBy(c, is3D, m);
        if (n) TB.say((m.shift ? 'Selected all non-3D layers: ' : 'Selected 3D layers: ') + n + '.');
        return n;
    }, { glyph: 'cube' });

    /* 111 Select Guide Layers (Shift = everything except guides) */
    TB.reg(111, function (m) {
        var c = TB.comp(), n = pickBy(c, isGuide, m);
        if (n) TB.say((m.shift ? 'Selected all non-guide layers: ' : 'Selected guide layers: ') + n + '.');
        return n;
    }, { glyph: 'guide' });

    /* 112 Select Lights (Shift = everything except lights) */
    TB.reg(112, function (m) {
        var c = TB.comp(), n = pickBy(c, isLight, m);
        if (n) TB.say((m.shift ? 'Selected all layers except lights: ' : 'Selected lights: ') + n + '.');
        return n;
    }, { glyph: 'light' });

    /* 113 Select Audio Layers (Shift = everything except audio) */
    TB.reg(113, function (m) {
        var c = TB.comp(), n = pickBy(c, isAudio, m);
        if (n) TB.say((m.shift ? 'Selected all layers without audio: ' : 'Selected audio layers: ') + n + '.');
        return n;
    }, { glyph: 'audio' });

    /* 114 Select All Parent Layers — anything that is somebody's parent */
    TB.reg(114, function () {
        var c = TB.comp(), all = allLayers(c), out = [], i, j;
        var parents = {};
        for (i = 0; i < all.length; i++) {
            var p = null;
            try { p = all[i].parent; } catch (e) { p = null; }
            if (p) parents[p.index] = p;
        }
        for (j = 0; j < all.length; j++) if (parents[all[j].index]) out.push(all[j]);
        var n = applySel(c, out);
        TB.say(n ? 'Selected ' + n + ' parent layer' + (n === 1 ? '' : 's') + '.' : 'No layers are parented to anything.');
        return n;
    }, { glyph: 'parents' });

    /* 115 Select All Child Layers — anything that has a parent */
    TB.reg(115, function () {
        var c = TB.comp(), all = allLayers(c), out = [], i, p = null;
        for (i = 0; i < all.length; i++) {
            try { p = all[i].parent; } catch (e) { p = null; }
            if (p) out.push(all[i]);
        }
        var n = applySel(c, out);
        TB.say(n ? 'Selected ' + n + ' child layer' + (n === 1 ? '' : 's') + '.' : 'No layers have a parent.');
        return n;
    }, { glyph: 'parents' });

    /* 116 Select Complete Hierarchy — ancestors + descendants of the selection.
       Ctrl = only the children below the selected layers. */
    TB.reg(116, function (m) {
        var c = TB.comp(), all = allLayers(c);
        var seed = c.selectedLayers;
        if (!seed.length) TB.fail('Select at least one layer first.');
        var want = {}, i, L;

        function mark(x) { if (x) want[x.index] = true; }
        for (i = 0; i < seed.length; i++) mark(seed[i]);

        if (!m.ctrl) {
            /* walk up to the roots */
            for (i = 0; i < seed.length; i++) {
                L = seed[i];
                while (L) { mark(L); try { L = L.parent; } catch (e) { L = null; } }
            }
        }
        /* walk down to every descendant */
        var changed = true;
        while (changed) {
            changed = false;
            for (i = 0; i < all.length; i++) {
                L = all[i];
                var p = null;
                try { p = L.parent; } catch (e) { p = null; }
                if (p && want[p.index] && !want[L.index]) { want[L.index] = true; changed = true; }
            }
        }
        var out = [];
        for (i = 0; i < all.length; i++) if (want[all[i].index]) out.push(all[i]);
        var n = applySel(c, out);
        TB.say((m.ctrl ? 'Selected ' : 'Selected complete hierarchy: ') + n +
            ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'hierarchy' });

})();
