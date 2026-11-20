/* Toolbox tools — Guides (16 tools, ids 167-180 + 236 237) */
(function () {
    'use strict';

    function c() { return TB.comp(); }
    function run(cmd, params) { try { return TH.run(cmd, params || {}); } catch (e) { TB.fail(e.message); } }

    /* 167 Show/Hide Guides */
    TB.reg(167, function (m) {
        var v = (m && m.shift) ? false : true;
        /* toggle: read current? just toggle */
        try { run('view.guides', { value: v }); } catch (e) { }
        TB.say((v ? 'Showing' : 'Hiding') + ' guides.');
        return 1;
    }, { glyph: 'guideEye' });

    /* 168 Lock/Unlock Guides */
    TB.reg(168, function (m) {
        var v = (m && m.shift) ? false : true;
        try { run('view.lockGuides', { value: v }); } catch (e) { }
        TB.say((v ? 'Locked' : 'Unlocked') + ' guides.');
        return 1;
    }, { glyph: 'guideLock' });

    /* 169 Toggle Snap to Guides */
    TB.reg(169, function () {
        try { run('view.snapToGuides', {}); } catch (e) { TB.fail(e.message); }
        TB.say('Toggled snap to guides.');
        return 1;
    }, { glyph: 'guideSnap' });

    /* 236 Copy Guide Lines — export to a temp file */
    TB.reg(236, function () {
        var f = TH.guideFile();
        try { TH.exportGuides(f.fsName); }
        catch (e) { TB.fail(TH.writeGate(e) || e.message); }
        TB.say('Copied guide lines to the Toolbox guide file.');
        return 1;
    }, { glyph: 'guideCopy' });

    /* 237 Paste Guide Lines — import from the temp file */
    TB.reg(237, function () {
        var f = TH.guideFile();
        if (!f.exists) TB.fail('No copied guides. Run "Copy Guide Lines" first.');
        try { TH.importGuides(f.fsName); }
        catch (e) { TB.fail(TH.writeGate(e) || e.message); }
        TB.say('Pasted guide lines.');
        return 1;
    }, { glyph: 'guideCopy' });

    /* 170 Clear Guides (tolerates a comp without guides) */
    TB.reg(170, function () {
        var had = true;
        try { run('view.clearGuides', { comp: c().id }); }
        catch (e) {
            if (String(e.message).indexOf('no guides') >= 0) had = false;
            else TB.fail(e.message);
        }
        TB.say(had ? 'Cleared all guides.' : 'The composition has no guides to clear.');
        return had ? 1 : 0;
    }, { glyph: 'guideClear' });

    function addGuide(orientation, position, percent) {
        try { TH.guide(orientation, position, percent); } catch (e) { TB.fail(e.message); }
    }

    /* 171 Add Guides Around */
    TB.reg(171, function () {
        var comp = c();
        var v = TB.form('Add Guides Around', [
            { id: 'margin', label: 'Margin (px)', type: 'number', value: '50' }
        ]);
        if (v === null) return 0;
        var m = TB.num(v.margin, 50);
        addGuide('vertical', m, false);
        addGuide('vertical', comp.width - m, false);
        addGuide('horizontal', m, false);
        addGuide('horizontal', comp.height - m, false);
        TB.say('Added 4 guides around the comp.');
        return 4;
    }, { glyph: 'guideAround' });

    /* 172 Add Guides Left */
    TB.reg(172, function () {
        var comp = c();
        var v = TB.form('Add Guides Left', [
            { id: 'n', label: 'Number of guides', type: 'number', value: '3' },
            { id: 'spacing', label: 'Spacing (px)', type: 'number', value: '100' }
        ]);
        if (v === null) return 0;
        var n = Math.round(TB.num(v.n, 3)), sp = TB.num(v.spacing, 100);
        for (var i = 0; i < n; i++) addGuide('vertical', sp * (i + 1), false);
        TB.say('Added ' + n + ' vertical guide' + (n === 1 ? '' : 's') + ' from the left.');
        return n;
    }, { glyph: 'guideLeft' });

    /* 173 Add Guides Right */
    TB.reg(173, function () {
        var comp = c();
        var v = TB.form('Add Guides Right', [
            { id: 'n', label: 'Number of guides', type: 'number', value: '3' },
            { id: 'spacing', label: 'Spacing (px)', type: 'number', value: '100' }
        ]);
        if (v === null) return 0;
        var n = Math.round(TB.num(v.n, 3)), sp = TB.num(v.spacing, 100);
        for (var i = 0; i < n; i++) addGuide('vertical', comp.width - sp * (i + 1), false);
        TB.say('Added ' + n + ' vertical guide' + (n === 1 ? '' : 's') + ' from the right.');
        return n;
    }, { glyph: 'guideRight' });

    /* 174 Add Guides Top */
    TB.reg(174, function () {
        var comp = c();
        var v = TB.form('Add Guides Top', [
            { id: 'n', label: 'Number of guides', type: 'number', value: '3' },
            { id: 'spacing', label: 'Spacing (px)', type: 'number', value: '100' }
        ]);
        if (v === null) return 0;
        var n = Math.round(TB.num(v.n, 3)), sp = TB.num(v.spacing, 100);
        for (var i = 0; i < n; i++) addGuide('horizontal', sp * (i + 1), false);
        TB.say('Added ' + n + ' horizontal guide' + (n === 1 ? '' : 's') + ' from the top.');
        return n;
    }, { glyph: 'guideTop' });

    /* 175 Add Guides Bottom */
    TB.reg(175, function () {
        var comp = c();
        var v = TB.form('Add Guides Bottom', [
            { id: 'n', label: 'Number of guides', type: 'number', value: '3' },
            { id: 'spacing', label: 'Spacing (px)', type: 'number', value: '100' }
        ]);
        if (v === null) return 0;
        var n = Math.round(TB.num(v.n, 3)), sp = TB.num(v.spacing, 100);
        for (var i = 0; i < n; i++) addGuide('horizontal', comp.height - sp * (i + 1), false);
        TB.say('Added ' + n + ' horizontal guide' + (n === 1 ? '' : 's') + ' from the bottom.');
        return n;
    }, { glyph: 'guideBottom' });

    /* 176 Add Guides Center */
    TB.reg(176, function () {
        var comp = c();
        addGuide('vertical', comp.width / 2, false);
        addGuide('horizontal', comp.height / 2, false);
        TB.say('Added center cross guides.');
        return 2;
    }, { glyph: 'guideCenter' });

    /* 177 Add Guides Middle */
    TB.reg(177, function () {
        var comp = c();
        var orient = TB.pick('Add Guides Middle', 'Orientation', ['Vertical', 'Horizontal', 'Both'], 'Both');
        if (orient === null) return 0;
        if (orient === 'Vertical' || orient === 'Both') addGuide('vertical', 50, true);
        if (orient === 'Horizontal' || orient === 'Both') addGuide('horizontal', 50, true);
        var n = (orient === 'Both') ? 2 : 1;
        TB.say('Added middle guide' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'guideMiddle' });

    /* 178 Add Guides Anchor */
    TB.reg(178, function () {
        var comp = c();
        var sel = comp.selectedLayers;
        if (!sel.length) TB.fail('Select at least one layer.');
        var n = 0;
        for (var i = 0; i < sel.length; i++) {
            var L = sel[i];
            var pos = null;
            try { pos = (L.property('Position') || L.transform.position).value; } catch (e) { pos = null; }
            if (pos && pos.length >= 2) { addGuide('vertical', pos[0], false); addGuide('horizontal', pos[1], false); n += 2; }
        }
        TB.say('Added anchor guides for ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'guideAnchor' });

    /* 179 Create Guide/Grid System */
    TB.reg(179, function () {
        var comp = c();
        var v = TB.form('Create Guide/Grid System', [
            { id: 'cols', label: 'Columns', type: 'number', value: '3' },
            { id: 'rows', label: 'Rows', type: 'number', value: '3' },
            { id: 'margin', label: 'Margin (px)', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var cols = Math.max(1, Math.round(TB.num(v.cols, 3)));
        var rows = Math.max(1, Math.round(TB.num(v.rows, 3)));
        var margin = TB.num(v.margin, 0);
        var n = 0;
        var cw = (comp.width - 2 * margin) / cols;
        var rh = (comp.height - 2 * margin) / rows;
        for (var i = 1; i < cols; i++) { addGuide('vertical', margin + cw * i, false); n++; }
        for (var j = 1; j < rows; j++) { addGuide('horizontal', margin + rh * j, false); n++; }
        if (margin > 0) {
            addGuide('vertical', margin, false); addGuide('vertical', comp.width - margin, false);
            addGuide('horizontal', margin, false); addGuide('horizontal', comp.height - margin, false); n += 4;
        }
        TB.say('Created a ' + cols + 'x' + rows + ' guide grid (' + n + ' guides).');
        return n;
    }, { glyph: 'guideGrid' });

    /* 180 Golden Ratio */
    TB.reg(180, function () {
        var comp = c();
        var phi = 0.61803398875;
        addGuide('vertical', comp.width * (1 - phi), false);
        addGuide('vertical', comp.width * phi, false);
        addGuide('horizontal', comp.height * (1 - phi), false);
        addGuide('horizontal', comp.height * phi, false);
        TB.say('Added golden-ratio guides.');
        return 4;
    }, { glyph: 'guideGolden' });

})();
