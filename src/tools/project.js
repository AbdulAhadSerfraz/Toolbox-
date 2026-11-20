/* Toolbox tools — Project (9 tools, ids 160-166 + 281 282) */
(function () {
    'use strict';

    /* 160 Reveal Selected Layer Assets */
    TB.reg(160, function () {
        var c = TB.comp();
        var sel = c.selectedLayers;
        if (!sel.length) TB.fail('Select at least one layer.');
        var items = [];
        for (var i = 0; i < sel.length; i++) {
            var src = null;
            try { src = sel[i].source; } catch (e) { src = null; }
            if (src && src.id) items.push(src.id);
        }
        if (!items.length) TB.fail('Selected layers have no project sources.');
        try { app.run('project.select', { items: items }); } catch (e) { TB.fail(e.message); }
        TB.say('Revealed ' + items.length + ' source' + (items.length === 1 ? '' : 's') + ' in the Project panel.');
        return items.length;
    }, { glyph: 'reveal' });

    /* 161 Reveal Current Comp */
    TB.reg(161, function () {
        var c = TB.comp();
        try { app.run('comp.revealInProject', { comp: c.id }); } catch (e) { TB.fail(e.message); }
        TB.say('Revealed "' + c.name + '" in the Project panel.');
        return 1;
    }, { glyph: 'reveal' });

    /* 162 Reveal Project Folder */
    TB.reg(162, function () {
        try { app.run('file.revealInFinder', { path: app.project.file ? app.project.file.parent.fsName : TH.tempFolder() }); }
        catch (e) { try { new Folder(TH.tempFolder()).execute(); } catch (e2) { TB.fail(e.message); } }
        TB.say('Revealed the project folder.');
        return 1;
    }, { glyph: 'folder' });

    /* 163 Reveal AE Script Folder */
    TB.reg(163, function () {
        var dir = new Folder(TH.tempFolder());        try { dir.execute(); } catch (e) { TB.fail('Cannot open the script folder: ' + e.message); }
        TB.say('Revealed the scripts folder.');
        return 1;
    }, { glyph: 'folder' });

    /* 281 Relink Missing Files */
    TB.reg(281, function () {
        var items = [];
        for (var i = 1; i <= app.project.numItems; i++) {
            var it = app.project.item(i);
            try { if (it.file && !it.file.exists) items.push(it.id); } catch (e) { }
        }
        if (!items.length) { TB.say('No missing files found.'); return 0; }
        var f = TB.prompt('Relink Missing Files', 'Folder to search in', TH.tempFolder());
        if (f === null) return 0;
        var dir = new Folder(f);
        if (!dir.exists) TB.fail('Folder does not exist.');
        var n = 0;
        items.forEach(function (id) {
            try {
                var it = null;
                for (var j = 1; j <= app.project.numItems; j++) if (app.project.item(j).id === id) { it = app.project.item(j); break; }
                if (!it) return;
                var base = it.name;
                var cand = new File(dir.fsName + '/' + base);
                if (cand.exists) { try { it.replace(cand); n++; } catch (e) { } }
            } catch (e) { }
        });
        TB.say('Relinked ' + n + ' of ' + items.length + ' missing file' + (items.length === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'relink' });

    /* 282 Find Effects */
    TB.reg(282, function () {
        var c = TB.comp();
        var q = TB.prompt('Find Effects', 'Effect name (or part of it)', '');
        if (q === null) return 0;
        q = TB.strip(q).toLowerCase();
        var found = [];
        for (var i = 1; i <= c.numLayers; i++) {
            var L = c.layer(i);
            var fx = null;
            try { fx = L.property('Effects'); } catch (e) { fx = null; }
            if (!fx) continue;
            for (var j = 1; j <= fx.numProperties; j++) {
                var e = fx.property(j);
                if (!e) continue;
                if (!q || String(e.name).toLowerCase().indexOf(q) >= 0 || String(e.matchName).toLowerCase().indexOf(q) >= 0) {
                    found.push({ layer: L, effect: e });
                }
            }
        }
        if (!found.length) { TB.say('No effects matched.'); return 0; }
        var action = TB.pick('Find Effects', 'Action', ['Select', 'Enable all', 'Disable all', 'Delete all'], 'Select');
        if (action === null) return 0;
        var n = 0;
        if (action === 'Select') {
            app.run('edit.deselectAll', {});
            found.forEach(function (f) { try { f.effect.selected = true; n++; } catch (e) { } });
        } else if (action === 'Enable all') {
            found.forEach(function (f) { try { f.effect.enabled = true; n++; } catch (e) { } });
        } else if (action === 'Disable all') {
            found.forEach(function (f) { try { f.effect.enabled = false; n++; } catch (e) { } });
        } else if (action === 'Delete all') {
            app.beginUndoGroup('Toolbox · Delete Effects');
            found.forEach(function (f) { try { f.effect.remove(); n++; } catch (e) { } });
            app.endUndoGroup();
        }
        TB.say(action + ': ' + n + ' effect' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'findFx' });

    /* 164 Create Folder Structure */
    TB.reg(164, function () {
        var root = TB.pick('Create Folder Structure', 'Preset', ['Basic', 'Motion Graphics', 'VFX'], 'Basic');
        if (root === null) return 0;
        var presets = {
            'Basic': ['Footage', 'Comps', 'Audio', 'Output'],
            'Motion Graphics': ['Footage', 'Comps', 'Precomps', 'Audio', 'Output', 'Assets'],
            'VFX': ['Plates', 'Comps', 'Precomps', 'Masks', 'Output', 'References']
        };
        var names = presets[root] || presets['Basic'];
        var folders = [];
        names.forEach(function (nm) {
            try { var f = app.project.items.addFolder(nm); folders.push(f); } catch (e) { }
        });
        TB.say('Created ' + folders.length + ' folder' + (folders.length === 1 ? '' : 's') + ' (' + root + ').');
        return folders.length;
    }, { glyph: 'folder' });

    /* 165 Organize Project */
    TB.reg(165, function () {
        var names = { FootageItem: 'Footage', CompItem: 'Comps', FolderItem: null };
        /* create target folders */
        var folders = {};
        Object.keys(names).forEach(function (k) {
            if (!names[k]) return;
            try { folders[k] = app.project.items.addFolder(names[k]); } catch (e) { folders[k] = null; }
        });
        var n = 0;
        for (var i = 1; i <= app.project.numItems; i++) {
            var it = app.project.item(i);
            if (it instanceof FolderItem) continue;
            var key = it instanceof CompItem ? 'CompItem' : (it instanceof FootageItem ? 'FootageItem' : null);
            if (key && folders[key]) {
                try { app.run('project.move', { items: [it.id], folder: folders[key].id }); n++; } catch (e) { }
            }
        }
        TB.say('Organized ' + n + ' item' + (n === 1 ? '' : 's') + ' into folders.');
        return n;
    }, { glyph: 'organize' });

    /* 166 Project Cleanup */
    TB.reg(166, function () {
        var c = TB.comp();
        var removed = 0;
        /* remove unused footage items */
        for (var i = app.project.numItems; i >= 1; i--) {
            var it = app.project.item(i);
            if (it instanceof FootageItem) {
                var used = false;
                try {
                    var u = app.run('project.usedIn', { item: it.id });
                    if (u && u.count && u.count > 0) used = true;
                } catch (e) { }
                if (!used) { try { app.run('project.delete', { items: [it.id] }); removed++; } catch (e) { } }
            }
        }
        TB.say('Cleaned up ' + removed + ' unused item' + (removed === 1 ? '' : 's') + '.');
        return removed;
    }, { glyph: 'cleanup' });

})();
