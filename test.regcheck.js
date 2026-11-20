var TB_HEADLESS = true;
#include "src/core.js"
#include "src/host.js"
#include "src/icons.js"
#include "src/tools/selection.js"
#include "src/tools/layers.js"
#include "src/tools/keyframes.js"
#include "src/tools/easing.js"
#include "src/tools/composition.js"
#include "src/tools/project.js"
#include "src/tools/guides.js"
#include "src/tools/view.js"
#include "src/tools/expressions.js"
#include "src/tools/shapes.js"
#include "src/tools/text.js"
#include "src/tools/animation.js"
#include "src/spec.js"

/* load spec ids */
var raw = (function(){ /* can't read file in headless easily */ return null; })();
/* Instead, hardcode count check via TB.registered */
writeLn('registered: ' + TB.registered());
var specIds = TB_SPEC.map(function(s){return s.id;});
var missing = [];
specIds.forEach(function(id){ if (!TB.get(id)) missing.push(id); });
writeLn('spec ids: ' + specIds.length);
writeLn('missing: ' + missing.join(','));
/* duplicates in spec */
var seen = {}, dups = [];
specIds.forEach(function(id){ if (seen[id]) dups.push(id); seen[id]=true; });
writeLn('duplicate spec ids: ' + dups.join(','));
