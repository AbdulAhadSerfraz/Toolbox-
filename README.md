# Toolbox — a 174-tool panel for EffectCraft

A dockable ScriptUI toolbox for [EffectCraft](https://artcraft.app) that puts
174 everyday motion-graphics operations one click away, organised into twelve
searchable categories with an original hand-drawn icon grid.

> **Status:** 1.0.0 — all 174 tools implemented and covered by a headless test
> suite that runs every tool end-to-end.

---

## Features

- **174 tools, 12 categories** — Selection, Layers, Keyframes, Easing,
  Composition, Project, Guides, View, Expressions, Shapes, Text, Animation Tools
- **Type-to-search** across every tool name, category and description
- **Modifier variants** (Shift / Ctrl / Alt) listed in each tile's tooltip
- **One undo step per tool** — every action is wrapped in a single undo group
- **Adjustable icon grid** — 44–92 px tiles, remembered between sessions
- **Original artwork** — every icon is drawn in code; no third-party assets
- **Headless test suite** — 16 suites, including a sweep that executes all 174 tools

## Install

1. Copy `Toolbox.jsx` to EffectCraft's ScriptUI Panels folder:

   ```
   %APPDATA%\EffectCraft\Scripts\ScriptUI Panels\
   ```

   or run the installer, which also archives a different previous version:

   ```powershell
   powershell -ExecutionPolicy Bypass -File install.ps1
   ```

2. In EffectCraft open **Window ▸ Toolbox.jsx**.

> After updating the file, close and reopen the panel.

### Optional setting

Guide copy/paste, screenshots and project export write files. Enable
**Settings ▸ Scripting & Expressions ▸ Allow Scripts to Write Files and Access
Network** to use them; the tools explain this if the setting is off.

## Usage

- Click a tile to run the tool.
- Hold **Shift**, **Ctrl/Cmd** or **Alt** for the documented variant — hover a
  tile to see its variants in the status bar and tooltip.
- Type in the search box to search all categories at once; clear it to return
  to the category filter.
- Use **−** / **+** in the header to resize the tiles.

## The tools

| Category | Tools | Examples |
| --- | --- | --- |
| Selection | 17 | select by type, hierarchy, index, frame, random |
| Layers | 17 | trim, offset, reorder, parent, rename, label, lock, shy |
| Keyframes | 20 | clone, mirror, reverse, align, snap, offset, loop |
| Easing | 30 | Sine → Expo curves, standard presets, copy/paste/reverse |
| Composition | 11 | camera rig, auto trim/crop, pre-compose, batch comp edits |
| Project | 9 | reveal, relink, find effects, folder presets, organise, clean up |
| Guides | 16 | show/lock/snap, edges, centre, grid systems, golden ratio |
| View | 12 | visibility, solo, backgrounds, zoom presets, screenshot |
| Expressions | 7 | enable/disable/remove/bake, find & replace, clear errors |
| Shapes | 15 | circle/rect wizards, grid, connectors, trim paths, strokes |
| Text | 10 | find & replace, split, counters, typewriter, boxes, reveals |
| Animation Tools | 9 | elastic, bounce, bend, delayer, fader, wiggle, flicker, spin |

## Build from source

```powershell
powershell -ExecutionPolicy Bypass -File build.ps1
```

The build concatenates `src\` in load order into a single standalone file:

```
spec.js → core.js → host.js → icons.js → tools\*.js (A–Z) → panel.js
```

| Path | Purpose |
| --- | --- |
| `src\spec.js` | Catalogue of the 174 tools (ids, names, categories, tips, modifiers) |
| `src\core.js` | `TB` core: registry, dialogs, selection helpers, undo wrapper |
| `src\host.js` | `TH` host bridge: command wrappers, easing maths, guides, text |
| `src\icons.js` | `TBG` vector glyph library |
| `src\tools\` | One module per category |
| `src\panel.js` | Dockable panel UI and the `TB.PANEL` test seam |
| `docs\contract.md` | Module conventions and the test template |
| `spec\` | EffectCraft command reference used while building the tools |

## Test

Tests run headlessly and discard their changes, so they never touch a real
project:

```powershell
$cli = 'C:\Program Files\ArtCraft\EffectCraft\effectcraft-cli.exe'   # adjust if installed elsewhere
& $cli script (Resolve-Path .\test.core.js)   --demo
& $cli script (Resolve-Path .\test.panel.js)  --demo
& $cli script (Resolve-Path .\test.sweep.js)  --demo   # all 174 tools
```

Every suite prints `ALL PASS`. The sweep executes 169 tools and
registration-checks the five that touch the file system (Export, Reveal ×2,
Screenshot, Relink).

## Compatibility

- EffectCraft 0.24.x (built and tested against 0.24.1)
- Windows; the build and installer scripts are PowerShell
- ES3/ES5 JavaScript only — no modern syntax, as required by the host engine

## Notes

- The catalogue contains one duplicated id (`264`): two easing presets share
  it. Both buttons work — the tool picks its curve from the entry name.
- The panel is headless-safe: with `TB_HEADLESS` set it builds no ScriptUI
  objects, which keeps tests fast and deterministic.

## Credits and disclaimer

This is an independent, original implementation: all code, icons and text in
this repository were written for this project. It is **not** affiliated with,
endorsed by, or derived from any commercial panel product, and it contains no
third-party code, artwork or branding. Tool names describe operations
generically. EffectCraft is a product of its respective owners.

## License

MIT — see [LICENSE](LICENSE).
