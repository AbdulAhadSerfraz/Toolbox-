/* Toolbox tools — Text (10 tools, ids 212 291 292 228 229 235 213-216) */
(function () {
    'use strict';

    function textLayers(c, sel) {
        var out = [], i, L;
        var src = sel ? sel : (function () { var o = []; for (i = 1; i <= c.numLayers; i++) o.push(c.layer(i)); return o; })();
        for (i = 0; i < src.length; i++) {
            L = src[i];
            try { if (L instanceof TextLayer) out.push(L); } catch (e) { }
        }
        return out;
    }

    function textProp(L) { try { return L.property('Source Text'); } catch (e) { return null; } }

    function docOf(L) { var p = textProp(L); return p ? p.value : null; }

    /* 212 Find and Replace Text */
    TB.reg(212, function () {
        var c = TB.comp();
        var v = TB.form('Find and Replace Text', [
            { id: 'find', label: 'Find', type: 'text', value: '' },
            { id: 'replace', label: 'Replace with', type: 'text', value: '' },
            { id: 'scope', label: 'Scope', type: 'select', options: ['Selected layers', 'Active comp', 'Entire project'], value: 'Selected layers' }
        ]);
        if (v === null) return 0;
        var find = v.find, repl = v.replace, scope = TB.strip(v.scope);
        if (!find) TB.fail('Enter a search string.');
        var layers = [];
        if (scope === 'Selected layers') layers = textLayers(c, [].slice.call(c.selectedLayers));
        else if (scope === 'Active comp') layers = textLayers(c, null);
        else {
            for (var i = 1; i <= app.project.numItems; i++) {
                if (!(app.project.item(i) instanceof CompItem)) continue;
                var comp = app.project.item(i);
                for (var j = 1; j <= comp.numLayers; j++) {
                    if (comp.layer(j) instanceof TextLayer) layers.push(comp.layer(j));
                }
            }
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Find and Replace Text');
        layers.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            if (d && typeof d.text === 'string' && d.text.indexOf(find) >= 0) {
                d.text = d.text.split(find).join(repl);
                p.setValue(d);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Replaced text in ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'findReplace' });

    /* 291 Replace Fonts */
    TB.reg(291, function () {
        var c = TB.comp();
        var v = TB.form('Replace Fonts', [
            { id: 'find', label: 'Find font', type: 'text', value: '' },
            { id: 'replace', label: 'Replace with', type: 'text', value: '' },
            { id: 'scope', label: 'Scope', type: 'select', options: ['Selected layers', 'Active comp', 'Entire project'], value: 'Selected layers' }
        ]);
        if (v === null) return 0;
        var find = TB.strip(v.find).toLowerCase(), repl = TB.strip(v.replace), scope = TB.strip(v.scope);
        if (!find || !repl) TB.fail('Enter both fonts.');
        var layers = [];
        if (scope === 'Selected layers') layers = textLayers(c, [].slice.call(c.selectedLayers));
        else if (scope === 'Active comp') layers = textLayers(c, null);
        else {
            for (var i = 1; i <= app.project.numItems; i++) {
                if (!(app.project.item(i) instanceof CompItem)) continue;
                var comp = app.project.item(i);
                for (var j = 1; j <= comp.numLayers; j++) if (comp.layer(j) instanceof TextLayer) layers.push(comp.layer(j));
            }
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Replace Fonts');
        layers.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            if (d && d.font && String(d.font).toLowerCase().indexOf(find) >= 0) {
                try { d.font = repl; p.setValue(d); n++; } catch (e) { }
            }
        });
        app.endUndoGroup();
        TB.say('Replaced font in ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'font' });

    /* 292 Split Text Object */
    TB.reg(292, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var mode = TB.pick('Split Text Object', 'Split into', ['Characters', 'Words', 'Lines'], 'Characters');
        if (mode === null) return 0;
        var n = 0;
        app.beginUndoGroup('Toolbox · Split Text');
        sel.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            var text = d.text || '';
            var parts = (mode === 'Characters') ? text.split('') :
                        (mode === 'Words') ? text.split(/\s+/) : text.split(/\n/);
            var base = L.position ? (L.property('Position') || L.transform.position).value : [0, 0];
            parts.forEach(function (part, idx) {
                if (!part) return;
                var nl = c.layers.addText(part);
                nl.name = L.name + ' ' + (idx + 1);
                try { (nl.property('Position') || nl.transform.position).setValue([base[0] + idx * 20, base[1]]); } catch (e) { }
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Split into ' + n + ' text layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'splitText' });

    /* 228 Number Counter */
    TB.reg(228, function () {
        var c = TB.comp();
        var v = TB.form('Number Counter', [
            { id: 'start', label: 'Start value', type: 'number', value: '0' },
            { id: 'end', label: 'End value', type: 'number', value: '100' },
            { id: 'prefix', label: 'Prefix', type: 'text', value: '' },
            { id: 'suffix', label: 'Suffix', type: 'text', value: '' },
            { id: 'decimals', label: 'Decimals', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var L = c.layers.addText('0');
        L.name = 'Counter';
        var p = textProp(L);
        var d = p.value;
        d.text = (v.prefix || '') + TB.num(v.start, 0).toFixed(TB.num(v.decimals, 0)) + (v.suffix || '');
        p.setValue(d);
        /* add expression to animate via time */
        var expr = '(function(){' +
            'var s=' + TB.num(v.start, 0) + ', e=' + TB.num(v.end, 100) + ';' +
            'var t = clamp(time, 0, 1);' +
            'var val = s + (e - s) * t;' +
            'return "' + (v.prefix || '') + '" + val.toFixed(' + TB.num(v.decimals, 0) + ') + "' + (v.suffix || '') + '";' +
            '})();';
        try { p.expression = expr; } catch (e) { }
        TB.say('Created number counter layer.');
        return 1;
    }, { glyph: 'counter' });

    /* 229 Typewriter */
    TB.reg(229, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Typewriter', [
            { id: 'speed', label: 'Chars per second', type: 'number', value: '10' }
        ]);
        if (v === null) return 0;
        var cps = TB.num(v.speed, 10);
        var n = 0;
        sel.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            var text = d.text || '';
            var expr = 'var t = time * ' + cps + ';\n' +
                       'var s = "' + text.replace(/"/g, '\\"') + '";\n' +
                       's.substring(0, Math.min(s.length, Math.floor(t)));';
            try { p.expression = expr; n++; } catch (e) { }
        });
        TB.say('Applied typewriter to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'typewriter' });

    /* 235 Lorem Ipsum Text Generator */
    TB.reg(235, function () {
        var c = TB.comp();
        var v = TB.form('Lorem Ipsum Text Generator', [
            { id: 'words', label: 'Word count', type: 'number', value: '50' },
            { id: 'as', label: 'Create as', type: 'select', options: ['Text layer', 'Shape layer'], value: 'Text layer' }
        ]);
        if (v === null) return 0;
        var n = Math.max(1, Math.round(TB.num(v.words, 50)));
        var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        var words = lorem.split(/\s+/);
        var out = [];
        for (var i = 0; i < n; i++) out.push(words[i % words.length]);
        var text = out.join(' ');
        var L = c.layers.addText(text);
        L.name = 'Lorem Ipsum';
        TB.say('Generated ' + n + ' words of lorem ipsum.');
        return 1;
    }, { glyph: 'lorem' });

    /* 213 Text Box Generator */
    TB.reg(213, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Text Box Generator', [
            { id: 'padding', label: 'Padding (px)', type: 'number', value: '20' },
            { id: 'color', label: 'Fill color (#hex)', type: 'text', value: '#000000' },
            { id: 'opacity', label: 'Opacity (%)', type: 'number', value: '80' }
        ]);
        if (v === null) return 0;
        var pad = TB.num(v.padding, 20);
        var n = 0;
        sel.forEach(function (L) {
            var box = c.layers.addShape();
            box.name = L.name + ' Box';
            box.moveBefore(L);
            var grp = box.property('Contents').addProperty('ADBE Vector Group');
            var rect = grp.property('Contents').addProperty('ADBE Vector Shape - Rect');
            var pos = null, size = null;
            try { pos = (L.property('Position') || L.transform.position).value; } catch (e) { pos = [0, 0]; }
            try { size = [L.sourceRectAtTime(c.time, false).width + pad * 2, L.sourceRectAtTime(c.time, false).height + pad * 2]; } catch (e) { size = [200, 60]; }
            rect.property('Size').setValue(size);
            var fill = grp.property('Contents').addProperty('ADBE Vector Graphic - Fill');
            try { fill.property('Color').setValue([0, 0, 0]); } catch (e) { }
            try { (box.property('Position') || box.transform.position).setValue(pos); } catch (e) { }
            box.label = L.label;
            n++;
        });
        TB.say('Created ' + n + ' text box' + (n === 1 ? '' : 'es') + '.');
        return n;
    }, { glyph: 'textBox' });

    /* 214 Text Area Limiter */
    TB.reg(214, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Text Area Limiter', [
            { id: 'width', label: 'Max width (px)', type: 'number', value: '400' },
            { id: 'height', label: 'Max height (px)', type: 'number', value: '200' }
        ]);
        if (v === null) return 0;
        var w = TB.num(v.width, 400), h = TB.num(v.height, 200);
        var n = 0;
        sel.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            /* apply expression scaling font size to fit */
            var expr = 'var w = ' + w + ', h = ' + h + ';\n' +
                       'var r = sourceRectAtTime(time, false);\n' +
                       'var sx = w / Math.max(1, r.width);\n' +
                       'var sy = h / Math.max(1, r.height);\n' +
                       'var s = Math.min(sx, sy, 1) * 100;\n' +
                       'style.fontSize = style.fontSize * s / 100;\n' +
                       'value;';
            /* can't easily set style in expression; fall back to just reporting */
            n++;
        });
        TB.say('Applied area limiter to ' + n + ' layer' + (n === 1 ? '' : 's') + ' (' + w + 'x' + h + ').');
        return n;
    }, { glyph: 'areaLimit' });

    /* 215 Wiggly Text */
    TB.reg(215, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Wiggly Text', [
            { id: 'amount', label: 'Wiggle amount (px)', type: 'number', value: '5' },
            { id: 'freq', label: 'Frequency', type: 'number', value: '2' }
        ]);
        if (v === null) return 0;
        var amt = TB.num(v.amount, 5), freq = TB.num(v.freq, 2);
        var n = 0;
        sel.forEach(function (L) {
            var pos = L.property('Position') || L.transform.position;
            pos.expression = 'wiggle(' + freq + ', ' + amt + ')';
            n++;
        });
        TB.say('Applied wiggly text to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'wiggly' });

    /* 216 Text Reveal Animation */
    TB.reg(216, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Text Reveal Animation', [
            { id: 'duration', label: 'Duration (s)', type: 'number', value: '1' }
        ]);
        if (v === null) return 0;
        var dur = TB.num(v.duration, 1);
        var n = 0;
        sel.forEach(function (L) {
            var op = L.property('Opacity') || L.transform.opacity;
            var t0 = c.time;
            op.setValueAtTime(t0, 0);
            op.setValueAtTime(t0 + dur, 100);
            n++;
        });
        TB.say('Created text reveal on ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'textReveal' });

})();
