/* Toolbox core — registry, dialogs, selection helpers, math.
   Host-free: uses only the After Effects scripting object model that EffectCraft implements. */

var TB = (function () {
    var T = {};
    T.version = '1.0.0';
    T.tools = {};          /* id -> tool object */
    T.order = [];          /* registration order */
    T.FORM_VALUES = null;  /* test override: array of field values */
    T.OFFLINE = false;     /* test override: answer every dialog with its default */
    T.NOTICE = null;       /* test override: skip notice dialogs */
    T._status = null;      /* panel hook: function (text) */

    /* ---------- registry ---------- */
    T.reg = function (id, run, opts) {
        var t = T.tools[id];
        if (!t) { t = { id: id }; T.tools[id] = t; T.order.push(id); }
        t.run = run;
        if (opts) { for (var k in opts) if (Object.prototype.hasOwnProperty.call(opts, k)) t[k] = opts[k]; }
        return t;
    };
    T.get = function (id) { return T.tools[id] || null; };
    T.registered = function () { return T.order.length; };

    /* ---------- reporting ---------- */
    T.say = function (text) {
        text = String(text);
        if (T._status) { T._status(text); }
        else if (typeof writeLn === 'function') { writeLn(text); }
    };
    T.err = function (e) {
        var m = e && e.message ? e.message : String(e);
        T.say('! ' + m);
        return m;
    };
    T.fail = function (m) { throw new Error(m); };

    /* One undo step per tool application. Errors are reported, never thrown at the UI. */
    T.act = function (label, fn) {
        var out, err = null;
        try { app.beginUndoGroup('Toolbox \u00b7 ' + label); }
        catch (e) { err = e; }
        if (!err) {
            try { out = fn(); }
            catch (e) { err = e; }
            finally { try { app.endUndoGroup(); } catch (ignore) { } }
        }
        if (err) { T.err(err); return undefined; }
        return out;
    };

    /* ---------- dialogs ---------- */
    function formDefaults(fields) {
        var o = {};
        for (var i = 0; i < fields.length; i++) o[fields[i].id] = fields[i].value;
        return o;
    }
    /* fields: [{id, label, type:'text'|'number'|'check'|'select'|'static', value, options:[..]}]
       returns {id: value} or null when cancelled. */
    T.form = function (title, fields, okLabel) {
        if (T.FORM_VALUES) {
            var over = T.FORM_VALUES; T.FORM_VALUES = null;
            var mapped = {};
            for (var i = 0; i < fields.length; i++) mapped[fields[i].id] = i < over.length ? over[i] : fields[i].value;
            return mapped;
        }
        if (T.OFFLINE) return formDefaults(fields);
        if (typeof Window === 'undefined') return formDefaults(fields);
        var w = new Window('dialog', title);
        w.orientation = 'column'; w.alignChildren = ['fill', 'top']; w.margins = 14; w.spacing = 7;
        w.preferredSize.width = 360;
        var rows = [], value = null;
        for (var j = 0; j < fields.length; j++) {
            var f = fields[j];
            if (f.type === 'static') { w.add('statictext', undefined, String(f.label || f.value || '')); rows.push(null); continue; }
            var row = w.add('group'); row.orientation = 'row'; row.alignChildren = ['left', 'center']; row.margins = 0;
            if (f.label) { var lab = row.add('statictext', undefined, String(f.label)); lab.preferredSize.width = 140; }
            if (f.type === 'check') {
                var cb = row.add('checkbox', undefined, ''); cb.value = !!f.value; rows.push({ kind: 'check', el: cb });
            } else if (f.type === 'select') {
                var dd = row.add('dropdownlist', undefined, f.options || []);
                var idx = (f.options || []).indexOf(f.value); if (idx >= 0) dd.selection = idx; else if (dd.items.length) dd.selection = 0;
                rows.push({ kind: 'select', el: dd });
            } else {
                var et = row.add('edittext', undefined, f.value === undefined || f.value === null ? '' : String(f.value));
                et.preferredSize = [f.type === 'number' ? 90 : 180, 24];
                rows.push({ kind: 'text', el: et });
            }
        }
        var btns = w.add('group'); btns.alignment = 'right'; btns.margins = [0, 6, 0, 0];
        var ok = btns.add('button', undefined, okLabel || 'OK', { name: 'ok' });
        var no = btns.add('button', undefined, 'Cancel', { name: 'cancel' });
        var accepted = false;
        ok.onClick = function () { accepted = true; w.close(); };
        no.onClick = function () { w.close(); };
        w.show();
        if (!accepted) return null;
        value = {};
        var ri = 0;
        for (var k = 0; k < fields.length; k++) {
            var fd = fields[k];
            if (fd.type === 'static') continue;
            var r = rows[ri++];
            if (r.kind === 'check') value[fd.id] = !!r.el.value;
            else if (r.kind === 'select') value[fd.id] = r.el.selection ? String(r.el.selection.text) : (fd.options ? fd.options[0] : '');
            else value[fd.id] = r.el.text;
        }
        return value;
    };
    T.prompt = function (title, label, def, opts) {
        opts = opts || {};
        var v = T.form(title, [{ id: 'v', label: label, type: opts.type || 'text', value: def === undefined ? '' : def, options: opts.options }], opts.okLabel);
        return v === null ? null : v.v;
    };
    T.pick = function (title, label, options, def) {
        var v = T.form(title, [{ id: 'v', label: label, type: 'select', options: options, value: def === undefined ? options[0] : def }]);
        return v === null ? null : v.v;
    };
    T.notice = function (title, lines) {
        if (T.NOTICE || T.OFFLINE) return;
        if (typeof Window === 'undefined') { T.say(title + ': ' + (lines instanceof Array ? lines.join(' | ') : lines)); return; }
        var w = new Window('dialog', title);
        w.orientation = 'column'; w.alignChildren = ['fill', 'top']; w.margins = 14;
        var body = lines instanceof Array ? lines : [String(lines)];
        for (var i = 0; i < body.length; i++) w.add('statictext', undefined, String(body[i]));
        var b = w.add('group'); b.alignment = 'right';
        b.add('button', undefined, 'OK', { name: 'ok' });
        w.show();
    };

    /* ---------- selection ---------- */
    T.comp = function () {
        var a = app.project.activeItem;
        if (!a || !(a instanceof CompItem)) T.fail('Open a composition first.');
        return a;
    };
    T.hasComp = function () {
        var a = app.project.activeItem;
        return !!(a && (a instanceof CompItem));
    };
    function slice(x) { return Array.prototype.slice.call(x); }
    T.layers = function (mode) {
        var c = T.comp(), list;
        if (mode === 'all') { list = []; for (var i = 1; i <= c.numLayers; i++) list.push(c.layer(i)); }
        else list = slice(c.selectedLayers);
        if (!list.length) T.fail(mode === 'all' ? 'The composition has no layers.' : 'Select at least one layer.');
        return list;
    };
    T.sel = function () { return slice(T.comp().selectedLayers); };
    T.each = function (list, fn) { for (var i = 0; i < list.length; i++) fn(list[i], i); };
    T.map = function (list, fn) { var o = []; for (var i = 0; i < list.length; i++) o.push(fn(list[i], i)); return o; };
    T.has = function (list, v) { return list.indexOf(v) >= 0; };

    /* Properties carrying selected keyframes, in selection order. */
    T.keyProps = function (requireAdjacent) {
        var c = T.comp(), ps = c.selectedProperties, out = [];
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i];
            if (p.propertyType !== PropertyType.PROPERTY || !p.numKeys) continue;
            if (!p.selectedKeys || !p.selectedKeys.length) continue;
            if (!p.isInterpolationTypeValid(KeyframeInterpolationType.BEZIER)) continue;
            out.push(p);
        }
        if (!out.length) T.fail('Select keyframes on at least one property.');
        if (requireAdjacent !== false) {
            var anyPair = false;
            for (var j = 0; j < out.length; j++) if (T.pairs(out[j]).length) anyPair = true;
            if (!anyPair) T.fail('Select two adjacent keyframes.');
        }
        return out;
    };
    /* 0-based indices of adjacent selected key pairs: [k, k+1] */
    T.pairs = function (prop) {
        var keys = slice(prop.selectedKeys).sort(function (a, b) { return a - b; }), out = [];
        for (var i = 1; i < keys.length; i++) if (keys[i] === keys[i - 1] + 1) out.push([keys[i - 1] - 1, keys[i] - 1]);
        return out;
    };
    T.sortedKeys = function (prop) { return slice(prop.selectedKeys).sort(function (a, b) { return a - b; }); };

    /* ---------- numbers and text ---------- */
    T.num = function (v, def) {
        if (typeof v === 'number') return isFinite(v) ? v : def;
        var n = parseFloat(String(v === undefined || v === null ? '' : v).replace(',', '.'));
        return isFinite(n) ? n : def;
    };
    T.int = function (v, def) { var n = T.num(v, def); return n === def && !isFinite(T.num(v, NaN)) ? def : Math.round(n); };
    T.clamp = function (v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); };
    T.round = function (v, dp) { var f = Math.pow(10, dp === undefined ? 2 : dp); return Math.round(v * f) / f; };
    T.strip = function (s) { return String(s === undefined || s === null ? '' : s).replace(/^\s+|\s+$/g, ''); };
    T.pad = function (n, width) { var s = String(n); while (s.length < width) s = '0' + s; return s; };
    T.clone = function (v) { return JSON.parse(JSON.stringify(v)); };
    T.rand = function () { return Math.random(); };
    T.timeLabel = function (comp, t) {
        var fps = comp.frameRate || 24;
        var f = Math.round(t * fps);
        return T.pad(Math.floor(f / (fps * 60)), 2) + ':' + T.pad(Math.floor(f / fps) % 60, 2) + ':' + T.pad(f % Math.round(fps), 2);
    };
    T.snapTime = function (comp, t) { var fps = comp.frameRate || 24; return Math.round(t * fps) / fps; };

    return T;
})();
