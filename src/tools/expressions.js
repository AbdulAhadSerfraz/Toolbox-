/* Toolbox tools — Expressions (7 tools, ids 284 192-197) */
(function () {
    'use strict';

    function collectProps(c, scope) {
        /* scope: 'selected' (selected properties/layers) or 'all' */
        var out = [];
        if (scope === 'selected') {
            var sp = c.selectedProperties;
            for (var i = 0; i < sp.length; i++) if (sp[i].propertyType === PropertyType.PROPERTY) out.push(sp[i]);
            if (!out.length) {
                var sl = c.selectedLayers;
                for (var i = 0; i < sl.length; i++) {
                    /* walk all properties of the layer */
                    (function walk(node) {
                        for (var j = 1; j <= node.numProperties; j++) {
                            var q = node.property(j);
                            if (!q) continue;
                            if (q.propertyType === PropertyType.PROPERTY && q.canSetExpression) out.push(q);
                            else if (q.propertyType === PropertyType.INDEXED_GROUP || q.propertyType === PropertyType.NAMED_GROUP) walk(q);
                        }
                    })(sl[i]);
                }
            }
        } else {
            for (var i = 1; i <= c.numLayers; i++) {
                (function walk(node) {
                    for (var j = 1; j <= node.numProperties; j++) {
                        var q = node.property(j);
                        if (!q) continue;
                        if (q.propertyType === PropertyType.PROPERTY && q.canSetExpression) out.push(q);
                        else if (q.propertyType === PropertyType.INDEXED_GROUP || q.propertyType === PropertyType.NAMED_GROUP) walk(q);
                    }
                })(c.layer(i));
            }
        }
        return out;
    }

    /* 284 Expression Editor */
    TB.reg(284, function () {
        var c = TB.comp();
        var props = c.selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        var expr = TB.prompt('Expression Editor', 'Expression', props.length && props[0].expression ? props[0].expression : '');
        if (expr === null) return 0;
        if (!props.length) TB.fail('Select at least one property.');
        var n = 0;
        props.forEach(function (p) {
            try { p.expression = expr; p.expressionEnabled = true; n++; } catch (e) { }
        });
        TB.say('Applied expression to ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'exprEditor' });

    /* 192 Enable Expressions */
    TB.reg(192, function () {
        var c = TB.comp();
        var scope = c.selectedProperties.length || c.selectedLayers.length ? 'selected' : 'all';
        var props = collectProps(c, scope);
        var n = 0;
        props.forEach(function (p) { try { p.expressionEnabled = true; n++; } catch (e) { } });
        TB.say('Enabled expressions on ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'exprOn' });

    /* 193 Disable Expressions */
    TB.reg(193, function () {
        var c = TB.comp();
        var scope = c.selectedProperties.length || c.selectedLayers.length ? 'selected' : 'all';
        var props = collectProps(c, scope);
        var n = 0;
        props.forEach(function (p) { try { p.expressionEnabled = false; n++; } catch (e) { } });
        TB.say('Disabled expressions on ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'exprOff' });

    /* 194 Remove Expressions */
    TB.reg(194, function () {
        var c = TB.comp();
        var scope = c.selectedProperties.length || c.selectedLayers.length ? 'selected' : 'all';
        var props = collectProps(c, scope);
        var n = 0;
        props.forEach(function (p) {
            try { if (p.expression && p.expression.length) { p.expression = ''; n++; } } catch (e) { }
        });
        TB.say('Removed expressions from ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'exprRemove' });

    /* 195 Bake Expressions */
    TB.reg(195, function () {
        var c = TB.comp();
        var scope = c.selectedProperties.length || c.selectedLayers.length ? 'selected' : 'all';
        var props = collectProps(c, scope).filter(function (p) { return p.expression && p.expression.length; });
        if (!props.length) TB.fail('No expressions to bake.');
        var n = 0;
        app.beginUndoGroup('Toolbox · Bake Expressions');
        props.forEach(function (p) {
            try { app.run('prop.convertExpressionToKeyframes', { layer: (function () { try { return TH.layerOf(p).id; } catch (e) { return null; } })(), prop: p.__uid }); n++; }
            catch (e) { try { p.expression = ''; n++; } catch (e2) { } }
        });
        app.endUndoGroup();
        TB.say('Baked ' + n + ' expression' + (n === 1 ? '' : 's') + ' into keyframes.');
        return n;
    }, { glyph: 'exprBake' });

    /* 196 Find and Replace Expressions */
    TB.reg(196, function () {
        var c = TB.comp();
        var v = TB.form('Find and Replace Expressions', [
            { id: 'find', label: 'Find', type: 'text', value: '' },
            { id: 'replace', label: 'Replace with', type: 'text', value: '' },
            { id: 'scope', label: 'Scope', type: 'select', options: ['Selected', 'Active comp', 'Entire project'], value: 'Active comp' }
        ]);
        if (v === null) return 0;
        var find = v.find, repl = v.replace, scope = TB.strip(v.scope);
        if (!find) TB.fail('Enter a search string.');
        var comps = [];
        if (scope === 'Entire project') {
            for (var i = 1; i <= app.project.numItems; i++) if (app.project.item(i) instanceof CompItem) comps.push(app.project.item(i));
        } else if (scope === 'Active comp') comps = [c];
        else comps = [c];
        var n = 0;
        comps.forEach(function (comp) {
            for (var i = 1; i <= comp.numLayers; i++) {
                (function walkNode(node) {
                    for (var j = 1; j <= node.numProperties; j++) {
                        var q = node.property(j);
                        if (!q) continue;
                        if (q.propertyType === PropertyType.PROPERTY && q.canSetExpression && q.expression && q.expression.indexOf(find) >= 0) {
                            try { q.expression = q.expression.split(find).join(repl); n++; } catch (e) { }
                        } else if (q.propertyType === PropertyType.INDEXED_GROUP || q.propertyType === PropertyType.NAMED_GROUP) walkNode(q);
                    }
                })(comp.layer(i));
            }
        });
        TB.say('Replaced in ' + n + ' expression' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'findReplace' });

    /* 197 Remove Expressions with Errors */
    TB.reg(197, function () {
        var comps = [];
        for (var i = 1; i <= app.project.numItems; i++) if (app.project.item(i) instanceof CompItem) comps.push(app.project.item(i));
        var n = 0;
        comps.forEach(function (comp) {
            for (var i = 1; i <= comp.numLayers; i++) {
                (function walkNode(node) {
                    for (var j = 1; j <= node.numProperties; j++) {
                        var q = node.property(j);
                        if (!q) continue;
                        if (q.propertyType === PropertyType.PROPERTY && q.canSetExpression && q.expression && q.expression.length) {
                            /* test by reading expressionError */
                            var hasErr = false;
                            try { hasErr = !!q.expressionError; } catch (e) { hasErr = false; }
                            if (hasErr) { try { q.expression = ''; n++; } catch (e) { } }
                        } else if (q.propertyType === PropertyType.INDEXED_GROUP || q.propertyType === PropertyType.NAMED_GROUP) walkNode(q);
                    }
                })(comp.layer(i));
            }
        });
        TB.say('Removed ' + n + ' errored expression' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'exprErrors' });

})();
