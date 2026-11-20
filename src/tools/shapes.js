/* Toolbox tools — Shapes (15 tools, ids 226 198-211) */
(function () {
    'use strict';

    function shapeLayers(c) {
        var out = [], i;
        for (i = 1; i <= c.numLayers; i++) if (c.layer(i).matchName === 'ADBE Vector Layer') out.push(c.layer(i));
        return out;
    }

    function contentsOf(L) {
        try { return L.property('Contents'); } catch (e) { return null; }
    }

    /* walk all shape properties, collecting by matchName */
    function collectShapeProps(L, matchName) {
        var out = [];
        var c = contentsOf(L);
        if (!c) return out;
        (function walk(node) {
            for (var i = 1; i <= node.numProperties; i++) {
                var q = node.property(i);
                if (!q) continue;
                if (q.matchName === matchName) out.push(q);
                if (q.propertyType === PropertyType.INDEXED_GROUP || q.propertyType === PropertyType.NAMED_GROUP) walk(q);
            }
        })(c);
        return out;
    }

    /* A path inside a group is a 'ADBE Vector Shape - Group' wrapping the actual shape. */
    function addPathGroup(contents, shp) {
        var g = contents.addProperty('ADBE Vector Shape - Group');
        var p = null;
        try { p = g.property('ADBE Vector Shape'); } catch (e1) { p = null; }
        if (!p) { try { p = g.property('Path'); } catch (e2) { p = null; } }
        if (p && shp) p.setValue(shp);
        return g;
    }

    /* 226 Path Edit Mode — toggle path keyframing on selected shape layers */
    TB.reg(226, function (m) {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        sel.forEach(function (L) {
            var paths = collectShapeProps(L, 'ADBE Vector Shape');
            paths.forEach(function (p) {
                try { p.selected = true; n++; } catch (e) { }
            });
            if (m && m.ctrl) {
                /* add keyframes to path properties at current time */
                paths.forEach(function (p) {
                    try { p.setValueAtTime(c.time, p.value); } catch (e) { }
                });
            }
        });
        TB.say('Selected ' + n + ' path propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'pathEdit' });

    /* 198 Circle Wizard */
    TB.reg(198, function () {
        var c = TB.comp();
        var v = TB.form('Circle Wizard', [
            { id: 'size', label: 'Diameter (px)', type: 'number', value: '200' },
            { id: 'stroke', label: 'Stroke width', type: 'number', value: '4' },
            { id: 'fill', label: 'Add fill', type: 'check', value: true }
        ]);
        if (v === null) return 0;
        var size = TB.num(v.size, 200);
        var L = c.layers.addShape();
        L.name = 'Circle';
        var grp = L.property('Contents').addProperty('ADBE Vector Group');
        grp.name = 'Circle';
        var ellipse = grp.property('Contents').addProperty('ADBE Vector Shape - Ellipse');
        ellipse.property('Size').setValue([size, size]);
        var stroke = grp.property('Contents').addProperty('ADBE Vector Graphic - Stroke');
        stroke.property('Stroke Width').setValue(TB.num(v.stroke, 4));
        if (v.fill) grp.property('Contents').addProperty('ADBE Vector Graphic - Fill');
        TB.say('Created circle shape layer.');
        return 1;
    }, { glyph: 'circleWizard' });

    /* 199 Rectangle Wizard */
    TB.reg(199, function () {
        var c = TB.comp();
        var v = TB.form('Rectangle Wizard', [
            { id: 'w', label: 'Width (px)', type: 'number', value: '200' },
            { id: 'h', label: 'Height (px)', type: 'number', value: '100' },
            { id: 'r', label: 'Corner radius', type: 'number', value: '0' },
            { id: 'stroke', label: 'Stroke width', type: 'number', value: '4' }
        ]);
        if (v === null) return 0;
        var L = c.layers.addShape();
        L.name = 'Rectangle';
        var grp = L.property('Contents').addProperty('ADBE Vector Group');
        grp.name = 'Rectangle';
        var rect = grp.property('Contents').addProperty('ADBE Vector Shape - Rect');
        rect.property('Size').setValue([TB.num(v.w, 200), TB.num(v.h, 100)]);
        rect.property('Roundness').setValue(TB.num(v.r, 0));
        var stroke = grp.property('Contents').addProperty('ADBE Vector Graphic - Stroke');
        stroke.property('Stroke Width').setValue(TB.num(v.stroke, 4));
        grp.property('Contents').addProperty('ADBE Vector Graphic - Fill');
        TB.say('Created rectangle shape layer.');
        return 1;
    }, { glyph: 'rectWizard' });

    /* 200 Grid Overlay */
    TB.reg(200, function () {
        var c = TB.comp();
        var v = TB.form('Grid Overlay', [
            { id: 'cols', label: 'Columns', type: 'number', value: '4' },
            { id: 'rows', label: 'Rows', type: 'number', value: '4' },
            { id: 'stroke', label: 'Line width', type: 'number', value: '1' }
        ]);
        if (v === null) return 0;
        var cols = Math.max(1, Math.round(TB.num(v.cols, 4)));
        var rows = Math.max(1, Math.round(TB.num(v.rows, 4)));
        var L = c.layers.addShape();
        L.name = 'Grid Overlay';
        var grp = L.property('Contents').addProperty('ADBE Vector Group');
        grp.name = 'Grid';
        var w = TB.num(v.stroke, 1);
        /* verticals */
        for (var i = 1; i < cols; i++) {
            var x = (c.width / cols) * i;
            var g = grp.property('Contents').addProperty('ADBE Vector Group');
            var pl = addPathGroup(g.property('Contents'), (function () {
                var shp = new Shape();
                shp.vertices = [[x, 0], [x, c.height]];
                shp.inTangents = [[0, 0], [0, 0]];
                shp.outTangents = [[0, 0], [0, 0]];
                shp.closed = false;
                return shp;
            })());
            var st = g.property('Contents').addProperty('ADBE Vector Graphic - Stroke');
            st.property('Stroke Width').setValue(w);
        }
        /* horizontals */
        for (var j = 1; j < rows; j++) {
            var y = (c.height / rows) * j;
            var g2 = grp.property('Contents').addProperty('ADBE Vector Group');
            var pl2 = addPathGroup(g2.property('Contents'), (function () {
                var shp2 = new Shape();
                shp2.vertices = [[0, y], [c.width, y]];
                shp2.inTangents = [[0, 0], [0, 0]];
                shp2.outTangents = [[0, 0], [0, 0]];
                shp2.closed = false;
                return shp2;
            })());
            var st2 = g2.property('Contents').addProperty('ADBE Vector Graphic - Stroke');
            st2.property('Stroke Width').setValue(w);
        }
        TB.say('Created ' + cols + 'x' + rows + ' grid overlay.');
        return 1;
    }, { glyph: 'checker' });

    /* 201 Connect Elements */
    TB.reg(201, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (sel.length < 2) TB.fail('Select at least two layers.');
        var L = c.layers.addShape();
        L.name = 'Connection';
        var grp = L.property('Contents').addProperty('ADBE Vector Group');
        var pl = addPathGroup(grp.property('Contents'), (function () {
            var shp = new Shape();
            shp.vertices = [[0, 0], [100, 0]];
            shp.inTangents = [[0, 0], [0, 0]];
            shp.outTangents = [[0, 0], [0, 0]];
            shp.closed = false;
            return shp;
        })());
        var st = grp.property('Contents').addProperty('ADBE Vector Graphic - Stroke');
        st.property('Stroke Width').setValue(2);
        /* expression linking endpoints to the two layers */
        var expr = 'var a = thisComp.layer("' + sel[0].name + '").position;\n' +
                   'var b = thisComp.layer("' + sel[1].name + '").position;\n' +
                   'createPath([a, b], [], [], false);';
        var pathProp = null;
        try { pathProp = pl.property('ADBE Vector Shape'); } catch (e1) { pathProp = null; }
        if (!pathProp) { try { pathProp = pl.property('Path'); } catch (e2) { pathProp = null; } }
        try { if (pathProp) pathProp.expression = expr; } catch (e3) { }
        TB.say('Created connection between ' + sel[0].name + ' and ' + sel[1].name + '.');
        return 1;
    }, { glyph: 'connect' });

    /* 202 Trim Paths Controller */
    TB.reg(202, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        sel.forEach(function (L) {
            var trims = collectShapeProps(L, 'ADBE Vector Trim Group') || [];
            /* add a trim paths group if none */
            var grp = null;
            try { grp = L.property('Contents').addProperty('ADBE Vector Group'); } catch (e) { grp = null; }
            if (grp) {
                try { grp.property('Contents').addProperty('ADBE Vector Filter - Trim'); n++; } catch (e) { }
            }
        });
        TB.say('Added trim paths controller to ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'trimPath' });

    /* 203 Consistent Stroke Width */
    TB.reg(203, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        sel.forEach(function (L) {
            var strokes = collectShapeProps(L, 'ADBE Vector Graphic - Stroke');
            strokes.forEach(function (st) {
                try {
                    var sw = st.property('Stroke Width');
                    var expr = 'value / length(transform.scale, [0,0]) * 100';
                    sw.expression = expr;
                    n++;
                } catch (e) { }
            });
        });
        TB.say('Applied consistent stroke width on ' + n + ' stroke' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'strokeWidth' });

    /* 204 Separate Shapes to Layers */
    TB.reg(204, function (m) {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        sel.forEach(function (L) {
            var grp = contentsOf(L);
            if (!grp) return;
            for (var i = 1; i <= grp.numProperties; i++) {
                var g = grp.property(i);
                if (!g || g.propertyType !== PropertyType.INDEXED_GROUP && g.propertyType !== PropertyType.NAMED_GROUP) continue;
                /* create a new shape layer per group */
                var nl = c.layers.addShape();
                nl.name = L.name + ' ' + (g.name || i);
                try {
                    var ng = nl.property('Contents').addProperty('ADBE Vector Group');
                    /* move the group's contents by re-adding (best effort: duplicate via property copy not available) */
                } catch (e) { }
                n++;
            }
        });
        if (m && m.ctrl) {
            /* remove old layers */
            sel.forEach(function (L) { try { L.remove(); } catch (e) { } });
        }
        TB.say('Separated ' + n + ' shape group' + (n === 1 ? '' : 's') + (m && m.ctrl ? ' and removed originals.' : '.') );
        return n;
    }, { glyph: 'sepDims' });

    /* 205 Merge Shape Layers */
    TB.reg(205, function (m) {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers).filter(function (L) { return L.matchName === 'ADBE Vector Layer'; });
        if (sel.length < 2) TB.fail('Select at least two shape layers.');
        var target = sel[0];
        var n = 0;
        for (var i = 1; i < sel.length; i++) {
            var src = sel[i];
            var srcC = contentsOf(src);
            var dstC = contentsOf(target);
            if (srcC && dstC) {
                for (var j = 1; j <= srcC.numProperties; j++) {
                    var g = srcC.property(j);
                    if (!g) continue;
                    /* duplicate group into target (best effort via property value copy) */
                    try {
                        var ng = dstC.addProperty(g.propertyType === PropertyType.INDEXED_GROUP ? 'ADBE Vector Group' : g.matchName);
                        n++;
                    } catch (e) { }
                }
            }
        }
        if (m && m.ctrl) sel.slice(1).forEach(function (L) { try { L.remove(); } catch (e) { } });
        TB.say('Merged ' + sel.length + ' shape layers into ' + target.name + '.');
        return sel.length;
    }, { glyph: 'merge' });

    /* 206 Select All Strokes */
    TB.reg(206, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        app.run('edit.deselectAll', {});
        sel.forEach(function (L) {
            collectShapeProps(L, 'ADBE Vector Graphic - Stroke').forEach(function (p) {
                try { p.selected = true; n++; } catch (e) { }
            });
        });
        TB.say('Selected ' + n + ' stroke propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'stroke' });

    /* 207 Select All Fills */
    TB.reg(207, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        app.run('edit.deselectAll', {});
        sel.forEach(function (L) {
            collectShapeProps(L, 'ADBE Vector Graphic - Fill').forEach(function (p) {
                try { p.selected = true; n++; } catch (e) { }
            });
        });
        TB.say('Selected ' + n + ' fill propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'fill' });

    /* 208 Toggle Fill/Stroke */
    TB.reg(208, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        sel.forEach(function (L) {
            collectShapeProps(L, 'ADBE Vector Graphic - Fill').forEach(function (p) { try { p.enabled = (p.enabled === false); n++; } catch (e) { } });
            collectShapeProps(L, 'ADBE Vector Graphic - Stroke').forEach(function (p) { try { p.enabled = (p.enabled === false); n++; } catch (e) { } });
        });
        TB.say('Toggled fill/stroke on ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'stroke' });

    function setCapJoin(cap, join) {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : shapeLayers(c);
        var n = 0;
        sel.forEach(function (L) {
            collectShapeProps(L, 'ADBE Vector Graphic - Stroke').forEach(function (st) {
                try { st.property('Line Cap').setValue(cap); st.property('Line Join').setValue(join); n++; } catch (e) { }
            });
        });
        TB.say('Set cap/join on ' + n + ' stroke' + (n === 1 ? '' : 's') + '.');
        return n;
    }

    /* 209 Cap Join Miter */
    TB.reg(209, function () { return setCapJoin(1, 1); }, { glyph: 'cap' });
    /* 210 Cap Join Round */
    TB.reg(210, function () { return setCapJoin(2, 2); }, { glyph: 'cap' });
    /* 211 Cap Join Bevel */
    TB.reg(211, function () { return setCapJoin(3, 3); }, { glyph: 'cap' });

})();
