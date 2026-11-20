# GitHub publishing sheet

Everything you need to fill in on GitHub, in the order the site asks for it.

**Live repository:** <https://github.com/AbdulAhadSerfraz/Toolbox->
**Release:** <https://github.com/AbdulAhadSerfraz/Toolbox-/releases/tag/v1.0.0>

This sheet is kept as a record of what was published; the fields below are
already applied to the live repo.

---

## 1. Repository

| Field | Value |
| --- | --- |
| **Repository name** | `Toolbox-` (owner `AbdulAhadSerfraz`) |
| **Display title** | Toolbox — a 174-tool panel for EffectCraft |
| **About / short description** (≤350 chars) | 174-tool dockable panel for EffectCraft — selection, layers, keyframes, easing, guides, shapes, text and animation, with search and hand-drawn icons. |
| **Website** | *(leave empty, or link your release page)* |
| **Visibility** | Public |
| **Initialize with** | None — this folder already has the README, LICENSE and .gitignore |
| **Default branch** | `main` |

### Topics (comma-separated, max 20)

```
effectcraft, scriptui, extendscript, panel, toolbox, animation,
motion-graphics, keyframes, easing, expressions, javascript, jsx
```

### Social preview text (Settings ▸ General ▸ Social preview)

```
Toolbox — 174 tools, 12 categories, one dockable panel for EffectCraft.
Search, icon grid, modifier shortcuts, original hand-drawn icons.
```

---

## 2. Long description (paste into README intro or the release body)

**Toolbox** is a dockable panel for EffectCraft that puts 174 everyday
motion-graphics operations one click away. Instead of digging through menus,
you get a searchable icon grid organised into twelve categories:

- **Selection** — select by type, hierarchy, index, frame or randomness
- **Layers** — trim, offset, reorder, parent, rename, label, lock, shy, duplicate
- **Keyframes** — clone, mirror, reverse, align, snap, offset, loop
- **Easing** — 27 named curves (Sine → Expo, Circ, Linear, standard presets) plus copy/paste/reverse
- **Composition** — camera rig, auto trim/crop, pre-compose, batch comp operations
- **Project** — reveal, relink, find effects, folder presets, organise, clean up
- **Guides** — show/lock/snap, add around/left/right/top/bottom/centre, grid systems, golden ratio
- **View** — visibility toggles, solo, background colours, zoom presets, screenshots
- **Expressions** — enable/disable/remove/bake, find & replace, clear errors
- **Shapes** — circle/rect wizards, grid overlay, connectors, trim paths, stroke tools
- **Text** — find & replace, split, counters, typewriter, lorem ipsum, boxes, wiggly, reveals
- **Animation Tools** — elastic, bounce, bend, delayer, auto fader, wiggle, flicker, spin, stop motion

**Highlights**

- One undo step per tool — every action is wrapped in a single undo group
- Modifier variants (Shift / Ctrl / Alt) documented in every tooltip
- Type-to-search across all 174 tools, category filter, adjustable tile size
- Original hand-drawn vector icons — no third-party artwork
- Headless test suite: 16 suites, including a sweep that runs all 174 tools

---

## 3. First release

| Field | Value |
| --- | --- |
| **Tag** | `v1.0.0` |
| **Release title** | Toolbox 1.0.0 — initial release |
| **Attach** | `Toolbox.jsx` (from the folder root or `dist/`) |

### Release notes

```markdown
## Toolbox 1.0.0

First public release of the Toolbox panel for EffectCraft.

- 174 tools across 12 categories
- Searchable icon grid with modifier-aware tooltips
- One undo step per tool
- 27 easing presets with copy / paste / reverse
- Headless test suite (all suites pass, including the 174-tool sweep)

### Install

1. Copy `Toolbox.jsx` to
   `%APPDATA%\EffectCraft\Scripts\ScriptUI Panels\`
   (or run `install.ps1`).
2. In EffectCraft open **Window ▸ Toolbox.jsx**.

### Notes

- Guide copy/paste, screenshots and project export need
  *Settings ▸ Scripting & Expressions ▸ Allow Scripts to Write Files and Access Network*.
```

---

## 4. Publishing commands

Run these inside the `Toolbox-Panel` folder.

> **Already done.** The repo is published and the `v1.0.0` release is live with
> `Toolbox.jsx` attached. The commands below are for future releases.

### Option A — push to the existing remote

```powershell
cd 'C:\Users\Abdul Ahad\Documents\Default Project\Toolbox-Panel'

git add .
git commit -m "Describe the change"
git push

# new release
git tag -a v1.0.1 -m "Toolbox 1.0.1"
git push origin v1.0.1
```

### Option B — GitHub CLI (if you install `gh`)

```powershell
gh auth login
gh release create v1.0.1 Toolbox.jsx --title "Toolbox 1.0.1" --notes-file RELEASE_NOTES.md
```

### Repository facts

```
origin   https://github.com/AbdulAhadSerfraz/Toolbox-.git
branch   main
identity Abdul Ahad <AbdulAhadSerfraz@users.noreply.github.com>  (repo-local)
```

Credentials come from Git Credential Manager (`credential.helper=manager`), so
`git push` authenticates without pasting a token.

### Updating later

```powershell
# after editing src\ and rebuilding
powershell -ExecutionPolicy Bypass -File build.ps1
git add .
git commit -m "Describe the change"
git push
```

---

## 5. Credentials — what to use and what never to commit

- **Sign-in:** Git Credential Manager is already configured and the push works
  without a token prompt. If you install `gh`, prefer `gh auth login` (browser
  flow). Never paste a personal access token into a file in this repo.
- **Git identity:** set per-repository (already done):
  `git config user.name "Abdul Ahad"` and
  `git config user.email "AbdulAhadSerfraz@users.noreply.github.com"`.
- **`.gitignore` already excludes** logs, editor folders, OS junk, `archive/`
  and `backup/`, so no local history or duplicate binaries are uploaded.
- **Never commit:** `.env`, tokens, `*.pem`, `*.key`, or anything under
  `%APPDATA%`. The panel needs no credentials at all — it is a plain `.jsx`
  file that runs inside EffectCraft.
