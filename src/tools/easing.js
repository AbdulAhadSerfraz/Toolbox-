/* Toolbox tools — Easing (30 tools: 275 276 277 + 240-266) */
(function () {
    'use strict';

    var CURVES = {
        'Sine In': [0.47, 0, 0.745, 0.715],
        'Sine Out': [0.39, 0.575, 0.565, 1],
        'Sine In Out': [0.445, 0.05, 0.55, 0.95],
        'Quad In': [0.55, 0.085, 0.68, 0.53],
        'Quad Out': [0.25, 0.46, 0.45, 0.94],
        'Quad In Out': [0.455, 0.03, 0.515, 0.955],
        'Cubic In': [0.55, 0.055, 0.675, 0.19],
        'Cubic Out': [0.215, 0.61, 0.355, 1],
        'Cubic In Out': [0.645, 0.045, 0.355, 1],
        'Quart In': [0.895, 0.03, 0.685, 0.22],
        'Quart Out': [0.165, 0.84, 0.44, 1],
        'Quart In Out': [0.77, 0, 0.175, 1],
        'Quint In': [0.755, 0.05, 0.855, 0.06],
        'Quint Out': [0.23, 1, 0.32, 1],
        'Quint In Out': [0.86, 0, 0.07, 1],
        'Expo In': [0.95, 0.05, 0.795, 0.035],
        'Expo Out': [0.19, 1, 0.22, 1],
        'Expo In Out': [1, 0, 0, 1],
        'Circ In': [0.6, 0.04, 0.98, 0.335],
        'Circ Out': [0.075, 0.82, 0.165, 1],
        'Circ In Out': [0.785, 0.135, 0.15, 0.86],
        'Linear': [1/3, 1/3, 2/3, 2/3],
        'Standard - Ease Out': [0.4, 0, 0.2, 1],
        'Fast In - Sluggish Out': [0.8, 0, 0.2, 1],
        'Steady In - Ease Out': [0.5, 0, 0.2, 1],
        'Sluggish In - Fast Out': [0.2, 0, 0.8, 1],
        'Slow In - Gentle Out': [0.3, 0, 0.7, 1],
        'Slow In - Steady Out': [0.2, 0, 0.6, 1]
    };

    /* name -> curve id in CURVES */
    var NAME_TO_CURVE = {
        240: 'Sine In', 241: 'Sine Out', 242: 'Sine In Out',
        243: 'Quad In', 244: 'Quad Out', 245: 'Quad In Out',
        246: 'Cubic In', 247: 'Cubic Out', 248: 'Cubic In Out',
        249: 'Quart In', 250: 'Quart Out', 251: 'Quart In Out',
        252: 'Quint In', 253: 'Quint Out', 254: 'Quint In Out',
        255: 'Expo In', 256: 'Expo Out', 257: 'Expo In Out',
        258: 'Circ In', 259: 'Circ Out', 260: 'Circ In Out',
        261: 'Linear', 262: 'Standard - Ease Out', 263: 'Fast In - Sluggish Out',
        264: null, /* handled by item name */
        265: 'Sluggish In - Fast Out', 266: 'Slow In - Gentle Out'
    };

    function applyPreset(id, item) {
        var name = (item && item.name) ? item.name : '';
        var curveName = NAME_TO_CURVE[id];
        if (id === 264) {
            if (name.indexOf('Steady') >= 0) curveName = 'Steady In - Ease Out';
            else curveName = 'Slow In - Steady Out';
        }
        var curve = CURVES[curveName];
        if (!curve) TB.fail('Unknown easing preset: ' + curveName);
        var ps = TB.keyProps();
        if (!ps.length) TB.fail('Select keyframes on at least one property.');
        var n = 0;
        ps.forEach(function (p) {
            try { n += TH.applyCurve(p, curve, 'both'); } catch (e) { TB.say('! ' + e.message); }
        });
        TB.say('Applied ' + curveName + ' to ' + n + ' segment' + (n === 1 ? '' : 's') + '.');
        return n;
    }

    /* Register each preset id */
    [240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266].forEach(function (id) {
        TB.reg(id, function (m, item) { return applyPreset(id, item || TB._lastItem); }, { glyph: 'easeInOut' });
    });

    /* 261 Linear glyph override */
    /* 275 Copy Key Easing */
    TB.reg(275, function () {
        var ps = TB.keyProps();
        if (!ps.length) TB.fail('Select keyframes first.');
        var p = ps[0];
        var pairs = TB.pairs(p);
        if (!pairs.length) TB.fail('Select two adjacent keyframes.');
        var curve = TH.curveOfSegment(p, pairs[0][0] + 1);
        try { app.settings.saveSetting('Toolbox', 'easing.clipboard', JSON.stringify(curve)); } catch (e) { }
        TB.say('Copied easing curve: [' + curve.map(function (x) { return Math.round(x * 100) / 100; }).join(', ') + '].');
        return 1;
    }, { glyph: 'easeCopy' });

    /* 276 Paste Key Easing */
    TB.reg(276, function (m) {
        var raw = null;
        try { raw = app.settings.getSetting('Toolbox', 'easing.clipboard'); } catch (e) { raw = null; }
        if (!raw) TB.fail('No easing copied yet. Run "Copy Key Easing" first.');
        var curve;
        try { curve = JSON.parse(raw); } catch (e) { TB.fail('Copied easing is corrupt.'); }
        var side = (m && m.shift) ? 'out' : ((m && m.ctrl) ? 'in' : 'both');
        var ps = TB.keyProps();
        if (!ps.length) TB.fail('Select keyframes first.');
        var n = 0;
        ps.forEach(function (p) {
            try { n += TH.applyCurve(p, curve, side); } catch (e) { TB.say('! ' + e.message); }
        });
        TB.say('Pasted easing onto ' + n + ' segment' + (n === 1 ? '' : 's') + ' (' + side + ' side).');
        return n;
    }, { glyph: 'easePaste' });

    /* 277 Reverse Key Easing */
    TB.reg(277, function () {
        var ps = TB.keyProps();
        if (!ps.length) TB.fail('Select keyframes first.');
        var n = 0;
        ps.forEach(function (p) {
            var pairs = TB.pairs(p);
            pairs.forEach(function (pr) {
                try {
                    var c = TH.curveOfSegment(p, pr[0] + 1);
                    var flipped = [1 - c[2], 1 - c[3], 1 - c[0], 1 - c[1]];
                    TH.applyCurve(p, flipped, 'both', [pr]);
                    n++;
                } catch (e) { TB.say('! ' + e.message); }
            });
        });
        TB.say('Reversed easing on ' + n + ' segment' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'easeReverse' });

})();
