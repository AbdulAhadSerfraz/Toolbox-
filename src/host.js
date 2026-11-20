/* Toolbox host bridge — EffectCraft command bus, menu commands, easing conversion,
   guides, text and effects. Everything here is probed against EffectCraft 0.24.1. */

var TH = (function () {
    var H = {}, EPS = 1e-8;

    /* ---------- command bus ---------- */
    H.run = function (cmd, params) { return app.run(cmd, params || {}); };
    H.tryRun = function (cmd, params) { try { return app.run(cmd, params || {}); } catch (e) { return null; } };
    H.has = function (cmd) {
        try { app.run('project.summary', {}); } catch (e) { return false; }
        return typeof app.run === 'function';
    };
    H.menuId = function (name) {
        try { return app.findMenuCommandId(name) || 0; } catch (e) { return 0; }
    };
    /* Run an app menu command by its display name (EffectCraft maps these to engine commands). */
    H.menu = function (name) {
        var id = H.menuId(name);
        if (!id) TB.fail('Menu command not found: ' + name);
        app.executeCommand(id);
    };
    /* Several commands in one undo step, rolled back if one fails. */
    H.batch = function (steps, label) {
        if (!steps || !steps.length) return;
        var err = null;
        try { app.beginUndoGroup('Toolbox \u00b7 ' + label); } catch (e) { throw e; }
        try {
            for (var i = 0; i < steps.length; i++) app.run(steps[i].command, steps[i].params || {});
        } catch (e) { err = e; }
        finally { try { app.endUndoGroup(); } catch (ignore) { } }
        if (err) throw err;
    };

    /* ---------- layers ---------- */
    H.layerLabel = function (layer) { try { return layer.label; } catch (e) { return 1; } };
    H.setLabel = function (layer, n) { try { layer.label = n; } catch (e) { } };
    H.markers = function (item) { return item && item.property ? item.property('Marker') : null; };
    H.layerOf = function (prop) {
        var d = prop.propertyDepth, p = prop;
        for (var i = 0; i < d; i++) p = p.propertyGroup(1);
        return p;
    };

    /* ---------- text ---------- */
    H.textProp = function (layer) {
        var p = null;
        try { p = layer.property('Source Text'); } catch (e) { p = null; }
        return p || null;
    };
    H.hasText = function (layer) { return !!H.textProp(layer); };
    H.textDoc = function (layer) {
        var p = H.textProp(layer);
        if (!p) TB.fail(layer.name + ' is not a text layer.');
        return p.value;
    };
    H.setText = function (layer, doc) {
        var p = H.textProp(layer);
        if (!p) TB.fail(layer.name + ' is not a text layer.');
        p.setValue(doc);
    };
    H.textContent = function (layer) {
        var p = H.textProp(layer);
        if (!p) TB.fail(layer.name + ' is not a text layer.');
        var v = p.value;
        return v && v.text !== undefined ? String(v.text) : String(v);
    };

    /* ---------- effects ---------- */
    H.effectGroup = function (layer) {
        try { return layer.property('Effects') || layer.effect; } catch (e) { return null; }
    };
    H.addEffect = function (layer, matchName) {
        var fx = H.effectGroup(layer);
        if (!fx) TB.fail(layer.name + ' has no Effects group.');
        try { return fx.addProperty(matchName); }
        catch (e) { TB.fail('Cannot add effect ' + matchName + ': ' + e.message); }
    };
    H.findEffect = function (layer, matchName) {
        var fx = H.effectGroup(layer);
        if (!fx) return null;
        try { return fx.property(matchName); } catch (e) { return null; }
    };

    /* ---------- guides (EffectCraft exposes guides only as engine commands) ---------- */
    H.guide = function (orientation, position, percent) {
        return H.run('view.addGuide', percent
            ? { orientation: orientation, position: position, percent: true }
            : { orientation: orientation, position: position });
    };
    H.clearGuides = function () { return H.run('view.clearGuides', {}); };
    H.exportGuides = function (path) { return H.run('view.exportGuides', { path: path }); };
    H.importGuides = function (path) { return H.run('view.importGuides', { path: path }); };
    H.guideFile = function () {
        return new File(H.tempFolder() + '/toolbox-guides.json');
    };
    /* EffectCraft has no Folder.temp/userData/desktop: derive a writable base
       from the running script's own folder (works in AE too). */
    H.tempFolder = function () {
        try {
            if (typeof $ !== 'undefined' && $.fileName) return String($.fileName).replace(/[\\\/][^\\\/]*$/, '');
        } catch (e) { }
        try {
            if (app.project.file && app.project.file.parent) return app.project.file.parent.fsName;
        } catch (e2) { }
        return '.';
    };
    /* Turn the engine's file-write gate into an actionable message (null otherwise). */
    H.writeGate = function (e) {
        var m = e && e.message ? String(e.message) : '';
        return m.indexOf('Allow Scripts to Write Files') >= 0
            ? 'EffectCraft blocks file access until "Settings \u25b8 Scripting & Expressions \u25b8 Allow Scripts to Write Files and Access Network" is switched on.'
            : null;
    };

    /* ---------- keyframe easing ---------- */
    function arr(x) { return Array.prototype.slice.call(x); }
    H.keyEase = function (prop, keyIndex) {
        return {
            inn: arr(prop.keyInTemporalEase(keyIndex)),
            out: arr(prop.keyOutTemporalEase(keyIndex))
        };
    };
    H.setKeyEase = function (prop, keyIndex, inEase, outEase) {
        prop.setTemporalEaseAtKey(keyIndex, inEase, outEase);
    };
    H.setInterp = function (prop, keyIndex, inType, outType) {
        prop.setInterpolationTypeAtKey(keyIndex, inType, outType);
    };
    H.interpOf = function (prop, keyIndex) {
        return { inn: prop.keyInInterpolationType(keyIndex), out: prop.keyOutInterpolationType(keyIndex) };
    };
    H.ease = function (speed, influence) { return new KeyframeEase(speed, influence); };

    /* Values/derivative of a segment, per dimension, in value units per second.
       Spatial properties use motion-path length (curved paths included) as the speed magnitude. */
    H.segmentSlope = function (prop, k) {
        var a = prop.keyValue(k), b = prop.keyValue(k + 1);
        var dt = prop.keyTime(k + 1) - prop.keyTime(k);
        if (!(dt > EPS)) TB.fail('The selected segment has no duration.');
        var delta = [], dims = [], i, straight = 0;
        if (typeof a === 'number') { delta.push(b - a); }
        else if (a && typeof a.length === 'number') {
            for (i = 0; i < a.length; i++) delta.push((b[i] === undefined ? 0 : b[i]) - (a[i] === undefined ? 0 : a[i]));
        } else delta.push(1);
        for (i = 0; i < delta.length; i++) straight += delta[i] * delta[i];
        straight = Math.sqrt(straight);
        var factor = 1;
        if (prop.isSpatial) {
            var len = H.pathLength(prop, k, a, b);
            if (len > EPS) factor = straight > EPS ? len / straight : 0;
        }
        if (factor === 0) { for (i = 0; i < delta.length; i++) dims.push(len / dt); }
        else for (i = 0; i < delta.length; i++) dims.push(delta[i] / dt * factor);
        if (!dims.length) dims.push(1 / dt);
        return dims;
    };
    /* Quadrature over the path's cubic, when the host exposes the spatial tangents. */
    H.pathLength = function (prop, k, a, b) {
        if (typeof prop.keyOutSpatialTangent !== 'function' || typeof prop.keyInSpatialTangent !== 'function') return 0;
        var to = null, ti = null;
        try { to = prop.keyOutSpatialTangent(k); ti = prop.keyInSpatialTangent(k + 1); } catch (e) { return 0; }
        if (!to || !ti) return 0;
        var nodes = [-.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664, 0],
            wts = [.4786286704993655, .4786286704993655, .2369268850561891, .2369268850561891, .5688888888888889],
            total = 0, d, i, j;
        for (i = 0; i < 64; i++) {
            for (j = 0; j < 5; j++) {
                var q = (i + .5) / 64 + nodes[j] / 128, u = 1 - q, sum = 0;
                for (d = 0; d < a.length; d++) {
                    var p0 = a[d], p1 = p0 + (to[d] || 0), p3 = b[d], p2 = p3 + (ti[d] || 0);
                    var v = 3 * u * u * q * (p1 - p0) + 6 * u * q * (p2 - p1) + 3 * q * q * (p3 - p2);
                    sum += v * v;
                }
                total += wts[j] * Math.sqrt(sum) / 128;
            }
        }
        return total;
    };

    /* Cubic curve [x1,y1,x2,y2] -> the two eased sides, scaled to each dimension's speed. */
    H.curveSides = function (curve, slopes) {
        var x1 = TB.clamp(curve[0], 0, 1), y1 = curve[1],
            x2 = TB.clamp(curve[2], 0, 1), y2 = curve[3];
        var outInf = Math.max(0.1, x1 * 100), inInf = Math.max(0.1, (1 - x2) * 100);
        var outScale = y1 / Math.max(0.001, x1), inScale = (1 - y2) / Math.max(0.001, 1 - x2);
        var outs = [], ins = [], i;
        for (i = 0; i < slopes.length; i++) { outs.push(slopes[i] * outScale); ins.push(slopes[i] * inScale); }
        return { outInfluence: Math.min(100, outInf), inInfluence: Math.min(100, inInf), outs: outs, ins: ins };
    };
    /* KeyframeEase arrays shaped like the property's existing ones. */
    H.fill = function (speeds, influence, proto) {
        var len = proto && proto.length ? proto.length : speeds.length, out = [], i;
        for (i = 0; i < len; i++) {
            var s = speeds[i] !== undefined ? speeds[i] : (speeds.length ? speeds[speeds.length - 1] : 0);
            if (!isFinite(s)) s = 0;
            out.push(new KeyframeEase(s, influence));
        }
        return out;
    };
    /* Read the cubic curve [x1,y1,x2,y2] for the segment k -> k+1 (k is 1-based).
       LINEAR sides sit on the diagonal; a HOLD side has no cubic curve at all. */
    H.curveOfSegment = function (prop, k) {
        var slopes = H.segmentSlope(prop, k), ei = H.keyEase(prop, k), eo = H.keyEase(prop, k + 1);
        var outE = ei.out[0], inE = eo.inn[0], dim = 0, i;
        for (i = 1; i < slopes.length; i++) if (Math.abs(slopes[i]) > Math.abs(slopes[dim])) dim = i;
        if (!outE || !inE) TB.fail('Cannot read the easing of this keyframe.');
        var iOut = prop.keyOutInterpolationType(k), iIn = prop.keyInInterpolationType(k + 1);
        if (iOut === KeyframeInterpolationType.HOLD || iIn === KeyframeInterpolationType.HOLD) {
            TB.fail('Hold interpolation has no cubic curve. Switch the held key to Linear or Bezier first.');
        }
        var s = slopes[dim];
        var x1 = TB.clamp(outE.influence / 100, 0, 1), x2 = TB.clamp(1 - inE.influence / 100, 0, 1);
        var y1 = iOut === KeyframeInterpolationType.LINEAR ? x1 : (Math.abs(s) > EPS ? x1 * (outE.speed / s) : 0);
        var y2 = iIn === KeyframeInterpolationType.LINEAR ? x2 : (Math.abs(s) > EPS ? 1 - (1 - x2) * (inE.speed / s) : 1);
        if (!isFinite(y1)) y1 = x1;
        if (!isFinite(y2)) y2 = x2;
        return [x1, y1, x2, y2];
    };
    /* One side only: 'in' = the incoming curve of key k+1, 'out' = the outgoing curve of key k. */
    H.curveSide = function (prop, k, side) {
        var c = H.curveOfSegment(prop, k);
        return side === 'in' ? [c[2], c[3], c[2], c[3]] : [c[0], c[1], c[0], c[1]];
    };
    /* Apply a curve to every adjacent selected pair. side: 'in' | 'out' | 'both'
       ('in' changes only incoming sides, 'out' only outgoing; the other side is preserved). */
    H.applyCurve = function (prop, curve, side, pairs) {
        pairs = pairs || TB.pairs(prop);
        var count = 0;
        for (var i = 0; i < pairs.length; i++) {
            var k = pairs[i][0] + 1;
            var sides = H.curveSides(curve, H.segmentSlope(prop, k));
            if (side !== 'in') {
                var eo = H.keyEase(prop, k);
                H.setKeyEase(prop, k, eo.inn, H.fill(sides.outs, sides.outInfluence, eo.out));
                H.setInterp(prop, k, H.interpOf(prop, k).inn, KeyframeInterpolationType.BEZIER);
            }
            if (side !== 'out') {
                var ei = H.keyEase(prop, k + 1);
                H.setKeyEase(prop, k + 1, H.fill(sides.ins, sides.inInfluence, ei.inn), ei.out);
                H.setInterp(prop, k + 1, KeyframeInterpolationType.BEZIER, H.interpOf(prop, k + 1).out);
            }
            count++;
        }
        return count;
    };

    /* ---------- misc host helpers ---------- */
    H.snapshot = function (comp, path) {
        if (typeof comp.saveFrameToPng === 'function') { comp.saveFrameToPng(path); return true; }
        return false;
    };
    H.writeJson = function (file, obj) {
        if (!file.open('w')) TB.fail('Cannot write ' + file.fsName);
        file.write(JSON.stringify(obj));
        file.close();
    };
    H.readJson = function (file) {
        if (!file.exists) return null;
        if (!file.open('r')) TB.fail('Cannot read ' + file.fsName);
        var s = file.read();
        file.close();
        try { return JSON.parse(s); } catch (e) { return null; }
    };

    return H;
})();
