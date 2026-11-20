# Tool module contract

Every tool lives in `src/tools/<file>.js`. Files are concatenated into `dist/Toolbox.jsx`
in this order: `spec.js`, `core.js`, `host.js`, `icons.js`, `tools/*.js` (alphabetical), `panel.js`.
So a tool file runs **before** the panel builds — register there, never touch the UI.

## Skeleton

```js
/* Toolbox tools — <Category> */
(function () {
    'use strict';

    TB.reg(/* spec id */, function (m) {
        /* m = { shift:bool, ctrl:bool, alt:bool }  (which key was held) */
        var c = TB.comp();
        ...
        TB.say('Renamed 6 layers');          /* success -> status line */
    }, { glyph: 'rename' });                  /* optional: override the drawn glyph */
})();
```

Register **every id** that belongs to your category (see `src/spec.js`, field `cat`).
The panel hides ids with no registration, so a missing one is a silent feature gap.

## Rules

1. **ES5 only** — `var`, `function`, no `const/let/arrow/template/JSON tricks beyond parse+stringify`.
2. **Never edit** `spec.js`, `core.js`, `host.js`, `icons.js`, `panel.js`, `build.ps1`.
   Need a helper? Define it inside your own IIFE (prefix it, e.g. `function selRandom(...)`).
   Genuinely need a core change? Write it up in `notes/<file>.md` instead and carry on.
3. **User-facing errors** — `TB.fail('Select at least one layer.')`. Never a raw exception.
   The panel catches everything and shows `e.message`, so the message is the UI.
4. **Success message** — call `TB.say('...')` with a count or a noun the user recognises.
5. **One undo step** — the panel already wraps each click in `TB.act`. Only call
   `TH.batch(steps, label)` yourself if you drive engine commands; never call
   `app.beginUndoGroup` directly.
6. **Dialogs must be testable** — use only `TB.form / TB.prompt / TB.pick / TB.notice`.
   They honour `TB.FORM_VALUES` (inject values) and `TB.OFFLINE` (use defaults), which is
   how the headless tests drive input. Never build a `Window` yourself.
7. **Selection** is read through `TB.layers()`, `TB.keyProps()`, `TB.pairs(prop)`.
   To *create* a selection in a test, use the command bus:
   `app.run('layer.select', {layers:[layer.id]})`,
   `app.run('keys.select', {keys:[{layer, prop: prop.__uid, time: t}], selectProperties: true})`.
8. **Host commands** — `TH.run('command.id', {params})` (763 available, listed in
   `spec/commands.txt` with their parameters) or `TH.menu('Pre-compose')` for a menu name.
   Prefer an existing command over re-implementing it.
9. **Easing** — use `TH.curveOfSegment(prop, keyIndex1Based)`, `TH.applyCurve(prop, curve, side, pairs)`,
   `TH.segmentSlope`, `TH.keyEase`, `TH.setKeyEase`, `TH.setInterp`.
   `side` is `'in' | 'out' | 'both'`: `'in'` changes only incoming sides, `'out'` only outgoing.
10. **Feature-detect** anything you are unsure of (`typeof x === 'function'`) and fall back
    or `TB.fail` with a clear message. Probe first (see below), do not guess.

## Test

`test.<file>.js` sits at the **project root** (the include gate only allows a script to read
its own folder):

```js
var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/<file>.js"

TB.OFFLINE = true;
var fail = 0;
function ok(cond, label) { writeLn((cond ? 'PASS  ' : 'FAIL  ') + label); if (!cond) fail++; }

/* build scratch material, select it, run the tool, assert */
...
writeLn(fail === 0 ? 'ALL PASS' : fail + ' FAILED');
```

Run it (absolute path required):

```powershell
& 'C:\Program Files\ArtCraft\EffectCraft\effectcraft-cli.exe' script 'C:\Users\Abdul Ahad\Documents\Default Project\test.<file>.js' --demo
```

Notes: `--demo` opens the bundled demo project and **discards** all changes (no `--save`),
so tests can mutate freely. Building a dialog with `win.show()` silently ends a headless
script — that is why every dialog must go through `TB.form`. `writeLn` prints.

Deliverable per module: source + a test that ends in `ALL PASS`.

## Probing before you build

```powershell
& 'C:\Program Files\ArtCraft\EffectCraft\effectcraft-cli.exe' script 'C:\...\probe.js' --demo
```
where `probe.js` does `#include "src/core.js"` etc. and prints `typeof` for the APIs you
need, then a tiny exercise of each. `spec\commands.txt` is the full engine command list.
