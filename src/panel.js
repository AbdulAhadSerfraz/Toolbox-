/* Toolbox panel — dockable ScriptUI panel: search, categories, drawn icon grid,
   per-tool tooltips with their modifier variants, one undo step per application. */
(function (thisObj) {
    var G = TBG;
    var headless = (typeof TB_HEADLESS !== 'undefined' && TB_HEADLESS);
    var ui = headless ? null : ((thisObj instanceof Panel) ? thisObj : new Window('palette', 'Toolbox', undefined, { resizeable: true }));
    var C = {
        bg: [.115, .12, .115, 1], well: [.07, .075, .07, 1], border: [.26, .29, .25, 1],
        muted: [.52, .56, .5, 1], text: [.85, .87, .82, 1], accent: [.42, .78, .95, 1],
        accent2: [.92, .76, .35, 1], sel: [.20, .28, .33, 1], hot: [.26, .36, .42, 1]
    };

    /* ---------- data ---------- */
    var byId = {}, CATS = [];
    TB_SPEC.forEach(function (s) {
        byId[s.id] = s;
        if (CATS.indexOf(s.cat) < 0) CATS.push(s.cat);
    });
    var state = { cat: CATS[0], query: '', tile: 60, scroll: 0, hover: null };
    try {
        var saved = JSON.parse(app.settings.getSetting('Toolbox', 'workspace'));
        if (saved && typeof saved === 'object') {
            if (CATS.indexOf(saved.cat) >= 0) state.cat = saved.cat;
            if (typeof saved.tile === 'number') state.tile = TB.clamp(saved.tile, 44, 92);
        }
    } catch (ignore) { }

    function persist() {
        try { app.settings.saveSetting('Toolbox', 'workspace', JSON.stringify({ cat: state.cat, tile: state.tile })); }
        catch (ignore) { }
    }
    function entry(s) {
        var t = TB.get(s.id);
        if (!t) return null;
        return {
            id: s.id, name: s.name, cat: s.cat, tip: s.tip || '', mods: s.mods || [],
            glyph: t.glyph || G.resolve(s.icon, s.name, s.cat)
        };
    }
    function available() {
        var out = [];
        TB_SPEC.forEach(function (s) { var e = entry(s); if (e) out.push(e); });
        return out;
    }
    function items() {
        var q = TB.strip(state.query).toLowerCase(), all = available();
        if (!q) return all.filter(function (e) { return e.cat === state.cat; });
        return all.filter(function (e) {
            return (e.name + ' ' + e.cat + ' ' + e.tip).toLowerCase().indexOf(q) >= 0;
        });
    }
    function tipFor(e) {
        var parts = [e.name];
        if (e.tip) parts.push(e.tip);
        (e.mods || []).forEach(function (m) { parts.push('\u2022 ' + m.when + ': ' + m.what); });
        return parts.join('\n');
    }

    /* ---------- chrome (real UI only) ---------- */
    var status = null;
    if (!headless) {
    ui.orientation = 'column'; ui.alignChildren = ['fill', 'top'];
    ui.margins = 8; ui.spacing = 6; ui.preferredSize = [330, 540];

    var header = ui.add('group'); header.orientation = 'row'; header.alignment = ['fill', 'center'];
    header.alignChildren = ['left', 'center']; header.margins = [0, 0, 0, 0]; header.spacing = 5;
    var brand = header.add('statictext', undefined, 'TOOLBOX');
    brand.preferredSize = [64, 20];
    var search = header.add('edittext', undefined, '');
    search.preferredSize = [110, 22]; search.helpTip = 'Type to search every tool by name, category or action.';
    var catList = header.add('dropdownlist', undefined, CATS);
    catList.preferredSize = [96, 22];
    catList.selection = CATS.indexOf(state.cat);
    var smaller = header.add('button', undefined, '\u2212'); smaller.preferredSize = [22, 22];
    var bigger = header.add('button', undefined, '+'); bigger.preferredSize = [22, 22];

    var body = ui.add('group'); body.orientation = 'row'; body.alignment = ['fill', 'fill'];
    body.alignChildren = ['fill', 'fill']; body.margins = 0; body.spacing = 4;
    var grid = body.add('group'); grid.orientation = 'column'; grid.alignment = ['fill', 'fill'];
    grid.alignChildren = ['left', 'top']; grid.margins = 0; grid.spacing = 4;
    var sbar = body.add('scrollbar', undefined, undefined, 'vertical');
    sbar.preferredSize = [14, 100]; sbar.alignment = ['right', 'fill'];

    status = ui.add('statictext', undefined, '');
    status.preferredSize = [310, 26]; status.helpTip = '';
    }

    /* ---------- rendering ---------- */
    var signature = '';
    function clear(node) { while (node.children && node.children.length) node.children[0].remove(); }
    function sizeOf(c) { return [c.size.width || c.preferredSize[0], c.size.height || c.preferredSize[1]]; }

    function render(force) {
        if (headless) return;
        var m = sizeOf(ui), TW = state.tile, TH = state.tile + 8;
        var usableW = Math.max(TW, m[0] - 20);
        var cols = Math.max(1, Math.floor((usableW + 4) / (TW + 4)));
        var list = items();
        var visibleRows = Math.max(2, Math.floor((m[1] - 96) / (TH + 4)));
        var rows = Math.ceil(list.length / cols);
        var maxScroll = Math.max(0, rows - visibleRows);
        state.scroll = TB.clamp(state.scroll, 0, maxScroll);
        var sig = m[0] + 'x' + m[1] + '|' + TW + '|' + state.cat + '|' + state.query + '|' + state.scroll + '|' + list.length;
        if (sig === signature && !force) return;
        signature = sig;

        clear(grid);
        grid.preferredSize = [cols * (TW + 4) - 4, visibleRows * (TH + 4) - 4];
        var start = state.scroll * cols, end = Math.min(list.length, (state.scroll + visibleRows) * cols);
        for (var r = start; r < end; r += cols) {
            var row = grid.add('group'); row.orientation = 'row'; row.margins = 0; row.spacing = 4;
            for (var c = 0; c < cols && r + c < end; c++) makeTile(row, list[r + c], TW, TH);
        }
        sbar.visible = rows > visibleRows;
        sbar.min = 0; sbar.max = Math.max(1, maxScroll);
        sbar.value = TB.clamp(state.scroll, 0, Math.max(1, maxScroll));
        sbar.preferredSize = [14, visibleRows * (TH + 4)];
        say(ready(list.length));
    }

    function ready(shown) {
        var total = available().length;
        return 'Toolbox ' + TB.version + ' \u00b7 ' + shown + '/' + TB_SPEC.length + ' tools' +
            (total < TB_SPEC.length ? ' (' + (TB_SPEC.length - total) + ' not built yet)' : ' ready');
    }

    function makeTile(parent, item, TW, TH) {
        var b = parent.add('button', undefined, '');
        b.preferredSize = [TW, TH];
        b.helpTip = tipFor(item);
        b.item = item;
        b.onDraw = function () {
            var g = this.graphics, w = this.size.width || TW, h = this.size.height || TH;
            var hot = this.active || state.hover === item.id;
            G.box(g, 1, 1, w - 2, h - 2, hot ? C.hot : C.well, hot ? C.accent : C.border, 7);
            G.draw(g, item.glyph, w / 2, h / 2 - 5, hot ? C.accent : C.text, C.accent2);
            var lab = G.truncate(g, item.name, w - 8, 9);
            G.text(g, lab, Math.max(3, (w - G.textWidth(g, lab, 9)) / 2), h - 8, hot ? C.text : C.muted, 9);
        };
        b.addEventListener('mousedown', function (e) {
            b.mods = { shift: !!e.shiftKey, ctrl: !!(e.ctrlKey || e.metaKey), alt: !!e.altKey };
        });
        b.addEventListener('mouseover', function () {
            state.hover = item.id;
            say(tipFor(item).replace(/\n+/g, ' \u00b7 '));
            try { b.notify('onDraw'); } catch (ignore) { }
        });
        b.addEventListener('mouseout', function () {
            if (state.hover === item.id) { state.hover = null; say(ready(items().length)); }
        });
        b.onClick = function () {
            var m = b.mods || { shift: false, ctrl: false, alt: false };
            b.mods = null;
            run(item, m);
        };
        return b;
    }

    function run(item, mods) {
        var tool = TB.get(item.id);
        if (!tool || !tool.run) { say(item.name + ' is not built yet.'); return; }
        var said = false, hook = TB._status;
        TB._status = function (t) { said = true; hook(t); };
        TB._lastItem = item;
        TB.act(item.name, function () { return tool.run(mods || {}, item); });
        TB._status = hook;
        if (!said) say(item.name + ' \u00b7 done.');
        try { if (ui && ui instanceof Window === false) ui.layout.layout(true); } catch (ignore) { }
    }

    function say(text) { if (status) status.text = String(text); else if (typeof writeLn === 'function') writeLn(String(text)); }

    /* ---------- wiring (real UI only) ---------- */
    if (!headless) {
    search.onChanging = function () { state.query = search.text; state.scroll = 0; render(true); };
    catList.onChange = function () {
        state.cat = catList.selection ? String(catList.selection.text) : state.cat;
        state.query = ''; search.text = ''; state.scroll = 0; render(true); persist();
    };
    smaller.onClick = function () { state.tile = TB.clamp(state.tile - 8, 44, 92); render(true); persist(); };
    bigger.onClick = function () { state.tile = TB.clamp(state.tile + 8, 44, 92); render(true); persist(); };
    sbar.onChanging = function () { state.scroll = Math.round(sbar.value); render(true); };
    ui.onResizing = ui.onResize = function () {
        try { render(false); this.layout.resize(); } catch (ignore) { }
    };
    }

    TB._status = say;
    if (!headless) {
        render(true);
        if (ui instanceof Window) ui.show();
        else { try { ui.layout.layout(true); } catch (ignore) { } }
    }

    /* Test seam: lets the headless harness render the grid and fire tiles without a mouse. */
    TB.PANEL = {
        state: state,
        entries: items,
        available: available,
        say: say,
        render: function () { render(true); },
        setQuery: function (q) { state.query = q; if (search) search.text = q; state.scroll = 0; render(true); },
        setCat: function (c) { if (CATS.indexOf(c) >= 0) { state.cat = c; state.query = ''; if (search) search.text = ''; render(true); } },
        click: function (id, mods) {
            var s = byId[id], e = s ? entry(s) : null;
            if (!e) return false;
            run(e, mods || { shift: false, ctrl: false, alt: false });
            return true;
        }
    };
})(this);
