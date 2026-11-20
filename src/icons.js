/* Toolbox vector glyphs — everything is drawn at runtime with ScriptUIGraphics,
   so the panel stays a single file with no image assets. */

var TBG = (function () {
    var M = {};

    /* ---------- drawing helpers (shared with the panel) ---------- */
    function rgb(c) {
        return [0, 1, 2].map(function (i) {
            return c[i] <= 0.04045 ? c[i] / 12.92 : Math.pow((c[i] + 0.055) / 1.055, 2.4);
        }).concat([c.length > 3 ? c[3] : 1]);
    }
    M.rgb = rgb;
    M.pen = function (g, c, w) { return g.newPen(g.PenType.SOLID_COLOR, rgb(c), w || 1); };
    M.brush = function (g, c) { return g.newBrush(g.BrushType.SOLID_COLOR, rgb(c)); };
    M.line = function (g, x1, y1, x2, y2, c, w) { g.newPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.strokePath(M.pen(g, c, w || 1.4)); };
    M.poly = function (g, pts, c, fill, w) {
        g.newPath();
        for (var i = 0; i < pts.length; i++) { if (i) g.lineTo(pts[i][0], pts[i][1]); else g.moveTo(pts[i][0], pts[i][1]); }
        if (fill) { g.closePath(); g.fillPath(M.brush(g, c)); } else g.strokePath(M.pen(g, c, w || 1.4));
    };
    M.circle = function (g, x, y, r, c, fill) {
        g.newPath(); g.ellipsePath(x - r, y - r, r * 2, r * 2);
        if (fill) g.fillPath(M.brush(g, c)); else g.strokePath(M.pen(g, c, 1.4));
    };
    M.box = function (g, x, y, w, h, fill, c, r) {
        r = r === undefined ? 2 : Math.min(r === null ? 0 : r, w / 2, h / 2);
        g.newPath();
        if (!r) { g.rectPath(x, y, w, h); }
        else {
            var cx = [[x + w - r, y + r], [x + w - r, y + h - r], [x + r, y + h - r], [x + r, y + r]], n, s, a, px, py;
            for (n = 0; n < 4; n++) for (s = 0; s <= 6; s++) {
                a = (-90 + n * 90 + s * 15) * Math.PI / 180;
                px = cx[n][0] + Math.cos(a) * r; py = cx[n][1] + Math.sin(a) * r;
                if (!n && !s) g.moveTo(px, py); else g.lineTo(px, py);
            }
            g.closePath();
        }
        if (fill) g.fillPath(M.brush(g, fill)); else g.strokePath(M.pen(g, c, 1.4));
    };
    M.dash = function (g, x1, y1, x2, y2, c, w, on, off) {        /* a dashed straight line, drawn segment by segment */
        var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy) || 1;
        var ux = dx / len, uy = dy / len, pos = 0, drawing = true;
        on = on || 3; off = off === undefined ? 2.5 : off;
        while (pos < len) {
            var step = drawing ? on : off, end = Math.min(len, pos + step);
            if (drawing) M.line(g, x1 + ux * pos, y1 + uy * pos, x1 + ux * end, y1 + uy * end, c, w || 1.2);
            pos = end; drawing = !drawing;
        }
    };
    /* cubic helper: points [[x,y],[c1],[c2],[x,y]] relative to centre */
    M.curve = function (g, pts, x, y, c, w, fill) {
        g.newPath(); g.moveTo(x + pts[0][0], y + pts[0][1]);
        g.bezierCurveTo(x + pts[1][0], y + pts[1][1], x + pts[2][0], y + pts[2][1], x + pts[3][0], y + pts[3][1]);
        if (fill) g.fillPath(M.brush(g, c)); else g.strokePath(M.pen(g, c, w || 1.5));
    };
    M.arrow = function (g, x, y, ang, size, c) {
        var s = size || 4, a = ang;
        M.line(g, x, y, x + Math.cos(a) * s, y + Math.sin(a) * s, c, 1.4);
        M.poly(g, [[x + Math.cos(a) * s, y + Math.sin(a) * s],
                   [x + Math.cos(a + 2.5) * s * 0.55, y + Math.sin(a + 2.5) * s * 0.55],
                   [x + Math.cos(a - 2.5) * s * 0.55, y + Math.sin(a - 2.5) * s * 0.55]], c, true);
    };

    M.text = function (g, s, x, y, c, size) {
        g.drawString(String(s), M.pen(g, c), x, y, ScriptUI.newFont('dialog', 'REGULAR', size || 10));
    };
    M.textWidth = function (g, s, size) {
        try { return g.measureString(String(s), ScriptUI.newFont('dialog', 'REGULAR', size || 10))[0]; }
        catch (e) { return String(s).length * (size || 10) * 0.55; }
    };
    M.truncate = function (g, s, maxW, size) {
        s = String(s);
        while (s.length > 2 && M.textWidth(g, s, size) > maxW) s = s.slice(0, -2) + '\u2026';
        return s;
    };

    /* ---------- glyphs: each draws centred in a 16x16 box ---------- */
    var G = {};
    var S = 7.5; /* half size */

    G.cursor = function (g, x, y, c) { M.poly(g, [[x - 5, y - 7], [x - 5, y + 6], [x - 1, y + 2], [x + 2, y + 7], [x + 4, y + 6], [x + 1, y + 1], [x + 6, y + 1]], c, true); };
    G.invert = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.poly(g, [[x - 4, y - 3], [x + 4, y - 3], [x - 4, y + 3], [x + 4, y + 3]], a, true); };
    G.oddEven = function (g, x, y, c, a) { for (var i = -1; i <= 1; i++) M.box(g, x + i * 5 - 1.5, y - 5, 3, 10, i === 0 ? a : null, c, 1); };
    G.nth = function (g, x, y, c, a) { for (var i = 0; i < 4; i++) M.box(g, x - 7 + i * 4, y - 4 + (i % 2 ? 4 : 0), 3, 4, i % 3 === 0 ? a : null, c, 1); };
    G.dice = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 3); M.circle(g, x - 2.5, y - 2.5, 1.4, a, true); M.circle(g, x + 2.5, y + 2.5, 1.4, c, true); };
    G.text = function (g, x, y, c, a) { M.line(g, x - 6, y - 6, x + 6, y - 6, c, 2); M.line(g, x, y - 7, x, y + 7, a, 1.6); M.line(g, x - 5, y + 7, x + 5, y + 7, c, 1.6); };
    G.null = function (g, x, y, c, a) { M.box(g, x - 5, y - 5, 10, 10, null, a, 2); M.line(g, x - 7, y - 7, x + 7, y + 7, c, 1.2); };
    G.precomp = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 11, 10, null, c, 2); M.box(g, x - 3, y - 7, 11, 10, a, c, 2); };
    G.shape = function (g, x, y, c, a) { M.circle(g, x - 2, y, 5, c, false); M.box(g, x + 1, y - 4, 8, 8, null, a, 1); };
    G.cube = function (g, x, y, c, a) { M.poly(g, [[x, y - 7], [x + 6, y - 4], [x + 6, y + 4], [x, y + 7], [x - 6, y + 4], [x - 6, y - 4]], null, false); M.line(g, x, y - 7, x, y + 7, a, 1.2); M.line(g, x - 6, y - 4, x + 6, y + 4, c, 1.2); };
    G.guide = function (g, x, y, c, a) { M.dash(g, x - 7, y, x + 7, y, a, 1.3); M.dash(g, x, y - 7, x, y + 7, c, 1.3); M.circle(g, x, y, 1.6, a, true); };
    G.light = function (g, x, y, c, a) { M.circle(g, x, y - 2, 3.5, a, true); for (var i = -2; i <= 2; i++) M.line(g, x + i * 3, y + 3, x + i * 4, y + 7, c, 1.2); };
    G.audio = function (g, x, y, c, a) { for (var i = -3; i <= 3; i++) { var h = 2 + Math.abs(7 - Math.abs(i * 2)); M.line(g, x + i * 2, y - h / 2, x + i * 2, y + h / 2, i % 2 ? a : c, 1.6); } };
    G.parents = function (g, x, y, c, a) { M.circle(g, x - 4, y - 4, 2.4, c, true); M.circle(g, x + 4, y + 4, 2.4, a, true); M.line(g, x - 2.5, y - 2.5, x + 2.5, y + 2.5, c, 1.4); };
    G.hierarchy = function (g, x, y, c, a) { M.circle(g, x, y - 5, 2.2, a, true); M.box(g, x - 7, y + 3, 5, 4, null, c, 1); M.box(g, x + 2, y + 3, 5, 4, null, c, 1); M.line(g, x, y - 3, x, y, c, 1.2); M.line(g, x - 4.5, y, x + 4.5, y, c, 1.2); M.line(g, x - 4.5, y, x - 4.5, y + 3, c, 1.2); M.line(g, x + 4.5, y, x + 4.5, y + 3, c, 1.2); };
    G.matching = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 6, 6, a, c, 1); M.box(g, x + 1, y - 6, 6, 6, null, c, 1); M.box(g, x - 7, y + 1, 6, 6, null, c, 1); M.box(g, x + 1, y + 1, 6, 6, a, c, 1); };
    G.frame = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 2); M.line(g, x, y - 6, x, y + 6, a, 2); };
    G.lock = function (g, x, y, c, a) { M.box(g, x - 5, y - 1, 10, 8, null, c, 2); M.curve(g, [[x - 3, y - 1], [x - 3, y - 6], [x + 3, y - 6], [x + 3, y - 1]], x, y, a, 1.4); };
    G.shy = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 3); M.circle(g, x - 3, y, 1.6, a, true); M.circle(g, x + 3, y, 1.6, a, true); };
    G.trim = function (g, x, y, c, a) { M.line(g, x - 7, y + 4, x + 7, y + 4, c, 2); M.line(g, x - 4, y - 6, x - 4, y + 1, a, 2); M.line(g, x + 4, y - 6, x + 4, y + 1, a, 2); };
    G.rename = function (g, x, y, c, a) { M.line(g, x - 7, y + 6, x + 7, y + 6, c, 1.6); M.poly(g, [[x - 6, y - 6], [x + 4, y - 6], [x + 6, y - 4], [x + 6, y + 2], [x - 6, y + 2]], null, false); M.line(g, x - 4, y - 2, x + 3, y - 2, a, 1.6); };
    G.duplicate = function (g, x, y, c, a) { M.box(g, x - 7, y - 7, 10, 10, null, c, 2); M.box(g, x - 3, y - 3, 10, 10, a, c, 2); };
    G.palette = function (g, x, y, c, a) { M.circle(g, x - 3, y - 3, 2, c, true); M.circle(g, x + 3, y - 3, 2, a, true); M.circle(g, x - 3, y + 3, 2, a, true); M.circle(g, x + 3, y + 3, 2, c, true); };
    G.order = function (g, x, y, c, a) { for (var i = 0; i < 3; i++) M.box(g, x - 7, y - 6 + i * 5, 14, 3, i === 1 ? a : null, c, 1); };
    G.anchor = function (g, x, y, c, a) { M.circle(g, x, y, 4, c, false); M.line(g, x, y - 7, x, y + 7, a, 1.2); M.line(g, x - 7, y, x + 7, y, a, 1.2); M.circle(g, x, y, 1.4, a, true); };
    G.reset = function (g, x, y, c, a) { M.curve(g, [[x - 6, y + 2], [x - 6, y - 6], [x + 6, y - 6], [x + 6, y + 2]], x, y, c, 1.6); M.poly(g, [[x + 6, y + 2], [x + 2, y - 1], [x + 6, y - 4]], a, true); };
    G.offset = function (g, x, y, c, a) { M.line(g, x - 7, y - 3, x + 5, y - 3, c, 1.6); M.arrow(g, x + 6, y - 3, 0, 3.5, a); M.line(g, x - 5, y + 3, x + 7, y + 3, a, 1.6); M.arrow(g, x - 6, y + 3, Math.PI, 3.5, c); };
    G.repeat = function (g, x, y, c, a) { for (var i = -1; i <= 1; i++) M.box(g, x + i * 5 - 2, y - 4, 4, 8, i === 0 ? a : null, c, 1); };
    G.scissors = function (g, x, y, c, a) { M.circle(g, x - 4, y + 4, 2.4, c, false); M.circle(g, x + 4, y + 4, 2.4, c, false); M.line(g, x - 5, y + 2, x + 5, y - 6, a, 1.5); M.line(g, x + 5, y + 2, x - 5, y - 6, a, 1.5); };

    G.key = function (g, x, y, c, a) { M.poly(g, [[x, y - 5], [x + 5, y], [x, y + 5], [x - 5, y]], a, true); };
    G.clean = function (g, x, y, c, a) { for (var i = -1; i <= 1; i++) M.poly(g, [[x + i * 5, y - 3], [x + i * 5 + 2.5, y], [x + i * 5, y + 3], [x + i * 5 - 2.5, y]], i === 0 ? a : c, true); };
    G.clone = function (g, x, y, c, a) { M.poly(g, [[x - 5, y - 5], [x - 2, y], [x - 5, y + 5], [x - 8, y + 5], [x - 11, y], [x - 8, y - 5]], c, true); M.poly(g, [[x + 5, y - 5], [x + 2, y], [x + 5, y + 5], [x + 8, y + 5], [x + 11, y], [x + 8, y - 5]], a, true); };
    G.mirror = function (g, x, y, c, a) { M.line(g, x, y - 7, x, y + 7, c, 1.3); M.poly(g, [[x - 3, y - 5], [x - 7, y], [x - 3, y + 5]], a, true); M.poly(g, [[x + 3, y - 5], [x + 7, y], [x + 3, y + 5]], a, true); };
    G.alignLeft = function (g, x, y, c, a) { M.line(g, x - 6, y - 7, x - 6, y + 7, a, 2); for (var i = 0; i < 3; i++) M.box(g, x - 4, y - 6 + i * 5, 5 + i * 3, 3.5, null, c, 1); };
    G.alignRight = function (g, x, y, c, a) { M.line(g, x + 6, y - 7, x + 6, y + 7, a, 2); for (var i = 0; i < 3; i++) M.box(g, x + 4 - (5 + i * 3), y - 6 + i * 5, 5 + i * 3, 3.5, null, c, 1); };
    G.toTime = function (g, x, y, c, a) { M.line(g, x, y - 7, x, y + 7, c, 1.4); M.poly(g, [[x - 6, y - 3], [x - 1, y], [x - 6, y + 3]], a, true); M.circle(g, x + 4, y, 2.4, a, true); };
    G.toIn = function (g, x, y, c, a) { M.line(g, x - 7, y + 5, x + 7, y + 5, c, 1.6); M.poly(g, [[x - 6, y + 5], [x - 2, y - 6], [x + 2, y + 5]], a, true); };
    G.toOut = function (g, x, y, c, a) { M.line(g, x - 7, y + 5, x + 7, y + 5, c, 1.6); M.poly(g, [[x - 2, y + 5], [x + 2, y - 6], [x + 6, y + 5]], a, true); };
    G.shiftKeys = function (g, x, y, c, a) { for (var i = 0; i < 3; i++) M.poly(g, [[x - 7 + i * 5, y - 4], [x - 4.5 + i * 5, y], [x - 7 + i * 5, y + 4], [x - 9.5 + i * 5, y]], i === 1 ? a : c, true); };
    G.snapKeys = function (g, x, y, c, a) { M.dash(g, x - 7, y + 5, x + 7, y + 5, c, 1.3); M.poly(g, [[x, y - 6], [x + 4, y + 3], [x - 4, y + 3]], a, true); };
    G.reverseKeys = function (g, x, y, c, a) { M.line(g, x - 6, y - 4, x + 6, y - 4, a, 1.6); M.arrow(g, x - 7, y - 4, Math.PI, 3.5, a); M.line(g, x - 6, y + 4, x + 6, y + 4, c, 1.6); M.arrow(g, x + 7, y + 4, 0, 3.5, c); };
    G.sepDims = function (g, x, y, c, a) { M.line(g, x - 6, y + 6, x - 6, y - 6, c, 1.6); M.line(g, x + 6, y + 6, x + 6, y - 6, a, 1.6); M.poly(g, [[x, y - 5], [x + 3, y], [x, y + 5], [x - 3, y]], null, false, 1.2); };
    G.secondary = function (g, x, y, c, a) { M.poly(g, [[x - 5, y + 4], [x - 1, y - 4], [x + 3, y + 4]], null, false, 1.5); M.poly(g, [[x - 1, y + 4], [x + 3, y - 4], [x + 7, y + 4]], a, false, 1.5); };
    G.looper = function (g, x, y, c, a) { M.curve(g, [[x - 7, y + 3], [x - 7, y - 6], [x + 7, y - 6], [x + 7, y + 3]], x, y, c, 1.6); M.poly(g, [[x - 7, y + 4], [x - 3, y + 1], [x - 3, y + 7]], a, true); };
    G.selector = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 2); M.poly(g, [[x - 3, y - 2], [x + 1, y], [x - 3, y + 2]], a, true); M.line(g, x + 2, y + 3, x + 5, y + 3, a, 1.4); };
    G.assistant = function (g, x, y, c, a) { M.curve(g, [[x - 7, y + 6], [x - 7, y - 6], [x + 7, y + 6], [x + 7, y - 6]], x, y, a, 1.6); M.circle(g, x - 7, y + 6, 1.6, c, true); M.circle(g, x + 7, y - 6, 1.6, c, true); };
    G.fixOvershoot = function (g, x, y, c, a) { M.line(g, x - 7, y - 6, x + 7, y - 6, c, 1.3); M.line(g, x - 7, y + 6, x + 7, y + 6, c, 1.3); M.curve(g, [[x - 7, y], [x - 2, y + 8], [x + 2, y - 8], [x + 7, y]], x, y, a, 1.6); };
    G.findReplace = function (g, x, y, c, a) { M.circle(g, x - 3, y - 2, 4.5, c, false); M.line(g, x + 1, y + 2, x + 6, y + 7, c, 1.8); M.line(g, x + 3, y + 4, x + 6, y + 4, a, 1.4); };

    /* easing curves -------------------------------------------------- */
    function easeGlyph(kind) {
        return function (g, x, y, c, a) {
            var base = [[x - 7, y + 7], [x + 7, y + 7]];
            M.line(g, base[0][0], base[0][1], base[1][0], base[1][1], c, 1);        /* frame bottom */
            M.line(g, x - 7, y + 7, x - 7, y - 7, c, 1);                            /* frame left  */
            var p;
            if (kind === 'linear') p = [[x - 7, y + 7], [x - 7, y - 7], [x + 7, y + 7], [x + 7, y - 7]];
            else if (kind === 'in') p = [[x - 7, y + 7], [x - 7, y + 1], [x - 1, y - 7], [x + 7, y - 7]];
            else if (kind === 'out') p = [[x - 7, y + 7], [x - 1, y - 7], [x + 7, y - 7 + 6], [x + 7, y - 7]];
            else p = [[x - 7, y + 7], [x - 7, y - 7 + 1], [x + 7, y - 1], [x + 7, y - 7]];
            if (kind === 'out') p = [[x - 7, y + 7], [x - 1, y - 7], [x + 7, y - 2], [x + 7, y - 7]];
            M.curve(g, p, 0, 0, a, 1.7);
        };
    }
    G.easeLinear = easeGlyph('linear');
    G.easeIn = easeGlyph('in');
    G.easeOut = easeGlyph('out');
    G.easeInOut = easeGlyph('inout');
    G.easeCopy = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 9, 9, null, c, 1.5); M.box(g, x - 3, y - 3, 9, 9, a, c, 1.5); };
    G.easePaste = function (g, x, y, c, a) { M.box(g, x - 5, y - 7, 10, 12, null, c, 2); M.box(g, x - 2, y - 3, 6, 6, a, c, 1); };
    G.easeReverse = G.reverseKeys;

    /* guides --------------------------------------------------------- */
    function guideGlyph(pos) {
        return function (g, x, y, c, a) {
            M.box(g, x - 7, y - 7, 14, 14, null, c, 2);
            if (pos === 'top') M.dash(g, x - 7, y - 3, x + 7, y - 3, a, 1.4);
            else if (pos === 'bottom') M.dash(g, x - 7, y + 3, x + 7, y + 3, a, 1.4);
            else if (pos === 'left') M.dash(g, x - 3, y - 7, x - 3, y + 7, a, 1.4);
            else if (pos === 'right') M.dash(g, x + 3, y - 7, x + 3, y + 7, a, 1.4);
            else if (pos === 'centerH') { M.dash(g, x - 7, y, x + 7, y, a, 1.4); M.dash(g, x, y - 7, x, y + 7, a, 1.4); }
            else if (pos === 'middleH') M.dash(g, x - 7, y, x + 7, y, a, 1.4);
            else if (pos === 'middleV') M.dash(g, x, y - 7, x, y + 7, a, 1.4);
            else if (pos === 'around') { M.dash(g, x - 7, y - 3, x + 7, y - 3, a, 1.4); M.dash(g, x - 7, y + 3, x + 7, y + 3, a, 1.4); M.dash(g, x - 3, y - 7, x - 3, y + 7, a, 1.4); M.dash(g, x + 3, y - 7, x + 3, y + 7, a, 1.4); }
            else if (pos === 'grid') { for (var i = -1; i <= 1; i++) { M.dash(g, x + i * 4.5, y - 7, x + i * 4.5, y + 7, a, 1.2); M.dash(g, x - 7, y + i * 4.5, x + 7, y + i * 4.5, a, 1.2); } }
            else if (pos === 'golden') { M.line(g, x - 7, y - 7, x - 7, y + 7, a, 1.4); M.curve(g, [[x - 7, y - 7], [x + 2, y - 7], [x + 7, y - 2], [x, y]], x, y, a, 1.4); M.curve(g, [[x, y], [x + 7, y + 6], [x - 4, y + 7], [x - 1, y - 1]], x, y, c, 1.2); }
            else if (pos === 'lock') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.box(g, x - 3, y - 1, 6, 5, a, c, 1); }
            else if (pos === 'eye') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.circle(g, x, y, 3, a, false); M.circle(g, x, y, 1.2, a, true); }
            else if (pos === 'snap') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.poly(g, [[x + 1, y - 6], [x - 5, y + 1], [x - 1, y + 1], [x + 1, y + 6]], a, true); }
            else if (pos === 'clear') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.line(g, x - 4, y - 4, x + 4, y + 4, a, 1.6); M.line(g, x + 4, y - 4, x - 4, y + 4, a, 1.6); }
            else if (pos === 'copy') { M.box(g, x - 7, y - 3, 10, 8, null, c, 1.5); M.dash(g, x - 3, y - 7, x + 7, y - 7, a, 1.4); M.dash(g, x + 7, y - 7, x + 7, y + 3, a, 1.4); }
            else M.dash(g, x - 7, y, x + 7, y, a, 1.4);
        };
    }
    G.guideTop = guideGlyph('top'); G.guideBottom = guideGlyph('bottom');
    G.guideLeft = guideGlyph('left'); G.guideRight = guideGlyph('right');
    G.guideCenter = guideGlyph('centerH'); G.guideMiddle = guideGlyph('middleH');
    G.guideMiddleV = guideGlyph('middleV'); G.guideAround = guideGlyph('around');
    G.guideGrid = guideGlyph('grid'); G.guideGolden = guideGlyph('golden');
    G.guideLock = guideGlyph('lock'); G.guideEye = guideGlyph('eye');
    G.guideSnap = guideGlyph('snap'); G.guideClear = guideGlyph('clear');
    G.guideCopy = guideGlyph('copy'); G.guideAnchor = function (g, x, y, c, a) { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.circle(g, x, y, 3, c, false); M.line(g, x, y - 6, x, y + 6, a, 1.2); M.line(g, x - 6, y, x + 6, y, a, 1.2); };

    /* view ------------------------------------------------------------ */
    G.bgBlack = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, a, c, 2); M.circle(g, x, y, 3, c, false); };
    G.bgWhite = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.circle(g, x, y, 3, c, false); };
    G.bgGrey = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.circle(g, x, y, 3, a, true); };
    G.bgColor = function (g, x, y, c, a) { M.circle(g, x, y, 6, a, false); M.circle(g, x - 2, y - 2, 2, c, true); };
    G.zoom = function (g, x, y, c, a, k) { M.circle(g, x - 1, y - 1, 5, c, false); M.line(g, x + 3, y + 3, x + 7, y + 7, a, 2); if (k) M.line(g, x - 3.5, y - 1, x + 1.5, y - 1, a, 1.6); };
    G.zoom100 = function (g, x, y, c, a) { G.zoom(g, x - 1, y, c, a); M.line(g, x + 2, y - 6, x + 6, y - 6, a, 1.4); };
    G.zoom50 = function (g, x, y, c, a) { G.zoom(g, x - 1, y, c, a); M.box(g, x + 2, y - 7, 5, 3, a, c, 1); };
    G.zoom33 = function (g, x, y, c, a) { G.zoom(g, x - 1, y, c, a); M.poly(g, [[x + 2, y - 7], [x + 7, y - 7], [x + 4.5, y - 4], [x + 7, y - 1], [x + 2, y - 1], [x + 4.5, y - 4]], null, false, 1.2); };
    G.screenshot = function (g, x, y, c, a) { M.box(g, x - 7, y - 4, 14, 10, null, c, 2); M.box(g, x - 3, y - 7, 6, 3, null, c, 1); M.circle(g, x, y + 1, 3, a, false); };
    G.solo = function (g, x, y, c, a) { M.curve(g, [[x - 7, y + 4], [x - 2, y - 7], [x + 2, y + 7], [x + 7, y - 4]], x, y, a, 2); };
    G.checker = function (g, x, y, c, a) { for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) if ((i + j) % 2 === 0) M.box(g, x - 7 + i * 3.5, y - 7 + j * 3.5, 3.5, 3.5, (i + j) % 4 === 0 ? a : c, c, 0); };
    G.eye = function (g, x, y, c, a) { M.curve(g, [[x - 7, y], [x - 3, y - 6], [x + 3, y - 6], [x + 7, y]], x, y, c, 1.5); M.curve(g, [[x + 7, y], [x + 3, y + 6], [x - 3, y + 6], [x - 7, y]], x, y, c, 1.5); M.circle(g, x, y, 2.4, a, true); };

    /* expressions ------------------------------------------------------ */
    G.exprOn = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.poly(g, [[x - 2, y - 5], [x - 6, y + 1], [x - 2, y + 1], [x - 2, y + 6], [x + 4, y - 1], [x, y - 1], [x, y - 5]], a, true); };
    G.exprOff = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.line(g, x - 5, y + 5, x + 5, y - 5, a, 2); };
    G.exprBake = function (g, x, y, c, a) { M.poly(g, [[x, y - 7], [x + 6, y - 1], [x + 6, y + 6], [x - 6, y + 6], [x - 6, y - 1]], null, false); M.poly(g, [[x - 3, y + 4], [x, y - 2], [x + 3, y + 4]], a, true); };
    G.exprEditor = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.poly(g, [[x - 4, y - 3], [x - 1, y], [x - 4, y + 3]], c, false, 1.4); M.line(g, x + 1, y + 3, x + 5, y + 3, a, 1.6); };
    G.exprErrors = function (g, x, y, c, a) { M.poly(g, [[x, y - 7], [x + 7, y + 6], [x - 7, y + 6]], null, false, 1.6); M.line(g, x, y - 3, x, y + 1, a, 1.8); M.circle(g, x, y + 4, 1.2, a, true); };
    G.exprRemove = G.exprOff;

    /* shapes ----------------------------------------------------------- */
    G.trimPath = function (g, x, y, c, a) { M.circle(g, x, y, 6, c, false); M.line(g, x + 4, y - 4, x + 8, y - 8, a, 2); M.line(g, x - 4, y + 4, x - 8, y + 8, a, 2); };
    G.merge = function (g, x, y, c, a) { M.circle(g, x - 3, y, 5, c, false); M.circle(g, x + 3, y, 5, a, false); };
    G.pathEdit = function (g, x, y, c, a) { M.line(g, x - 6, y + 5, x + 6, y - 5, c, 1.5); M.circle(g, x - 6, y + 5, 2, a, true); M.circle(g, x + 6, y - 5, 2, a, true); M.line(g, x - 2, y - 3, x + 2, y + 3, c, 1.2); };
    G.stroke = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 2); M.box(g, x - 4, y - 4, 8, 8, null, a, 2); };
    G.fill = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, a, c, 2); M.line(g, x - 6, y + 2, x + 6, y + 2, c, 1.2); };
    G.cap = function (g, x, y, c, a) { M.line(g, x - 7, y + 3, x + 7, y + 3, c, 3); M.poly(g, [[x + 7, y + 3], [x + 4, y - 2], [x + 10, y - 2]], a, true); };
    G.circleWizard = function (g, x, y, c, a) { M.circle(g, x, y, 6, c, false); M.circle(g, x, y, 2, a, true); M.line(g, x, y - 8, x, y - 5, a, 1.4); };
    G.rectWizard = function (g, x, y, c, a) { M.box(g, x - 6, y - 5, 12, 10, null, c, 2); M.box(g, x - 6, y - 5, 5, 5, a, c, 1); };
    G.connect = function (g, x, y, c, a) { M.circle(g, x - 5, y + 4, 2.4, c, true); M.circle(g, x + 5, y - 4, 2.4, c, true); M.line(g, x - 3, y + 3, x + 3, y - 3, a, 1.6); };
    G.strokeWidth = function (g, x, y, c, a) { M.line(g, x - 7, y - 4, x + 7, y - 4, c, 1); M.line(g, x - 7, y + 3, x + 7, y + 3, c, 3.5); M.line(g, x - 7, y + 6, x + 7, y + 6, a, 1.4); };

    /* text ------------------------------------------------------------- */
    G.lorem = function (g, x, y, c, a) { for (var i = 0; i < 3; i++) M.line(g, x - 6, y - 4 + i * 4, x + (i === 2 ? -1 : 6), y - 4 + i * 4, i === 1 ? a : c, 1.6); };
    G.counter = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 2); M.line(g, x - 3, y - 2, x - 3, y + 2, a, 1.6); M.line(g, x, y - 2, x, y + 2, a, 1.6); M.line(g, x + 3, y - 2, x + 3, y + 2, a, 1.6); };
    G.splitText = function (g, x, y, c, a) { M.line(g, x - 7, y, x - 1, y, c, 1.8); M.line(g, x + 1, y, x + 7, y, a, 1.8); M.line(g, x, y - 6, x, y + 6, c, 1.2); };
    G.areaLimit = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 1); M.dash(g, x + 6, y - 3, x + 6, y + 3, a, 1.4); M.line(g, x + 3, y - 6, x + 3, y + 6, a, 1.2); };
    G.textBox = function (g, x, y, c, a) { M.box(g, x - 6, y - 5, 12, 10, null, c, 1); M.line(g, x - 4, y - 2, x + 4, y - 2, a, 1.4); M.line(g, x - 4, y + 2, x + 4, y + 2, a, 1.4); };
    G.textReveal = function (g, x, y, c, a) { M.line(g, x - 6, y - 3, x + 6, y - 3, c, 1.8); M.poly(g, [[x - 6, y + 6], [x + 6, y + 6], [x + 6, y + 1], [x - 6, y + 4]], a, true); };
    G.typewriter = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.line(g, x - 4, y - 1, x + 1, y - 1, a, 1.6); M.box(g, x + 2, y - 4, 2, 6, a, c, 0); };
    G.wiggly = function (g, x, y, c, a) { M.curve(g, [[x - 7, y], [x - 4, y - 7], [x - 1, y + 7], [x + 2, y]], x, y, c, 1.6); M.curve(g, [[x + 2, y], [x + 4, y - 7], [x + 7, y + 4], [x + 7, y + 4]], x, y, a, 1.6); };
    G.font = function (g, x, y, c, a) { M.line(g, x - 6, y + 6, x - 2, y - 6, c, 2); M.line(g, x - 5, y + 1, x + 1, y + 1, c, 1.6); M.line(g, x + 2, y - 6, x + 6, y + 6, a, 2); };

    /* animation -------------------------------------------------------- */
    G.bounce = function (g, x, y, c, a) { M.line(g, x - 7, y + 6, x + 7, y + 6, c, 1.4); M.curve(g, [[x - 7, y + 6], [x - 3, y - 8], [x, y + 6], [x + 3, y - 4]], x, y, a, 1.7); };
    G.elastic = function (g, x, y, c, a) { M.line(g, x - 7, y, x + 7, y, c, 1.2); M.curve(g, [[x - 7, y], [x - 3, y - 7], [x + 1, y + 7], [x + 4, y - 3]], x, y, a, 1.7); };
    G.spin = function (g, x, y, c, a) { M.curve(g, [[x + 6, y - 3], [x + 6, y - 7], [x - 6, y - 7], [x - 6, y + 2]], x, y, c, 1.6); M.poly(g, [[x - 6, y + 6], [x - 2, y + 1], [x - 9, y + 1]], a, true); };
    G.wiggleProp = function (g, x, y, c, a) { M.line(g, x - 7, y + 5, x + 7, y + 5, c, 1.3); M.curve(g, [[x - 7, y + 5], [x - 4, y - 6], [x, y + 6], [x + 3, y - 4]], x, y, a, 1.7); };
    G.blink = function (g, x, y, c, a) { M.circle(g, x - 4, y, 3, c, true); M.circle(g, x + 4, y, 3, null, false); M.line(g, x + 1, y, x + 7, y, a, 1.4); };
    G.delayer = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 8, 4, c, c, 1); M.box(g, x - 3, y, 8, 4, a, c, 1); };
    G.autoFader = function (g, x, y, c, a) { M.line(g, x - 6, y - 6, x - 6, y + 6, c, 1.4); M.line(g, x + 6, y - 6, x + 6, y + 6, c, 1.4); M.line(g, x - 6, y + 3, x + 6, y - 3, a, 1.8); M.circle(g, x, y, 2, a, true); };
    G.bend = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 2); M.curve(g, [[x - 6, y + 6], [x - 1, y + 6], [x + 1, y - 6], [x + 6, y - 6]], x, y, a, 1.6); };
    G.stopMotion = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 5, 10, c, c, 1); M.box(g, x - 1, y - 5, 5, 10, null, c, 1); M.box(g, x + 5, y - 5, 5, 10, a, c, 1); };

    /* composition / project -------------------------------------------- */
    G.crop = function (g, x, y, c, a) { M.line(g, x - 7, y - 3, x - 7, y - 7, c, 1.8); M.line(g, x - 3, y - 7, x - 7, y - 7, c, 1.8); M.line(g, x + 7, y + 3, x + 7, y + 7, c, 1.8); M.line(g, x + 3, y + 7, x + 7, y + 7, c, 1.8); M.box(g, x - 4, y - 4, 8, 8, null, a, 1); };
    G.camera = function (g, x, y, c, a) { M.box(g, x - 7, y - 4, 10, 8, null, c, 2); M.poly(g, [[x + 3, y - 2], [x + 7, y - 5], [x + 7, y + 5], [x + 3, y + 2]], a, true); };
    G.resize = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 10, 9, null, c, 1); M.arrow(g, x + 2, y + 3, -0.7, 5, a); M.arrow(g, x + 2, y + 3, 2.4, 5, a); };
    G.scale = function (g, x, y, c, a) { M.box(g, x - 6, y - 5, 7, 6, null, c, 1); M.box(g, x - 2, y - 2, 9, 8, a, c, 1); };
    G.settings = function (g, x, y, c, a) { M.circle(g, x, y, 4.5, null, false); for (var i = 0; i < 8; i++) { var ang = i * Math.PI / 4; M.line(g, x + Math.cos(ang) * 5.5, y + Math.sin(ang) * 5.5, x + Math.cos(ang) * 7.5, y + Math.sin(ang) * 7.5, a, 1.6); } };
    G.precompose = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 11, 11, null, c, 2); M.box(g, x - 3, y - 3, 11, 11, a, c, 2); M.arrow(g, x - 6, y + 6, 2.4, 5, c); };
    G.folder = function (g, x, y, c, a) { M.poly(g, [[x - 7, y - 4], [x - 1, y - 4], [x + 1, y - 6], [x + 7, y - 6], [x + 7, y + 5], [x - 7, y + 5]], a, true); };
    G.findFx = function (g, x, y, c, a) { M.circle(g, x - 2, y - 2, 5, c, false); M.line(g, x + 2, y + 2, x + 7, y + 7, a, 2); M.line(g, x - 5, y - 2, x + 1, y - 2, c, 1.4); };
    G.organize = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 6, 6, a, c, 1); M.box(g, x - 7, y + 1, 6, 6, null, c, 1); M.box(g, x + 1, y - 6, 6, 6, null, c, 1); M.box(g, x + 1, y + 1, 6, 6, a, c, 1); };
    G.cleanup = function (g, x, y, c, a) { M.poly(g, [[x - 5, y - 3], [x + 5, y - 3], [x + 3, y + 7], [x - 3, y + 7]], null, false); M.line(g, x - 6, y - 3, x + 6, y - 3, a, 1.8); M.line(g, x - 2, y - 7, x + 2, y - 7, c, 1.6); };
    G.relink = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 8, 8, null, c, 1); M.line(g, x - 3, y + 3, x + 7, y + 7, a, 1.8); M.circle(g, x + 5, y + 5, 1.6, a, true); };
    G.reveal = function (g, x, y, c, a) { M.poly(g, [[x - 7, y - 4], [x - 1, y - 4], [x + 1, y - 6], [x + 7, y - 6], [x + 7, y + 5], [x - 7, y + 5]], null, false); M.circle(g, x, y + 1, 2, a, true); };
    G.plus = function (g, x, y, c) { M.line(g, x - 5, y, x + 5, y, c, 2); M.line(g, x, y - 5, x, y + 5, c, 2); };
    G.search = function (g, x, y, c, a) { M.circle(g, x - 1, y - 1, 5, c, false); M.line(g, x + 3, y + 3, x + 7, y + 7, a, 2); };

    /* ---------- resolver: icon name -> glyph ---------- */
    var CAT_DEFAULT = {
        Selection: 'cursor', Layers: 'order', Keyframes: 'key', Easing: 'easeInOut',
        Composition: 'crop', Project: 'folder', Guides: 'guideCenter', View: 'bgGrey',
        Expressions: 'exprOn', Shapes: 'pathEdit', Text: 'text', 'Animation Tools': 'bounce'
    };
    function has(s, sub) { return s.indexOf(sub) >= 0; }
    M.resolve = function (iconName, toolName, cat) {
        var s = String(iconName || ''), t = String(toolName || ''), i;
        if (G[s]) return s;
        /* easing family ------------------------------------------------ */
        if (has(s, 'easing-')) {
            if (has(s, 'Copy')) return 'easeCopy';
            if (has(s, 'Paste')) return 'easePaste';
            if (has(s, 'reverse') || has(s, 'Reverse')) return 'easeReverse';
            if (has(s, 'linear')) return 'easeLinear';
            if (has(s, 'standard') || has(s, 'Standard')) return 'easeInOut';
            var tail = s.slice(7); /* e.g. quadIn, circInOut */
            if (has(tail, 'InOut')) return 'easeInOut';
            if (/In$/.test(tail)) return 'easeIn';
            if (/Out$/.test(tail)) return 'easeOut';
            return 'easeInOut';
        }
        /* guides -------------------------------------------------------- */
        if (has(s, 'guides-')) {
            if (has(s, 'anchor')) return 'guideAnchor';
            if (has(s, 'around')) return 'guideAround';
            if (has(s, 'bottom')) return 'guideBottom';
            if (has(s, 'center')) return 'guideCenter';
            if (has(s, 'middle')) return 'guideMiddle';
            if (has(s, 'left')) return 'guideLeft';
            if (has(s, 'right')) return 'guideRight';
            if (has(s, 'top')) return 'guideTop';
            if (has(s, 'clear')) return 'guideClear';
            if (has(s, 'copy')) return 'guideCopy';
            if (has(s, 'paste')) return 'guideCopy';
            if (has(s, 'grid')) return 'guideGrid';
            if (has(s, 'golden')) return 'guideGolden';
            if (has(s, 'lock')) return 'guideLock';
            if (has(s, 'show')) return 'guideEye';
            if (has(s, 'snap')) return 'guideSnap';
            return 'guide';
        }
        /* keywords, longest match first -------------------------------- */
        var rules = [
            ['inverse', 'invert'], ['every-nth', 'nth'], ['odd-even', 'oddEven'], ['random', 'dice'],
            ['matching-property', 'matching'], ['at-frame', 'frame'], ['text-objects', 'text'],
            ['nulls', 'null'], ['precomps', 'precomp'], ['shape-objects', 'shape'], ['3d-layers', 'cube'],
            ['guide-layers', 'guide'], ['lights', 'light'], ['audio', 'audio'], ['all-parent', 'parents'],
            ['all-child', 'parents'], ['childs-of', 'hierarchy'], ['complete-hierarchy', 'hierarchy'],
            ['lock-unlock-all', 'lock'], ['lock-unlock-shy', 'shy'], ['lock', 'lock'], ['shy', 'shy'],
            ['trim-layers', 'trim'], ['rename', 'rename'], ['duplicate', 'duplicate'], ['layer-colors', 'palette'],
            ['order-layers', 'order'], ['parent-to-null', 'parents'], ['parent-in-order', 'parents'],
            ['parent-to-above', 'parents'], ['parent-to-first', 'parents'], ['anchor', 'anchor'],
            ['reset-layer', 'reset'], ['offset-layers', 'offset'], ['repeat', 'repeat'], ['attachment', 'anchor'],
            ['shift-layer-times', 'shiftKeys'], ['secondary', 'secondary'], ['clone-and-mirror', 'mirror'],
            ['clone-keys', 'clone'], ['copy-key-values', 'easeCopy'], ['paste-key-values', 'easePaste'],
            ['find-replace', 'findReplace'], ['fix-overshoot', 'fixOvershoot'], ['assistant', 'assistant'],
            ['key-looper', 'looper'], ['key-selector', 'selector'], ['left-align', 'alignLeft'],
            ['right-align', 'alignRight'], ['move-keys-to-current', 'toTime'], ['move-keys-to-in', 'toIn'],
            ['move-keys-to-out', 'toOut'], ['offset-keys', 'offset'], ['separate-dimensions', 'sepDims'],
            ['shift-keys', 'shiftKeys'], ['snap-keys', 'snapKeys'], ['time-reverse', 'reverseKeys'],
            ['clean-keyframes', 'clean'], ['fix-overshoot', 'fixOvershoot'],
            ['auto-crop', 'crop'], ['auto-trim', 'trim'], ['color-replacer', 'palette'],
            ['comp-settings', 'settings'], ['rename-comps', 'rename'], ['resize-canvas', 'resize'],
            ['scale-comps', 'scale'], ['camera-rig', 'camera'], ['duplicate-comps', 'duplicate'],
            ['export-comps', 'folder'], ['pre-compose', 'precompose'], ['precompose', 'precompose'],
            ['folder-structure', 'folder'], ['missing-effects', 'findFx'], ['organize', 'organize'],
            ['clean-up', 'cleanup'], ['relink', 'relink'], ['reveal-script', 'folder'], ['reveal-project-folder', 'folder'],
            ['reveal-current-comp', 'reveal'], ['reveal-selected', 'reveal'], ['reveal', 'reveal'],
            ['bake-expressions', 'exprBake'], ['expression-editor', 'exprEditor'], ['remove-expressions', 'exprRemove'],
            ['errors', 'exprErrors'], ['find-and-replace-expressions', 'findReplace'],
            ['enable-expressions', 'exprOn'], ['disable-expressions', 'exprOff'], ['expressions', 'exprOn'],
            ['trim-paths', 'trimPath'], ['merge-shape', 'merge'], ['path-edit', 'pathEdit'],
            ['select-all-fills', 'fill'], ['select-all-strokes', 'stroke'], ['toggle-fill-stroke', 'stroke'],
            ['cap-join', 'cap'], ['circle-wizard', 'circleWizard'], ['rectangle-wizard', 'rectWizard'],
            ['connect-elements', 'connect'], ['stroke-width', 'strokeWidth'], ['grid-overlay', 'checker'],
            ['separate-shapes', 'sepDims'], ['shapes', 'pathEdit'],
            ['lorem', 'lorem'], ['number-counter', 'counter'], ['split-text', 'splitText'],
            ['area-limit', 'areaLimit'], ['text-box', 'textBox'], ['text-reveal', 'textReveal'],
            ['typewriter', 'typewriter'], ['wiggly', 'wiggly'], ['font', 'font'], ['text', 'text'],
            ['auto-fader', 'autoFader'], ['bend', 'bend'], ['blinker', 'blink'], ['bounce', 'bounce'],
            ['delayer', 'delayer'], ['elastic', 'elastic'], ['spin', 'spin'], ['stop-motion', 'stopMotion'],
            ['wiggle', 'wiggleProp'], ['animation-', 'wiggleProp'],
            ['checkboard', 'checker'], ['checkerboard', 'checker'], ['solo-layers', 'solo'],
            ['layer-visibility', 'eye'], ['black-bg', 'bgBlack'], ['white-bg', 'bgWhite'], ['grey-bg', 'bgGrey'],
            ['bg-color', 'bgColor'], ['set-bg', 'bgColor'], ['reset-view-100', 'zoom100'],
            ['reset-view-50', 'zoom50'], ['reset-view-33', 'zoom33'], ['screenshot', 'screenshot'], ['view-', 'zoom']
        ];
        for (i = 0; i < rules.length; i++) if (has(s, rules[i][0]) || has(t, rules[i][0])) return rules[i][1];
        if (G[t]) return t;
        return CAT_DEFAULT[cat] || 'cursor';
    };

    /* Draw a glyph centred at (x,y). */
    M.draw = function (g, glyph, x, y, colour, accent) {
        var fn = G[glyph] || G[CAT_DEFAULT.Selection] || G.cursor;
        try { fn(g, x, y, colour, accent); }
        catch (e) { M.box(g, x - 6, y - 6, 12, 12, null, colour, 2); }
    };
    M.has = function (glyph) { return !!G[glyph]; };
    M.names = function () { var o = []; for (var k in G) if (Object.prototype.hasOwnProperty.call(G, k)) o.push(k); return o; };
    return M;
})();
