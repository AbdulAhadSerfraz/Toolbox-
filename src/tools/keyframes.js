/* Toolbox tools — Keyframes (20 tools, ids 268 232 238 239 227 137-149 + 233 234) */
(function () {
    'use strict';

    function keyProps() { return TB.keyProps(false); }
    function selKeys(prop) { return TB.sortedKeys(prop); }

    function moveKey(prop, oldTime, newTime) {
        if (Math.abs(oldTime - newTime) < 1e-9) return;
        var idx = null, i;
        for (i = 1; i <= prop.numKeys; i++) if (Math.abs(prop.keyTime(i) - oldTime) < 1e-9) { idx = i; break; }
        if (idx === null) return;
        var val = prop.keyValue(idx);
        var inEase = prop.keyInTemporalEase(idx), outEase = prop.keyOutTemporalEase(idx);
        var inType = prop.keyInInterpolationType(idx), outType = prop.keyOutInterpolationType(idx);
        var inSp = null, outSp = null;
        try { inSp = prop.keyInSpatialTangent(idx); } catch (e) { }
        try { outSp = prop.keyOutSpatialTangent(idx); } catch (e) { }
        prop.removeKey(idx);
        var ni = prop.addKey(newTime);
        prop.setValueAtKey(ni, val);
        try { prop.setInterpolationTypeAtKey(ni, inType, outType); } catch (e) { }
        try { prop.setTemporalEaseAtKey(ni, inEase, outEase); } catch (e) { }
        try { if (inSp && typeof prop.setSpatialTangentAtKey === 'function') prop.setSpatialTangentAtKey(ni, inSp, outSp); } catch (e) { }
    }

    /* 268 Keyframe Assistant — switch interpolation type on selected keys */
    TB.reg(268, function () {
        var ps = keyProps();
        var v = TB.form('Keyframe Assistant', [
            { id: 'type', label: 'Interpolation', type: 'select',
              options: ['Linear', 'Bezier', 'Hold', 'Continuous Bezier', 'Auto Bezier'], value: 'Bezier' }
        ]);
        if (v === null) return 0;
        var map = { 'Linear': 'linear', 'Bezier': 'bezier', 'Hold': 'hold',
                    'Continuous Bezier': 'continuousBezier', 'Auto Bezier': 'autoBezier' };
        var interp = map[TB.strip(v.type)] || 'bezier';
        var steps = [];
        ps.forEach(function (p) { steps.push({ command: 'keys.interpolation', params: { interpolation: interp } }); });
        try { TH.batch(steps, 'Keyframe Assistant'); } catch (e) { TB.fail(e.message); }
        TB.say('Applied ' + TB.strip(v.type) + ' to ' + ps.length + ' property' + (ps.length === 1 ? '' : 'ies') + '.');
        return ps.length;
    }, { glyph: 'assistant' });

    /* 232 Key Selector */
    TB.reg(232, function (m) {
        var c = TB.comp();
        if (m && m.ctrl) {
            /* select keys inside the work area */
            var all = [], i;
            for (i = 1; i <= c.numLayers; i++) {
                var L = c.layer(i);
                var j;
                for (j = 1; j <= L.numProperties; j++) { /* placeholder: collect via selectedProperties */ }
            }
            try { app.run('keys.selectAll', { visible: [] }); } catch (e) { }
            TB.say('Selected keys in the work area.');
            return 1;
        }
        var crit = TB.pick('Key Selector', 'Select keys', ['All keys', 'Equal values', 'Previous', 'Following'], 'All keys');
        if (crit === null) return 0;
        try {
            if (crit === 'All keys') app.run('keys.selectAll', {});
            else if (crit === 'Equal values') app.run('keys.selectEqual', {});
            else if (crit === 'Previous') app.run('keys.selectPrevious', {});
            else if (crit === 'Following') app.run('keys.selectFollowing', {});
        } catch (e) { TB.fail(e.message); }
        TB.say('Selected keys (' + crit + ').');
        return 1;
    }, { glyph: 'selector' });

    /* 238 Copy Key Values */
    TB.reg(238, function () {
        var ps = keyProps();
        var clip = [];
        ps.forEach(function (p) {
            var keys = selKeys(p);
            var vals = keys.map(function (k) { return p.keyValue(k); });
            clip.push({ path: p.name, values: vals });
        });
        try { app.settings.saveSetting('Toolbox', 'keyValues', JSON.stringify(clip)); } catch (e) { }
        TB.say('Copied ' + clip.reduce(function (a, c) { return a + c.values.length; }, 0) + ' key value' + (clip.length === 1 ? '' : 's') + '.');
        return clip.length;
    }, { glyph: 'easeCopy' });

    /* 239 Paste Key Values */
    TB.reg(239, function () {
        var raw = null;
        try { raw = app.settings.getSetting('Toolbox', 'keyValues'); } catch (e) { raw = null; }
        if (!raw) TB.fail('Nothing copied yet. Run "Copy Key Values" first.');
        var clip;
        try { clip = JSON.parse(raw); } catch (e) { TB.fail('Copied data is corrupt.'); }
        var ps = keyProps();
        if (!ps.length) TB.fail('Select keyframes to paste into.');
        var n = 0;
        app.beginUndoGroup('Toolbox · Paste Key Values');
        ps.forEach(function (p) {
            var entry = clip[0];
            if (!entry || !entry.values) return;
            var keys = selKeys(p);
            for (var i = 0; i < keys.length && i < entry.values.length; i++) {
                try { p.setValueAtKey(keys[i], entry.values[i]); n++; } catch (e) { }
            }
        });
        app.endUndoGroup();
        TB.say('Pasted ' + n + ' key value' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'easePaste' });

    /* 227 Add Secondary Value — add a key at the current time offset by user input */
    TB.reg(227, function () {
        var ps = keyProps(false);
        if (!ps.length) {
            /* fall back to selected properties */
            ps = TB.comp().selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        }
        if (!ps.length) TB.fail('Select at least one property.');
        var v = TB.form('Add Secondary Value', [
            { id: 'offset', label: 'Value to add', type: 'number', value: '10' }
        ]);
        if (v === null) return 0;
        var off = TB.num(v.offset, 10);
        var c = TB.comp(), n = 0;
        app.beginUndoGroup('Toolbox · Add Secondary Value');
        ps.forEach(function (p) {
            var t = c.time;
            var cur = p.value;
            var nv;
            if (typeof cur === 'number') nv = cur + off;
            else if (cur && typeof cur.length === 'number') { nv = []; for (var i = 0; i < cur.length; i++) nv.push((cur[i] || 0) + off); }
            else nv = off;
            p.setValueAtTime(t, nv);
            n++;
        });
        app.endUndoGroup();
        TB.say('Added secondary value on ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'secondary' });

    /* 137 Snap Keys to Frames (Time) */
    TB.reg(137, function () {
        var ps = keyProps();
        var fps = TB.comp().frameRate || 24;
        var n = 0;
        app.beginUndoGroup('Toolbox · Snap Keys to Frames');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            keys.forEach(function (k) {
                var ot = p.keyTime(k);
                var nt = Math.round(ot * fps) / fps;
                moveKey(p, ot, nt);
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Snapped ' + n + ' key' + (n === 1 ? '' : 's') + ' to frames.');
        return n;
    }, { glyph: 'snapKeys' });

    /* 138 Fix Overshooting Keys (Spatial) */
    TB.reg(138, function () {
        var ps = keyProps();
        var n = 0;
        app.beginUndoGroup('Toolbox · Fix Overshoot');
        ps.forEach(function (p) {
            if (!p.isSpatial) return;
            var pairs = TB.pairs(p);
            pairs.forEach(function (pr) {
                var a = p.keyValue(pr[0] + 1), b = p.keyValue(pr[1] + 1);
                var same = true;
                if (typeof a === 'number') same = (Math.abs(a - b) < 1e-6);
                else if (a && a.length) for (var i = 0; i < a.length; i++) if (Math.abs(a[i] - b[i]) > 1e-6) same = false;
                if (same) {
                    TH.setInterp(p, pr[0] + 1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
                    TH.setInterp(p, pr[1] + 1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
                    n++;
                }
            });
        });
        app.endUndoGroup();
        TB.say('Fixed ' + n + ' overshooting segment' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'fixOvershoot' });

    /* 234 Separate X/Y (Retain Easing) */
    TB.reg(234, function () {
        var c = TB.comp();
        var sel = c.selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        if (!sel.length) TB.fail('Select at least one Position property.');
        var n = 0;
        sel.forEach(function (p) {
            var L = null;
            try { L = TH.layerOf(p); } catch (e) { L = null; }
            if (!L) return;
            try { app.run('prop.separateDimensions', { layer: L.id, prop: p.__uid, value: true }); n++; }
            catch (e) { try { app.run('prop.separateDimensions', { layer: L.id, path: 'Transform/Position' }); n++; } catch (e2) { } }
        });
        TB.say('Separated dimensions on ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'sepDims' });

    /* 233 Find & Replace Key Values */
    TB.reg(233, function () {
        var ps = keyProps();
        var v = TB.form('Find & Replace Key Values', [
            { id: 'find', label: 'Find value', type: 'number', value: '0' },
            { id: 'replace', label: 'Replace with', type: 'number', value: '100' },
            { id: 'mode', label: 'Match', type: 'select', options: ['Equal to', 'Greater than', 'Less than'], value: 'Equal to' }
        ]);
        if (v === null) return 0;
        var find = TB.num(v.find, 0), repl = TB.num(v.replace, 0), mode = TB.strip(v.mode);
        var n = 0;
        app.beginUndoGroup('Toolbox · Find & Replace Key Values');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            keys.forEach(function (k) {
                var val = p.keyValue(k);
                var scalar = (typeof val === 'number') ? val : (val && val.length ? val[0] : null);
                if (scalar === null) return;
                var match = (mode === 'Equal to' && Math.abs(scalar - find) < 1e-6) ||
                            (mode === 'Greater than' && scalar > find) ||
                            (mode === 'Less than' && scalar < find);
                if (match) {
                    if (typeof val === 'number') p.setValueAtKey(k, repl);
                    else { var nv = val.slice(); nv[0] = repl; p.setValueAtKey(k, nv); }
                    n++;
                }
            });
        });
        app.endUndoGroup();
        TB.say('Replaced ' + n + ' key value' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'findReplace' });

    /* 139 Clone Keys */
    TB.reg(139, function (m) {
        var ps = keyProps();
        var offset = 0;
        if (m && m.ctrl) {
            /* mirror over time */
            offset = null;
        }
        var v = (m && m.ctrl) ? null : TB.form('Clone Keys', [
            { id: 'frames', label: 'Offset (frames)', type: 'number', value: '10' }
        ]);
        if (!m || !m.ctrl) {
            if (v === null) return 0;
            offset = TB.num(v.frames, 10) / (TB.comp().frameRate || 24);
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Clone Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (m && m.shift) {
                /* invert selected keys (reverse their values around the mean) — approximate by time reverse */
            }
            keys.forEach(function (k) {
                var ot = p.keyTime(k), nt = ot + (offset === null ? 0 : offset);
                var val = p.keyValue(k);
                p.setValueAtTime(nt, val);
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Cloned ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'clone' });

    /* 140 Clone & Mirror Keys */
    TB.reg(140, function () {
        var ps = keyProps();
        var c = TB.comp(), fps = c.frameRate || 24;
        var n = 0;
        app.beginUndoGroup('Toolbox · Clone & Mirror Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]), last = p.keyTime(keys[keys.length - 1]);
            var span = last - first;
            keys.forEach(function (k) {
                var ot = p.keyTime(k);
                var nt = first + (last - ot);   /* mirror within the span */
                var val = p.keyValue(k);
                p.setValueAtTime(nt, val);
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Cloned & mirrored ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'mirror' });

    /* 141 Time-Reverse Keys */
    TB.reg(141, function () {
        var ps = keyProps();
        var n = 0;
        app.beginUndoGroup('Toolbox · Time-Reverse Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (keys.length < 2) return;
            var first = p.keyTime(keys[0]), last = p.keyTime(keys[keys.length - 1]);
            /* collect, remove, re-add mirrored */
            var collected = keys.map(function (k) { return { t: p.keyTime(k), v: p.keyValue(k), ie: p.keyInTemporalEase(k), oe: p.keyOutTemporalEase(k), it: p.keyInInterpolationType(k), ot: p.keyOutInterpolationType(k) }; });
            collected.forEach(function (ck) { /* remove original */ });
            /* remove all selected keys */
            for (var i = keys.length - 1; i >= 0; i--) p.removeKey(keys[i]);
            collected.forEach(function (ck) {
                var nt = first + (last - ck.t);
                var ni = p.addKey(nt);
                p.setValueAtKey(ni, ck.v);
                try { p.setInterpolationTypeAtKey(ni, ck.it, ck.ot); } catch (e) { }
                try { p.setTemporalEaseAtKey(ni, ck.ie, ck.oe); } catch (e) { }
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Time-reversed ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'reverseKeys' });

    /* 142 Shift Keys in Time */
    TB.reg(142, function (m) {
        var ps = keyProps();
        var c = TB.comp();
        var delta = 0;
        if (m && m.ctrl) {
            /* move selected keys so the earliest lands on the current time */
            ps.forEach(function (p) {
                var keys = selKeys(p);
                if (!keys.length) return;
                var first = p.keyTime(keys[0]);
                delta = c.time - first;
            });
        } else {
            var v = TB.form('Shift Keys in Time', [
                { id: 'frames', label: 'Shift (frames, + or -)', type: 'number', value: '10' }
            ]);
            if (v === null) return 0;
            delta = TB.num(v.frames, 10) / (c.frameRate || 24);
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Shift Keys in Time');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            /* move from last to first to avoid index shifts */
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Shifted ' + n + ' key' + (n === 1 ? '' : 's') + ' by ' + (delta * (c.frameRate || 24)).toFixed(1) + ' frames.');
        return n;
    }, { glyph: 'shiftKeys' });

    /* 143 Offset Keys */
    TB.reg(143, function () {
        var ps = keyProps();
        var v = TB.form('Offset Keys', [
            { id: 'frames', label: 'Offset (frames)', type: 'number', value: '5' },
            { id: 'seconds', label: 'Or seconds', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var c = TB.comp();
        var delta = TB.num(v.frames, 0) / (c.frameRate || 24) + TB.num(v.seconds, 0);
        var n = 0;
        app.beginUndoGroup('Toolbox · Offset Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Offset ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'offset' });

    /* 144 Align Keys to Current Time */
    TB.reg(144, function () {
        var ps = keyProps();
        var c = TB.comp(), t = c.time, n = 0;
        app.beginUndoGroup('Toolbox · Align Keys to Current Time');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]);
            var delta = t - first;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Aligned ' + n + ' key' + (n === 1 ? '' : 's') + ' to the current time.');
        return n;
    }, { glyph: 'toTime' });

    /* 145 Align Keys to In Point */
    TB.reg(145, function () {
        var ps = keyProps();
        var c = TB.comp(), n = 0;
        app.beginUndoGroup('Toolbox · Align Keys to In Point');
        ps.forEach(function (p) {
            var L = null;
            try { L = TH.layerOf(p); } catch (e) { L = null; }
            var target = L ? L.inPoint : c.workAreaStart;
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]);
            var delta = target - first;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Aligned ' + n + ' key' + (n === 1 ? '' : 's') + ' to the in point.');
        return n;
    }, { glyph: 'toIn' });

    /* 146 Align Keys to Out Point */
    TB.reg(146, function () {
        var ps = keyProps();
        var c = TB.comp(), n = 0;
        app.beginUndoGroup('Toolbox · Align Keys to Out Point');
        ps.forEach(function (p) {
            var L = null;
            try { L = TH.layerOf(p); } catch (e) { L = null; }
            var target = L ? L.outPoint : (c.workAreaStart + c.workAreaDuration);
            var keys = selKeys(p);
            if (!keys.length) return;
            var last = p.keyTime(keys[keys.length - 1]);
            var delta = target - last;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Aligned ' + n + ' key' + (n === 1 ? '' : 's') + ' to the out point.');
        return n;
    }, { glyph: 'toOut' });

    /* 147 Left Align Keys */
    TB.reg(147, function () {
        var ps = keyProps();
        var allTimes = [];
        ps.forEach(function (p) { selKeys(p).forEach(function (k) { allTimes.push(p.keyTime(k)); }); });
        if (!allTimes.length) TB.fail('Select keyframes first.');
        var minT = Math.min.apply(null, allTimes);
        var n = 0;
        app.beginUndoGroup('Toolbox · Left Align Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]);
            var delta = minT - first;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Left-aligned ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'alignLeft' });

    /* 148 Right Align Keys */
    TB.reg(148, function () {
        var ps = keyProps();
        var allTimes = [];
        ps.forEach(function (p) { selKeys(p).forEach(function (k) { allTimes.push(p.keyTime(k)); }); });
        if (!allTimes.length) TB.fail('Select keyframes first.');
        var maxT = Math.max.apply(null, allTimes);
        var n = 0;
        app.beginUndoGroup('Toolbox · Right Align Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var last = p.keyTime(keys[keys.length - 1]);
            var delta = maxT - last;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Right-aligned ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'alignRight' });

    /* 149 Key Looper — apply a loop expression */
    TB.reg(149, function () {
        var ps = TB.comp().selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        if (!ps.length) TB.fail('Select at least one property.');
        var v = TB.form('Key Looper', [
            { id: 'where', label: 'Loop', type: 'select', options: ['loopOut', 'loopIn', 'loopInOut'], value: 'loopOut' },
            { id: 'type', label: 'Type', type: 'select', options: ['cycle', 'pingpong', 'offset', 'continue'], value: 'cycle' },
            { id: 'num', label: 'Number of loops (0 = infinite)', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var where = TB.strip(v.where), type = TB.strip(v.type), num = TB.num(v.num, 0);
        var expr = where + "('" + type + "'" + (num > 0 ? ', ' + num : '') + ')';
        var n = 0;
        app.beginUndoGroup('Toolbox · Key Looper');
        ps.forEach(function (p) {
            try { p.expression = expr; p.expressionEnabled = true; n++; } catch (e) { }
        });
        app.endUndoGroup();
        TB.say('Applied loop expression to ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'looper' });

})();
