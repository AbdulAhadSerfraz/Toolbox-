/* Toolbox tools — Animation Tools (9 tools, ids 217-225) */
(function () {
    'use strict';

    function selLayers(c) { return c.selectedLayers.length ? [].slice.call(c.selectedLayers) : (function(){var o=[];for(var i=1;i<=c.numLayers;i++)o.push(c.layer(i));return o;})(); }
    function selProps(c) {
        var out = c.selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        if (!out.length) {
            selLayers(c).forEach(function (L) {
                try {
                    var p = L.property('Position') || L.transform.position;
                    if (p) out.push(p);
                } catch (e) { }
            });
        }
        return out;
    }

    /* 217 Elastic Motion */
    TB.reg(217, function () {
        var c = TB.comp();
        var props = selProps(c);
        var n = 0;
        props.forEach(function (p) {
            try { p.expression = 'elastic = 0.8; amp = 15; freq = 3;\n' +
                'n = 0;\nif (numKeys > 0) { n = nearestKey(time).index; if (key(n).time > time) n--; }\n' +
                'if (n > 0) { t = time - key(n).time; v = velocityAtTime(key(n).time) * amp;\n' +
                'value + v * Math.sin(freq * t * 2 * Math.PI) * Math.exp(-elastic * t); } else value;'; n++; } catch (e) { }
        });
        TB.say('Applied elastic motion to ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'elastic' });

    /* 218 Bounce */
    TB.reg(218, function () {
        var c = TB.comp();
        var props = selProps(c);
        var v = TB.form('Bounce', [
            { id: 'amp', label: 'Bounce height', type: 'number', value: '30' },
            { id: 'decay', label: 'Decay', type: 'number', value: '4' }
        ]);
        if (v === null) return 0;
        var amp = TB.num(v.amp, 30), decay = TB.num(v.decay, 4);
        var n = 0;
        props.forEach(function (p) {
            try { p.expression = 'amp = ' + amp + '; decay = ' + decay + ';\n' +
                'n = 0;\nif (numKeys > 0) { n = nearestKey(time).index; if (key(n).time > time) n--; }\n' +
                'if (n > 0) { t = time - key(n).time; v = velocityAtTime(key(n).time) * amp / 100;\n' +
                'value - v * Math.abs(Math.sin(t * decay)) * Math.exp(-decay * t); } else value;'; n++; } catch (e) { }
        });
        TB.say('Applied bounce to ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'bounce' });

    /* 219 Bend */
    TB.reg(219, function () {
        var c = TB.comp();
        var layers = selLayers(c);
        var n = 0;
        layers.forEach(function (L) {
            try {
                var pos = L.property('Position') || L.transform.position;
                pos.expression = 'value + [0, -Math.sin(time * 4) * 20]';
                n++;
            } catch (e) { }
        });
        TB.say('Applied bend to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bend' });

    /* 220 Delayer */
    TB.reg(220, function () {
        var c = TB.comp();
        var v = TB.form('Delayer', [
            { id: 'frames', label: 'Delay (frames)', type: 'number', value: '5' }
        ]);
        if (v === null) return 0;
        var delay = TB.num(v.frames, 5) / (c.frameRate || 24);
        var layers = selLayers(c);
        var driver = layers.length ? layers[0] : null;
        if (!driver) TB.fail('Select at least one layer.');
        var n = 0;
        layers.forEach(function (L, idx) {
            if (L === driver) return;
            try {
                var pos = L.property('Position') || L.transform.position;
                pos.expression = 'thisComp.layer("' + driver.name + '").position.valueAtTime(time - ' + (delay * (idx)) + ')';
                n++;
            } catch (e) { }
        });
        TB.say('Applied delayer to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'delayer' });

    /* 221 Auto Fader */
    TB.reg(221, function () {
        var c = TB.comp();
        var layers = selLayers(c);
        var v = TB.form('Auto Fader', [
            { id: 'fadeIn', label: 'Fade in (s)', type: 'number', value: '0.5' },
            { id: 'fadeOut', label: 'Fade out (s)', type: 'number', value: '0.5' }
        ]);
        if (v === null) return 0;
        var fi = TB.num(v.fadeIn, 0.5), fo = TB.num(v.fadeOut, 0.5);
        var n = 0;
        layers.forEach(function (L) {
            try {
                var op = L.property('Opacity') || L.transform.opacity;
                op.expression = 'fadeIn = ' + fi + '; fadeOut = ' + fo + ';\n' +
                    'tIn = time - inPoint; tOut = outPoint - time;\n' +
                    'v = 100;\n' +
                    'if (tIn < fadeIn) v = (tIn / fadeIn) * 100;\n' +
                    'if (tOut < fadeOut) v = Math.min(v, (tOut / fadeOut) * 100);\n' +
                    'Math.max(0, Math.min(100, v));';
                n++;
            } catch (e) { }
        });
        TB.say('Applied auto fader to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'autoFader' });

    /* 222 Wiggle Property */
    TB.reg(222, function () {
        var c = TB.comp();
        var props = selProps(c);
        var v = TB.form('Wiggle Property', [
            { id: 'freq', label: 'Frequency', type: 'number', value: '5' },
            { id: 'amp', label: 'Amplitude', type: 'number', value: '10' }
        ]);
        if (v === null) return 0;
        var freq = TB.num(v.freq, 5), amp = TB.num(v.amp, 10);
        var n = 0;
        props.forEach(function (p) {
            try { p.expression = 'wiggle(' + freq + ', ' + amp + ')'; n++; } catch (e) { }
        });
        TB.say('Applied wiggle to ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'wiggleProp' });

    /* 223 Blinker Flicker */
    TB.reg(223, function () {
        var c = TB.comp();
        var layers = selLayers(c);
        var v = TB.form('Blinker Flicker', [
            { id: 'rate', label: 'Blink rate', type: 'number', value: '4' },
            { id: 'prob', label: 'Flicker probability (%)', type: 'number', value: '30' }
        ]);
        if (v === null) return 0;
        var rate = TB.num(v.rate, 4), prob = TB.num(v.prob, 30);
        var n = 0;
        layers.forEach(function (L) {
            try {
                var op = L.property('Opacity') || L.transform.opacity;
                op.expression = 'random() < ' + (prob / 100) + ' ? 0 : (Math.sin(time * ' + rate + ' * Math.PI * 2) > 0 ? 100 : 0)';
                n++;
            } catch (e) { }
        });
        TB.say('Applied blinker to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'blink' });

    /* 224 Spin */
    TB.reg(224, function () {
        var c = TB.comp();
        var layers = selLayers(c);
        var v = TB.form('Spin', [
            { id: 'speed', label: 'Rotations per second', type: 'number', value: '1' }
        ]);
        if (v === null) return 0;
        var speed = TB.num(v.speed, 1);
        var n = 0;
        layers.forEach(function (L) {
            try {
                var r = L.property('Rotation') || L.transform.rotation;
                r.expression = 'time * ' + (speed * 360);
                n++;
            } catch (e) { }
        });
        TB.say('Applied spin to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'spin' });

    /* 225 Stop Motion */
    TB.reg(225, function () {
        var c = TB.comp();
        var layers = selLayers(c);
        var v = TB.form('Stop Motion', [
            { id: 'fps', label: 'Hold frames', type: 'number', value: '2' }
        ]);
        if (v === null) return 0;
        var fps = Math.max(1, Math.round(TB.num(v.fps, 2)));
        var frame = 1 / (c.frameRate || 24);
        var hold = fps * frame;
        var n = 0;
        layers.forEach(function (L) {
            try {
                var pos = L.property('Position') || L.transform.position;
                pos.expression = 'posterizeTime(1/' + hold + ');\nvalue;';
                n++;
            } catch (e) { }
        });
        TB.say('Applied stop motion to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'stopMotion' });

})();
