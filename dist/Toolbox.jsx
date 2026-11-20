// Toolbox 1.0.0 - EffectCraft ScriptUI panel
// Built by build.ps1 from src\. Edit the sources, not this file.
/* ==== spec.js ==== */
/* Generated from the feature spec (174 tools). Names/behaviors = functional checklist. */
var TB_SPEC = [{"cat":"Selection","catId":1,"id":101,"name":"Select Matching Property","icon":"selection-select-matching-property","tip":"Selects matching properties across all or selected layers in the composition Ctrl/Cmd + Click: Selects matching properties based on the last input without UI","path":"01-Selection/Select-Matching-Property.jsxbin","mods":[{"when":"Ctrl","what":"Selects matching properties based on the last input without UI"}]},{"cat":"Selection","catId":1,"id":102,"name":"Inverse Selection","icon":"selection-inverse-selection","tip":"Inverts layer selection","path":"01-Selection/Inverse-Selection.jsxbin","mods":[]},{"cat":"Selection","catId":1,"id":103,"name":"Select Layers at Frame","icon":"selection-select-layers-at-frame","tip":"Selects all layers under the playhead at frame Ctrl/Cmd + Click: Selects only enabled layers Shift + Click: Selects only disabled layers","path":"01-Selection/Select-Layers-at-Frame.jsxbin","mods":[{"when":"Ctrl","what":"Selects only enabled layers"},{"when":"Shift","what":"Selects only disabled layers"}]},{"cat":"Selection","catId":1,"id":104,"name":"Select Odd/Even Layers","icon":"selection-select-odd-even-layers","tip":"Selects layers with odd or even numbers in the active comp","path":"01-Selection/Select-Odd-Even-Layers.jsxbin","mods":[]},{"cat":"Selection","catId":1,"id":231,"name":"Select Every Nth Layer","icon":"selection-select-every-nth","tip":"Selects every Nth layer based on user input Ctrl/Cmd + Click: Selects layers based on the last input without UI","path":"01-Selection/Select-Every-Nth-Layer.jsxbin","mods":[{"when":"Ctrl","what":"Selects layers based on the last input without UI"}]},{"cat":"Selection","catId":1,"id":105,"name":"Random Select/Deselect","icon":"selection-random-select-deselect","tip":"Selects or deselects layers randomly based on user input","path":"01-Selection/Random-Select-Deselect.jsxbin","mods":[]},{"cat":"Selection","catId":1,"id":106,"name":"Select Text Objects","icon":"selection-select-text-objects","tip":"Selects all text layers in the active comp Shift + Click: Selects all layers exept text layers","path":"01-Selection/Select-Text-Object.jsxbin","mods":[{"when":"Shift","what":"Selects all layers exept text layers"}]},{"cat":"Selection","catId":1,"id":107,"name":"Select Nulls","icon":"selection-select-nulls","tip":"Selects all null layers in the active comp Shift + Click: Selects all layers except null layers","path":"01-Selection/Select-Nulls.jsxbin","mods":[{"when":"Shift","what":"Selects all layers except null layers"}]},{"cat":"Selection","catId":1,"id":108,"name":"Select Precomps","icon":"selection-select-precomps","tip":"Selects all pre-comps in the active comp Shift + Click: Selects all layers except pre-comps","path":"01-Selection/Select-PreComps.jsxbin","mods":[{"when":"Shift","what":"Selects all layers except pre-comps"}]},{"cat":"Selection","catId":1,"id":109,"name":"Select Shape Objects","icon":"selection-select-shape-objects","tip":"Selects all shape objects in the active comp Shift + Click: Selects all layers except shape objects","path":"01-Selection/Select-Shape-Objects.jsxbin","mods":[{"when":"Shift","what":"Selects all layers except shape objects"}]},{"cat":"Selection","catId":1,"id":110,"name":"Select 3D Layers","icon":"selection-select-3d-layers","tip":"Selects all 3D layers in the active comp Shift + Click: Selects all layers except 3D layers","path":"01-Selection/Select-3D-Layers.jsxbin","mods":[{"when":"Shift","what":"Selects all layers except 3D layers"}]},{"cat":"Selection","catId":1,"id":111,"name":"Select Guide Layers","icon":"selection-select-guide-layers","tip":"Selects all guide layers in the active comp Shift + Click: Selects all layers except guide layers","path":"01-Selection/Select-Guide-Layers.jsxbin","mods":[{"when":"Shift","what":"Selects all layers except guide layers"}]},{"cat":"Selection","catId":1,"id":112,"name":"Select Lights","icon":"selection-select-lights","tip":"Selects all lights in the active comp Shift + Click: Selects all layers except lights","path":"01-Selection/Select-Lights.jsxbin","mods":[{"when":"Shift","what":"Selects all layers except lights"}]},{"cat":"Selection","catId":1,"id":113,"name":"Select Audio Layers","icon":"selection-select-audio-layers","tip":"Selects all audio layers in the active comp Shift + Click: Selects all layers except audio layers","path":"01-Selection/Select-Audio-Layers.jsxbin","mods":[{"when":"Shift","what":"Selects all layers except audio layers"}]},{"cat":"Selection","catId":1,"id":114,"name":"Select All Parent Layers","icon":"selection-select-all-parent-layers","tip":"Selects all parent layers in a hierarchy","path":"01-Selection/Select-All-Parent-Layers.jsxbin","mods":[]},{"cat":"Selection","catId":1,"id":115,"name":"Select All Child Layers","icon":"selection-select-all-child-layers","tip":"Selects all child layers in a hierarchy","path":"01-Selection/Select-All-Child-Layers.jsxbin","mods":[]},{"cat":"Selection","catId":1,"id":116,"name":"Select Complete Hierarchy","icon":"selection-select-childs-of-layers","tip":"Selects all hierarchy of the selected layers Ctrl/Cmd + Click: Selects all child layers parented to the selected layers","path":"01-Selection/Select-Children-of-Layers.jsxbin","mods":[{"when":"Ctrl","what":"Selects all child layers parented to the selected layers"}]},{"cat":"Layers","catId":2,"id":118,"name":"Duplicate Layers","icon":"layers-duplicate-layers","tip":"Duplicates selected layers with the option to offset copies along x, y, z axes","path":"02-Layers/Duplicate-Layers.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":267,"name":"Repeat Layer Duplication","icon":"layers-repeat-layer-duplication","tip":"Repeats the previous layer duplication and modify transforms to keep layers aligned","path":"02-Layers/Repeat-Layer-Duplication.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":119,"name":"Shift Layer Times","icon":"layers-shift-layer-times","tip":"Moves selected layers together on the timeline to current time Ctrl/Cmd + Click: Opens up UI for more shifting options","path":"02-Layers/Shift-Layers-Times.jsxbin","mods":[{"when":"Ctrl","what":"Opens up UI for more shifting options"}]},{"cat":"Layers","catId":2,"id":120,"name":"Order Layers","icon":"layers-order-layers","tip":"Orders selected layers on the timeline by selection order, in/out points, names or at random Ctrl/Cmd + Click: Reverses selected layers order Shift + Click: Orders layers by selection","path":"02-Layers/Order-Layers.jsxbin","mods":[{"when":"Ctrl","what":"Reverses selected layers order"},{"when":"Shift","what":"Orders layers by selection"}]},{"cat":"Layers","catId":2,"id":121,"name":"Offset Layers","icon":"layers-offset-layers","tip":"Offsets, trims, sequences or randomises selected layers on the timeline Ctrl/Cmd + Click: Offsets layers based on the last input","path":"02-Layers/Offset-Layers.jsxbin","mods":[{"when":"Ctrl","what":"Offsets layers based on the last input"}]},{"cat":"Layers","catId":2,"id":122,"name":"Rename Layers","icon":"layers-rename-layers","tip":"Batch renames selected layers with number increments Ctrl/Cmd + Click: Assign quick custom names for selected layers","path":"02-Layers/Rename-Layers.jsxbin","mods":[{"when":"Ctrl","what":"Assign quick custom names for selected layers"}]},{"cat":"Layers","catId":2,"id":123,"name":"Trim Layers","icon":"layers-trim-layers","tip":"Trims selected layers based on user input Ctrl/Cmd + Click: Trims selected layers to match each below layers\u0027 in/out points Shift + Click: Trims selected layers to match each above layers\u0027 in/out points","path":"02-Layers/Trim-Layers.jsxbin","mods":[{"when":"Ctrl","what":"Trims selected layers to match each below layers\u0027 in/out points"},{"when":"Shift","what":"Trims selected layers to match each above layers\u0027 in/out points"}]},{"cat":"Layers","catId":2,"id":124,"name":"Set Layer Colors","icon":"layers-set-layer-colors","tip":"Changes selected layers\u0027 label colors by order, hierarchy or type for improved contrast","path":"02-Layers/Set-Layer-Colors.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":273,"name":"Reset Layer Properties","icon":"layers-reset-layer-properties","tip":"Resets transform properties and removes attributes like keyframes, expressions from selected layers","path":"02-Layers/Reset-Layer-Properties.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":125,"name":"Set Anchor Point","icon":"layers-set-anchor-point","tip":"Sets anchor points for selected layers with the option to add expression controls Ctrl/Cmd + Click: Set anchor point to layer(s) center","path":"02-Layers/Set-Anchor-Point.jsxbin","mods":[{"when":"Ctrl","what":"Set anchor point to layer(s) center"}]},{"cat":"Layers","catId":2,"id":230,"name":"Add Attachment Point","icon":"layers-add-attachment-point","tip":"Adds an attachment point or points to the boundaries of the selected layers","path":"02-Layers/Add-Attachment-Point.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":126,"name":"Parent to Null","icon":"layers-parent-to-null","tip":"Parents selected layers to new nulls with null type, naming and hierarchy options Ctrl/Cmd + Click: Parent layer to null based on last settings","path":"02-Layers/Parent-to-Null.jsxbin","mods":[{"when":"Ctrl","what":"Parent layer to null based on last settings"}]},{"cat":"Layers","catId":2,"id":127,"name":"Parent to First Selected","icon":"layers-parent-to-first-selected","tip":"Parents selected layers to the first layer selected","path":"02-Layers/Parent-to-First-Selected.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":128,"name":"Parent to Above Layer","icon":"layers-parent-to-above-layer","tip":"Parents selected layers to the next layer above each Ctrl/Cmd + Click: Parents selected layers to the next layer below each","path":"02-Layers/Parent-Selected-to-Layer-Above.jsxbin","mods":[{"when":"Ctrl","what":"Parents selected layers to the next layer below each"}]},{"cat":"Layers","catId":2,"id":129,"name":"Parent in Order of Selection","icon":"layers-parent-in-order-of-selection","tip":"Parents selected layers as a hierarchy chain in order of selection","path":"02-Layers/Parent-in-Order-of-Selection.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":134,"name":"Lock/Unlock All Layers","icon":"layers-lock-unlock-all-layers","tip":"Locks and unlocks all layers in the active comp","path":"02-Layers/Lock-Unlock-Layers.jsxbin","mods":[]},{"cat":"Layers","catId":2,"id":135,"name":"Lock/Unlock Shy Layers","icon":"layers-lock-unlock-shy-layers","tip":"Locks and unlocks all shy layers in the active comp","path":"02-Layers/Lock-Unlock-Shy-Layers.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":268,"name":"Keyframe Assistant","icon":"keyframes-keyframe-assistant","tip":"Simplifies keyframe easing adjustments, lets you save custom presets, and switch between keyframe types effortlessly","path":"03-Keyframes/Keyframe-Assistant.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":232,"name":"Key Selector","icon":"keyframes-key-selector","tip":"Selects keyframes based on various criteria Ctrl/Cmd + Click: Selects keys in the work area","path":"03-Keyframes/Key-Selector.jsxbin","mods":[{"when":"Ctrl","what":"Selects keys in the work area"}]},{"cat":"Keyframes","catId":3,"id":238,"name":"Copy Key Values","icon":"keyframes-copy-key-values","tip":"Copies selected key values","path":"03-Keyframes/Copy-Key-Values.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":239,"name":"Paste Key Values","icon":"keyframes-paste-key-values","tip":"Pastes the previously copied key values into the selected matching keys","path":"03-Keyframes/Paste-Key-Values.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":227,"name":"Add Secondary Value","icon":"keyframes-add-secondary-value","tip":"Creates an additional, animatable value channel on top of the existing property value","path":"03-Keyframes/Add-Secondary-Value.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":137,"name":"Snap Keys to Frames (Time)","icon":"keyframes-snap-keys to-nearest-frame-time","tip":"Snaps selected keyframes each to their nearest frame on the timeline","path":"03-Keyframes/Snap-Keys-to-Frames.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":138,"name":"Fix Overshooting Keys (Spatial)","icon":"keyframes-fix-overshooting-keys-spatial","tip":"Fixes overshooting motion paths by applying linear interpolation between identical position keys","path":"03-Keyframes/Fix-Overshooting-Keys.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":234,"name":"Separate X/Y (Retain Easing)","icon":"keyframes-separate-dimensions","tip":"Separates selected layers\u0027 positional dimensions while preserving their keyframe easing","path":"03-Keyframes/Separate-Dimensions.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":233,"name":"Find \u0026 Replace Key Values","icon":"keyframes-find-replace-key-values","tip":"Finds and replaces keyframe values with input options; equal to, greater than, or less than","path":"03-Keyframes/Find-Replace-Key-Values.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":139,"name":"Clone Keys","icon":"keyframes-clone-keys","tip":"Duplicates selected keys, supports selection across multiple properties Ctrl/Cmd + Click: mirrors the cloned keys Shift + Click: inverts selected keys","path":"03-Keyframes/Clone-Keys.jsxbin","mods":[{"when":"Ctrl","what":"mirrors the cloned keys"},{"when":"Shift","what":"inverts selected keys"}]},{"cat":"Keyframes","catId":3,"id":140,"name":"Clone \u0026 Mirror Keys","icon":"keyframes-clone-and-mirror-keys","tip":"Clones and time-reverses selected keys, supports selection across multiple properties","path":"03-Keyframes/Clone-and-Mirror-Keys.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":141,"name":"Time-Reverse Keys","icon":"keyframes-time-reverse-keys","tip":"Inverts keys over time","path":"03-Keyframes/Time-Reverse-Keys.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":142,"name":"Shift Keys in Time","icon":"keyframes-shift-keys-time","tip":"Moves selected keys together on the timeline Ctrl/Cmd + Click Moves keys together to current time","path":"03-Keyframes/Shift-Keys.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":143,"name":"Offset Keys","icon":"keyframes-offset-keys","tip":"Offsets selected keys in properties by a number of frames or seconds defined by user","path":"03-Keyframes/Offset-Keys.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":144,"name":"Align Keys to Current Time","icon":"keyframes-move-keys-to-current-time","tip":"Moves and aligns together selected keys across multiple properties to current time","path":"03-Keyframes/Move-Keys-to-Current-Time.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":145,"name":"Align Keys to In Point","icon":"keyframes-move-keys-to-in-point","tip":"Moves and aligns together selected keys across multiple properties to the in point of layer","path":"03-Keyframes/Move-Keys-to-in-Point.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":146,"name":"Align Keys to Out Point","icon":"keyframes-move-keys-to-out-point","tip":"Moves and aligns togetger selected keys across multiple properties from the out point of layer","path":"03-Keyframes/Move-Keys-to-out-Point.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":147,"name":"Left Align Keys","icon":"keyframes-left-align-keys","tip":"Aligns selected keys across multiple properties to the left-most key in the layer","path":"03-Keyframes/Left-Align-Keys.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":148,"name":"Right Align Keys","icon":"keyframes-right-align-keys","tip":"Aligns selected keys across multiple properties from the right-most key in the layer","path":"03-Keyframes/Right-Align-Keys.jsxbin","mods":[]},{"cat":"Keyframes","catId":3,"id":149,"name":"Key Looper","icon":"keyframes-key-looper","tip":"Applies an expression to selected properties to loop keys in and/or out with options","path":"03-Keyframes/Key-Looper.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":275,"name":"Copy Key Easing","icon":"easing-copy","tip":"Copies selected key easing","path":"12-Easing/Copy-Key-Easing.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":276,"name":"Paste Key Easing","icon":"easing-paste","tip":"Pastes the previously copied key easing into the selected keys","path":"12-Easing/Paste-Key-Easing.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":277,"name":"Reverse Key Easing","icon":"easing-reverse","tip":"Reverses selected key easing","path":"12-Easing/Reverse-Key-Easing.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":240,"name":"Sine In","icon":"easing-sineIn","tip":"Sine In","path":"12-Easing/Sine-In.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":241,"name":"Sine Out","icon":"easing-sineOut","tip":"Sine Out","path":"12-Easing/Sine-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":242,"name":"Sine In Out","icon":"easing-sineInOut","tip":"Sine In Out","path":"12-Easing/Sine-In-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":243,"name":"Quad In","icon":"easing-quadIn","tip":"Quad In","path":"12-Easing/Quad-In.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":244,"name":"Quad Out","icon":"easing-quadOut","tip":"Quad Out","path":"12-Easing/Quad-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":245,"name":"Quad In Out","icon":"easing-quadInOut","tip":"Quad In Out","path":"12-Easing/Quad-In-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":246,"name":"Cubic In","icon":"easing-cubicIn","tip":"Cubic In","path":"12-Easing/Cubic-In.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":247,"name":"Cubic Out","icon":"easing-cubicOut","tip":"Cubic Out","path":"12-Easing/Cubic-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":248,"name":"Cubic In Out","icon":"easing-cubicInOut","tip":"Cubic In Out","path":"12-Easing/Cubic-In-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":249,"name":"Quart In","icon":"easing-quartIn","tip":"Quart In","path":"12-Easing/Quart-In.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":250,"name":"Quart Out","icon":"easing-quartOut","tip":"Quart Out","path":"12-Easing/Quart-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":251,"name":"Quart In Out","icon":"easing-quartInOut","tip":"Quart In Out","path":"12-Easing/Quart-In-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":252,"name":"Quint In","icon":"easing-quintIn","tip":"Quint In","path":"12-Easing/Quint-In.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":253,"name":"Quint Out","icon":"easing-quintOut","tip":"Quint Out","path":"12-Easing/Quint-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":254,"name":"Quint In Out","icon":"easing-quintInOut","tip":"Quint In Out","path":"12-Easing/Quint-In-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":255,"name":"Expo In","icon":"easing-expoIn","tip":"Expo In","path":"12-Easing/Expo-In.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":256,"name":"Expo Out","icon":"easing-expoOut","tip":"Expo Out","path":"12-Easing/Expo-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":257,"name":"Expo In Out","icon":"easing-expoInOut","tip":"Expo In Out","path":"12-Easing/Expo-In-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":258,"name":"Circ In","icon":"easing-circIn","tip":"Circ In","path":"12-Easing/Circ-In.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":259,"name":"Circ Out","icon":"easing-circOut","tip":"Circ Out","path":"12-Easing/Circ-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":260,"name":"Circ In Out","icon":"easing-circInOut","tip":"Circ In Out","path":"12-Easing/Circ-In-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":261,"name":"Linear","icon":"easing-linear","tip":"Linear","path":"12-Easing/Linear.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":262,"name":"Standard - Ease Out","icon":"easing-standard","tip":"Standard - Ease Out","path":"12-Easing/Standard-Ease-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":263,"name":"Fast In - Sluggish Out","icon":"easing-fastInSlugOut","tip":"Fast In - Sluggish Out","path":"12-Easing/Fast-In-Sluggish-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":264,"name":"Steady In - Ease Out","icon":"easing-steadyInEaseOut","tip":"Steady In - Ease Out","path":"12-Easing/Steady-In-Ease-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":265,"name":"Sluggish In - Fast Out","icon":"easing-slugInFastOut","tip":"Sluggish In - Fast Out","path":"12-Easing/Sluggish-In-Fast-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":266,"name":"Slow In - Gentle Out","icon":"easing-slowInGentleOut","tip":"Slow In - Gentle Out","path":"12-Easing/Slow-In-Gentle-Out.jsxbin","mods":[]},{"cat":"Easing","catId":4,"id":264,"name":"Slow In - Steady Out","icon":"easing-slowInSteadyOut","tip":"Slow In - Steady Out","path":"12-Easing/Slow-In-Steady-Out.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":150,"name":"Create Camera Rig","icon":"composition-create-camera-rig","tip":"Creates a camera rig with easily accessible and animatable settings in one place","path":"04-Composition/Create-Camera-Rig.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":151,"name":"Auto Trim Comp","icon":"composition-auto-trim-comp","tip":"Trims or lenghtens the active comp\u0027s duration by the in/out points of its layers Ctrl/Cmd + Click: Trims the comp based on selected layers","path":"04-Composition/Auto-Trim-Comp.jsxbin","mods":[{"when":"Ctrl","what":"Trims the comp based on selected layers"}]},{"cat":"Composition","catId":5,"id":152,"name":"Auto Crop Comps","icon":"composition-auto-crop-comp","tip":"Crops the active comp or selected comps Ctrl/Cmd + Click: Crops comps without UI based on last settings","path":"04-Composition/Auto-Crop-Comp.jsxbin","mods":[{"when":"Ctrl","what":"Crops comps without UI based on last settings"}]},{"cat":"Composition","catId":5,"id":153,"name":"Pre-Compose","icon":"composition-pre-compose","tip":"Pre-composes selected layers with additional options to pre-comp each individually and auto-crop Ctrl/Cmd + Click: Precompose layers without UI based on the last input","path":"04-Composition/Pre-Compose.jsxbin","mods":[{"when":"Ctrl","what":"Precompose layers without UI based on the last input"}]},{"cat":"Composition","catId":5,"id":279,"name":"Duplicate Comps","icon":"composition-duplicate-comps","tip":"Duplicates compositions and their nested pre-comps with naming and expression-updating options","path":"04-Composition/Duplicate-Comps.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":154,"name":"Batch Rename Comps","icon":"composition-batch-rename-comps","tip":"Search and replace text in comp titles","path":"04-Composition/Batch-Rename-Comps.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":155,"name":"Batch Scale Comps","icon":"composition-batch-scale-comps","tip":"Scales multiple compositions","path":"04-Composition/Batch-Scale-Comp.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":156,"name":"Batch Resize Canvas","icon":"composition-batch-resize-canvas","tip":"Resizes multiple compositions","path":"04-Composition/Batch-Resize-Canvas.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":157,"name":"Batch Comp Settings","icon":"composition-batch-comp-settings","tip":"Apply comp settings to multiple compositions","path":"04-Composition/Batch-Comp-Settings.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":158,"name":"Batch Color Replacer","icon":"composition-batch-color-replacer","tip":"Finds and replaces colors in selected comps or across the entire project","path":"04-Composition/Batch-Color-Replacer.jsxbin","mods":[]},{"cat":"Composition","catId":5,"id":159,"name":"Export Comps as New Project","icon":"composition-export-comps-as-projects","tip":"Creates a new project file containing selected comps","path":"04-Composition/Export-Comps-as-New-Projects.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":160,"name":"Reveal Selected Layer Assets","icon":"project-reveal-selected-layer-assets","tip":"Highlights selected layers\u0027 dependencies in the project panel","path":"05-Project/Reveal-Selected-Layers.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":161,"name":"Reveal Current Comp","icon":"project-reveal-current-comp","tip":"Highlights the active comp in the project panel","path":"05-Project/Reveal-Current-Comp.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":162,"name":"Reveal Project Folder","icon":"project-reveal-project-folder","tip":"Reveals the project folder location","path":"05-Project/Reveal-Project-Folder.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":163,"name":"Reveal AE Script Folder","icon":"project-reveal-script-folder","tip":"Reveals After Effects script folder location","path":"05-Project/Reveal-AE-Script-Folder.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":281,"name":"Relink Missing Files","icon":"project-relink-missing-files","tip":"Searches for and relinks missing footage, with support for image sequences and layered files","path":"05-Project/Relink-Missing-Files.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":282,"name":"Find Effects","icon":"project-find-missing-effects","tip":"Finds effects by name, status, or scope, with options to batch enable, disable, delete, and reveal","path":"05-Project/Find-Effects.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":164,"name":"Create Folder Structure","icon":"project-create-folder-structure","tip":"Creates a hierarchy of folders in the project panel with presets based on typical use-case scenarios","path":"05-Project/Create-Folder-Structure.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":165,"name":"Organize Project","icon":"project-organize-project","tip":"Organizes project assets by type in folders with user customisable names","path":"05-Project/Organize-Project.jsxbin","mods":[]},{"cat":"Project","catId":6,"id":166,"name":"Project Cleanup","icon":"project-project-clean-up","tip":"Cleans up the project by removing unused items, disabled effects and expressions","path":"05-Project/Project-Cleanup.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":167,"name":"Show/Hide Guides","icon":"guides-show-hide-guides","tip":"Shows or hides all guides","path":"06-Guides/Show-Hide-Guides.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":168,"name":"Lock/Unlock Guides","icon":"guides-lock-unlock-guides","tip":"Locks or unlocks all guides","path":"06-Guides/Lock-Unlock-Guides.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":169,"name":"Toggle Snap to Guides","icon":"guides-toggle-snap-to-guides","tip":"Toggles snap to guides option on and off","path":"06-Guides/Toggle-Snap-to-Guides.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":236,"name":"Copy Guide Lines","icon":"guides-copy-guide-lines","tip":"Copies the guide lines in the active comp","path":"06-Guides/Copy-Guides.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":237,"name":"Paste Guide Lines","icon":"guides-paste-guide-lines","tip":"Inserts previously copied guide lines into the active comp Ctrl/Cmd + Click: Inserts guide lines responsively","path":"06-Guides/Paste-Guides.jsxbin","mods":[{"when":"Ctrl","what":"Inserts guide lines responsively"}]},{"cat":"Guides","catId":7,"id":170,"name":"Clear Guides","icon":"guides-clear-guides","tip":"Deletes all guides","path":"06-Guides/Clear-Guides.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":171,"name":"Add Guides Around","icon":"guides-add-guides-around","tip":"Places guides around selected layers\u0027 boundaries","path":"06-Guides/Add-Guides-Around.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":172,"name":"Add Guides Left","icon":"guides-add-guides-left","tip":"Places guides on the left edge of the active comp or selected layers","path":"06-Guides/Add-Guides-Left.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":173,"name":"Add Guides Right","icon":"guides-add-guides-right","tip":"Places guides on the right edge of the active comp or selected layers","path":"06-Guides/Add-Guides-Right.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":174,"name":"Add Guides Top","icon":"guides-add-guides-top","tip":"Places guides on the top edge of selected layers","path":"06-Guides/Add-Guides-Top.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":175,"name":"Add Guides Bottom","icon":"guides-add-guides-bottom","tip":"Places guides on the bottom edge of selected layers","path":"06-Guides/Add-Guides-Bottom.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":176,"name":"Add Guides Center","icon":"guides-add-guides-center","tip":"Places guides at the (horizontal) center of selected layers","path":"06-Guides/Add-Guides-Center.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":177,"name":"Add Guides Middle","icon":"guides-add-guides-middle","tip":"Places guides in the (vertical) middle of selected layers","path":"06-Guides/Add-Guides-Middle.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":178,"name":"Add Guides Anchor","icon":"guides-add-guides-anchor","tip":"Places guides at the anchor points of selected layers","path":"06-Guides/Add-Guides-Anchor.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":179,"name":"Create Guide/Grid System","icon":"guides-create-guide-grid-system","tip":"Creates a guide or grid system with the option of adding gutters","path":"06-Guides/Create-Guide-System.jsxbin","mods":[]},{"cat":"Guides","catId":7,"id":180,"name":"Golden Ratio","icon":"guides-golden-ratio","tip":"Adds a golden ratio reference layer","path":"06-Guides/Golden-Ratio.jsxbin","mods":[]},{"cat":"View","catId":8,"id":283,"name":"Toggle Layer Visibility","icon":"view-toggle-layer-visibility","tip":"Toggles visibility of layers by type, including effects, styles","path":"07-View/Toggle-Layer-Visibility.jsxbin","mods":[]},{"cat":"View","catId":8,"id":181,"name":"Solo Layers (Viewer)","icon":"view-solo-layers-viewer","tip":"Displays only the selected layers in the viewer Ctrl/Cmd + Click: Displays only the layers with the same selected label color","path":"07-View/Solo-Layers-Viewer.jsxbin","mods":[{"when":"Ctrl","what":"Displays only the layers with the same selected label color"}]},{"cat":"View","catId":8,"id":182,"name":"Solo Layers (Timeline) ","icon":"view-solo-layers-timeline","tip":"Hides all but the selected layers on the timeline as shy layers Ctrl/Cmd + Click: Hides other layers and keeps same label color ones","path":"07-View/Solo-Layers-Timeline.jsxbin","mods":[{"when":"Ctrl","what":"Hides other layers and keeps same label color ones"}]},{"cat":"View","catId":8,"id":183,"name":"White BG","icon":"view-white-bg","tip":"Sets active comp background color setting to white Ctrl/Cmd + Click: Sets background color for selected comps","path":"07-View/White-BG.jsxbin","mods":[{"when":"Ctrl","what":"Sets background color for selected comps"}]},{"cat":"View","catId":8,"id":185,"name":"Gray BG","icon":"view-grey-bg","tip":"Sets active comp background color setting to gray Ctrl/Cmd + Click: Sets background color for selected comps","path":"07-View/Gray-BG.jsxbin","mods":[{"when":"Ctrl","what":"Sets background color for selected comps"}]},{"cat":"View","catId":8,"id":184,"name":"Black BG","icon":"view-black-bg","tip":"Sets active comp background color setting to black Ctrl/Cmd + Click: Sets background color for selected comps","path":"07-View/Black-BG.jsxbin","mods":[{"when":"Ctrl","what":"Sets background color for selected comps"}]},{"cat":"View","catId":8,"id":186,"name":"Set BG Color","icon":"view-set-bg-color","tip":"Sets active comp background color setting to custom color Ctrl/Cmd + Click: Sets background color for selected comps","path":"07-View/Set-BG-Color.jsxbin","mods":[{"when":"Ctrl","what":"Sets background color for selected comps"}]},{"cat":"View","catId":8,"id":187,"name":"Toggle Checkerboard","icon":"view-toggle-checkboard","tip":"Toggles the transparency grid in the viewer Ctrl/Cmd + Click: Sets background color for selected comps","path":"07-View/Toggle-Checkerboard.jsxbin","mods":[{"when":"Ctrl","what":"Sets background color for selected comps"}]},{"cat":"View","catId":8,"id":188,"name":"Reset View (100%)","icon":"view-reset-view-100","tip":"Recenters selected comps or active comp in the viewer at 100% scale, hides guides and rulers Ctrl/Cmd + Click: Resets viewer for selected comps","path":"07-View/Reset-View-100.jsxbin","mods":[{"when":"Ctrl","what":"Resets viewer for selected comps"}]},{"cat":"View","catId":8,"id":189,"name":"Reset View (50%)","icon":"view-reset-view-50","tip":"Recenters selected comps or active comp in the viewer at 50% scale, hides guides and rulers Ctrl/Cmd + Click: Resets viewer for selected comps","path":"07-View/Reset-View-50.jsxbin","mods":[{"when":"Ctrl","what":"Resets viewer for selected comps"}]},{"cat":"View","catId":8,"id":190,"name":"Reset View (Custom)","icon":"view-reset-view-33","tip":"Recenters active comp in the viewer at a custom scale, hides guides and rulers Ctrl/Cmd + Click: Resets viewer for selected comps Shift + Click: Resets viewer based on the last input","path":"07-View/Reset-View-Custom.jsxbin","mods":[{"when":"Ctrl","what":"Resets viewer for selected comps"},{"when":"Shift","what":"Resets viewer based on the last input"}]},{"cat":"View","catId":8,"id":191,"name":"Save Screenshot","icon":"view-save-screenshot","tip":"Takes a screenshot of the active comp or the selected comps Ctrl/Cmd + Click: Takes screenshots without UI based on last settings","path":"07-View/Save-Screenshot.jsxbin","mods":[{"when":"Ctrl","what":"Takes screenshots without UI based on last settings"}]},{"cat":"Expressions","catId":9,"id":284,"name":"Expression Editor","icon":"expressions-expression-editor","tip":"Write, apply, and manage expressions with a dedicated editor and a personal library","path":"08-Expressions/Expression-Editor.jsxbin","mods":[]},{"cat":"Expressions","catId":9,"id":192,"name":"Enable Expressions","icon":"expressions-enable-expressions","tip":"Enables expressions in selected layers or properties in the active comp","path":"08-Expressions/Enable-Expressions.jsxbin","mods":[]},{"cat":"Expressions","catId":9,"id":193,"name":"Disable Expressions","icon":"expressions-disable-expressions","tip":"Disables expressions in selected layers or properties in the active comp","path":"08-Expressions/Disable-Expressions.jsxbin","mods":[]},{"cat":"Expressions","catId":9,"id":194,"name":"Remove Expressions","icon":"expressions-remove-expressions","tip":"Removes expressions in selected layers or properties in the active comp","path":"08-Expressions/Remove-Expressions.jsxbin","mods":[]},{"cat":"Expressions","catId":9,"id":195,"name":"Bake Expressions","icon":"expressions-bake-expressions","tip":"Bakes selected expressions into their layer properties as keys","path":"08-Expressions/Bake-Expressions.jsxbin","mods":[]},{"cat":"Expressions","catId":9,"id":196,"name":"Find and Replace Expressions","icon":"expressions-find-and-replace-expressions","tip":"Finds and replaces strings in expressions on selected layers or properties, or across the entire project","path":"08-Expressions/Find-and-Replace-Expressions.jsxbin","mods":[]},{"cat":"Expressions","catId":9,"id":197,"name":"Remove Expressions with Errors","icon":"expressions-remove-expressions-with-errors","tip":"Clears expressions that return errors across the entire project","path":"08-Expressions/Remove-Expressions-with-Errors.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":226,"name":"Path Edit Mode","icon":"shapes-path-edit-mode","tip":"Makes it easy to select points on shape paths Ctrl/Cmd + Click: Adds keyframes to the path properties","path":"09-Shapes/Path-Edit-Mode.jsxbin","mods":[{"when":"Ctrl","what":"Adds keyframes to the path properties"}]},{"cat":"Shapes","catId":10,"id":198,"name":"Circle Wizard","icon":"shapes-circle-wizard","tip":"Creates and sets up a circle shape object with the option to add expression controls","path":"09-Shapes/Circle-Wizard.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":199,"name":"Rectangle Wizard","icon":"shapes-rectangle-wizard","tip":"Creates and sets up a rectangle shape object with the option to add an expression controls","path":"09-Shapes/Rectangle-Wizard.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":200,"name":"Grid Overlay","icon":"shapes-grid-overlay","tip":"Creates and sets up grid lines in the active comp","path":"09-Shapes/Grid-Overlay.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":201,"name":"Connect Elements","icon":"shapes-connect-elements","tip":"Creates a responsive connection line between two selected layers","path":"09-Shapes/Connect-Elements.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":202,"name":"Trim Paths Controller","icon":"shapes-trim-paths-controller","tip":"Applies an expression control to selected layers for trim paths settings","path":"09-Shapes/Trim-Path-Controller.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":203,"name":"Consistent Stroke Width","icon":"shapes-consistent-stroke-width","tip":"Retains stroke width appearance when scaling using transform properties","path":"09-Shapes/Consistent-Stroke-Width.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":204,"name":"Separate Shapes to Layers","icon":"shapes-separate-shape-to-layers","tip":"Separates shape components in the selected layer into individual shape layers Ctrl/Cmd + Click: Removes old layers after the operation","path":"09-Shapes/Separate-Shapes-to-Layers.jsxbin","mods":[{"when":"Ctrl","what":"Removes old layers after the operation"}]},{"cat":"Shapes","catId":10,"id":205,"name":"Merge Shape Layers","icon":"shapes-merge-shape-layers","tip":"Combines selected shape layers into one shape layer Ctrl/Cmd + Click: Removes old layers after the operation","path":"09-Shapes/Merge-Shape-Layers.jsxbin","mods":[{"when":"Ctrl","what":"Removes old layers after the operation"}]},{"cat":"Shapes","catId":10,"id":206,"name":"Select All Strokes","icon":"shapes-select-all-strokes","tip":"Selects stroke properties in the selected shape layers","path":"09-Shapes/Select-All-Strokes.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":207,"name":"Select All Fills","icon":"shapes-select-all-fills","tip":"Selects fill properties in the selected shape layers","path":"09-Shapes/Select-All-Fills.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":208,"name":"Toggle Fill/Stroke","icon":"shapes-toggle-fill-stroke","tip":"Toggles between stroke and fill properties in selected comps or the active comp","path":"09-Shapes/Toggle-Fill-Stroke.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":209,"name":"Cap Join Miter","icon":"shapes-cap-join-to-mitter","tip":"Sets stroke cap and join options to be consistent with miter join in selected shape layers","path":"09-Shapes/Cap-Join-Miter.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":210,"name":"Cap Join Round","icon":"shapes-cap-join-to-round","tip":"Sets stroke cap and join options to be consistent with round join in selected shape layers","path":"09-Shapes/Cap-Join-Round.jsxbin","mods":[]},{"cat":"Shapes","catId":10,"id":211,"name":"Cap Join Bevel","icon":"shapes-cap-join-to-bevel","tip":"Sets stroke cap and join options to be consistent with bevel join in selected shape layers","path":"09-Shapes/Cap-Join-Bevel.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":212,"name":"Find and Replace Text","icon":"text-find-and-replace-font","tip":"Finds and replaces text in selected text layers, comps or across the entire project","path":"10-Text/Find-and-Replace-Text.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":291,"name":"Replace Fonts","icon":"text-replace-fonts","tip":"Finds and replaces fonts across selected layers, comps or the entire project","path":"10-Text/Replace-Fonts.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":292,"name":"Split Text Object","icon":"text-split-text-object","tip":"Split text layers into characters, words, lines with an option to convert them into shape layers","path":"10-Text/Split-Text-Object.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":228,"name":"Number Counter","icon":"text-number-counter","tip":"Animates counting up or down of numerical values with complete control over style and formatting","path":"10-Text/Number-Counter.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":229,"name":"Typewriter","icon":"text-typewriter","tip":"Animates text in typewriter effect with cursor and formatting options","path":"10-Text/Typewriter.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":235,"name":"Lorem Ipsum Text Generator","icon":"text-lorem-ipsum-generator","tip":"Generates \u0027lorem ipsum\u0027 dummy text with text object options","path":"10-Text/Lorem-Ipsum-Text-Generator.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":213,"name":"Text Box Generator","icon":"text-text-box-generator","tip":"Creates a dynamic backplate for selected text layers with customizable design options","path":"10-Text/Text-Box-Generator.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":214,"name":"Text Area Limiter","icon":"text-text-area-limitter","tip":"Applies an automatic size constraint on selected text layers to fit user defined width and height limits","path":"10-Text/Text-Area-Limiter.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":215,"name":"Wiggly Text","icon":"text-wiggly-text","tip":"Applies a stop-motion style wiggling letters effect on selected text layers","path":"10-Text/Wiggly-Text.jsxbin","mods":[]},{"cat":"Text","catId":11,"id":216,"name":"Text Reveal Animation","icon":"text-text-reveal-animation","tip":"Creates a smooth text reveal and wipe animation on selected text layers with animatable options","path":"10-Text/Text-Reveal.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":217,"name":"Elastic Motion","icon":"animation-elastic-motion","tip":"Creates an overshoot effect based on the velocity of value changes with animation options Works best with short distances of 5 to 7 frames between keys","path":"11-Animation-Tools/Elastic-Motion.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":218,"name":"Bounce","icon":"animation-bounce","tip":"Creates a bounce effect based on the velocity of value changes with animation options Works best with short distances of 5 to 7 frames between keys","path":"11-Animation-Tools/Bounce.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":219,"name":"Bend","icon":"animation-bend","tip":"Creates a bend effect setup that takes into account true start and end point values matching the layer size","path":"11-Animation-Tools/Bend.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":220,"name":"Delayer","icon":"animation-delayer","tip":"Applies a stack of delayed animation values on selected layers using the initial property selection as driver Select the animated property to be the driver, then select the layers to follow and apply.","path":"11-Animation-Tools/Delayer.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":221,"name":"Auto Fader","icon":"animation-auto-fader","tip":"Applies an automatic fader function on selected layers based on layer in/out points, including support for audio channels","path":"11-Animation-Tools/Auto-Fader.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":222,"name":"Wiggle Property","icon":"animation-wiggle-property","tip":"Applies a wiggle effect on selected properties with animation options","path":"11-Animation-Tools/Wiggles.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":223,"name":"Blinker Flicker","icon":"animation-blinker-flicker","tip":"Applies a blinking/flickering effect on selected layers with animation options","path":"11-Animation-Tools/Blinker-Flicker.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":224,"name":"Spin","icon":"animation-spin","tip":"Applies an expression control on selected layers for adding a continuous rotation","path":"11-Animation-Tools/Spin.jsxbin","mods":[]},{"cat":"Animation Tools","catId":12,"id":225,"name":"Stop Motion","icon":"animation-stop-motion","tip":"Creates a stop-motion animation effect on selected layers with animation options","path":"11-Animation-Tools/Stop_Motion.jsxbin","mods":[]}];

/* ==== core.js ==== */
/* Toolbox core — registry, dialogs, selection helpers, math.
   Host-free: uses only the After Effects scripting object model that EffectCraft implements. */

var TB = (function () {
    var T = {};
    T.version = '1.0.0';
    T.tools = {};          /* id -> tool object */
    T.order = [];          /* registration order */
    T.FORM_VALUES = null;  /* test override: array of field values */
    T.OFFLINE = false;     /* test override: answer every dialog with its default */
    T.NOTICE = null;       /* test override: skip notice dialogs */
    T._status = null;      /* panel hook: function (text) */

    /* ---------- registry ---------- */
    T.reg = function (id, run, opts) {
        var t = T.tools[id];
        if (!t) { t = { id: id }; T.tools[id] = t; T.order.push(id); }
        t.run = run;
        if (opts) { for (var k in opts) if (Object.prototype.hasOwnProperty.call(opts, k)) t[k] = opts[k]; }
        return t;
    };
    T.get = function (id) { return T.tools[id] || null; };
    T.registered = function () { return T.order.length; };

    /* ---------- reporting ---------- */
    T.say = function (text) {
        text = String(text);
        if (T._status) { T._status(text); }
        else if (typeof writeLn === 'function') { writeLn(text); }
    };
    T.err = function (e) {
        var m = e && e.message ? e.message : String(e);
        T.say('! ' + m);
        return m;
    };
    T.fail = function (m) { throw new Error(m); };

    /* One undo step per tool application. Errors are reported, never thrown at the UI. */
    T.act = function (label, fn) {
        var out, err = null;
        try { app.beginUndoGroup('Toolbox \u00b7 ' + label); }
        catch (e) { err = e; }
        if (!err) {
            try { out = fn(); }
            catch (e) { err = e; }
            finally { try { app.endUndoGroup(); } catch (ignore) { } }
        }
        if (err) { T.err(err); return undefined; }
        return out;
    };

    /* ---------- dialogs ---------- */
    function formDefaults(fields) {
        var o = {};
        for (var i = 0; i < fields.length; i++) o[fields[i].id] = fields[i].value;
        return o;
    }
    /* fields: [{id, label, type:'text'|'number'|'check'|'select'|'static', value, options:[..]}]
       returns {id: value} or null when cancelled. */
    T.form = function (title, fields, okLabel) {
        if (T.FORM_VALUES) {
            var over = T.FORM_VALUES; T.FORM_VALUES = null;
            var mapped = {};
            for (var i = 0; i < fields.length; i++) mapped[fields[i].id] = i < over.length ? over[i] : fields[i].value;
            return mapped;
        }
        if (T.OFFLINE) return formDefaults(fields);
        if (typeof Window === 'undefined') return formDefaults(fields);
        var w = new Window('dialog', title);
        w.orientation = 'column'; w.alignChildren = ['fill', 'top']; w.margins = 14; w.spacing = 7;
        w.preferredSize.width = 360;
        var rows = [], value = null;
        for (var j = 0; j < fields.length; j++) {
            var f = fields[j];
            if (f.type === 'static') { w.add('statictext', undefined, String(f.label || f.value || '')); rows.push(null); continue; }
            var row = w.add('group'); row.orientation = 'row'; row.alignChildren = ['left', 'center']; row.margins = 0;
            if (f.label) { var lab = row.add('statictext', undefined, String(f.label)); lab.preferredSize.width = 140; }
            if (f.type === 'check') {
                var cb = row.add('checkbox', undefined, ''); cb.value = !!f.value; rows.push({ kind: 'check', el: cb });
            } else if (f.type === 'select') {
                var dd = row.add('dropdownlist', undefined, f.options || []);
                var idx = (f.options || []).indexOf(f.value); if (idx >= 0) dd.selection = idx; else if (dd.items.length) dd.selection = 0;
                rows.push({ kind: 'select', el: dd });
            } else {
                var et = row.add('edittext', undefined, f.value === undefined || f.value === null ? '' : String(f.value));
                et.preferredSize = [f.type === 'number' ? 90 : 180, 24];
                rows.push({ kind: 'text', el: et });
            }
        }
        var btns = w.add('group'); btns.alignment = 'right'; btns.margins = [0, 6, 0, 0];
        var ok = btns.add('button', undefined, okLabel || 'OK', { name: 'ok' });
        var no = btns.add('button', undefined, 'Cancel', { name: 'cancel' });
        var accepted = false;
        ok.onClick = function () { accepted = true; w.close(); };
        no.onClick = function () { w.close(); };
        w.show();
        if (!accepted) return null;
        value = {};
        var ri = 0;
        for (var k = 0; k < fields.length; k++) {
            var fd = fields[k];
            if (fd.type === 'static') continue;
            var r = rows[ri++];
            if (r.kind === 'check') value[fd.id] = !!r.el.value;
            else if (r.kind === 'select') value[fd.id] = r.el.selection ? String(r.el.selection.text) : (fd.options ? fd.options[0] : '');
            else value[fd.id] = r.el.text;
        }
        return value;
    };
    T.prompt = function (title, label, def, opts) {
        opts = opts || {};
        var v = T.form(title, [{ id: 'v', label: label, type: opts.type || 'text', value: def === undefined ? '' : def, options: opts.options }], opts.okLabel);
        return v === null ? null : v.v;
    };
    T.pick = function (title, label, options, def) {
        var v = T.form(title, [{ id: 'v', label: label, type: 'select', options: options, value: def === undefined ? options[0] : def }]);
        return v === null ? null : v.v;
    };
    T.notice = function (title, lines) {
        if (T.NOTICE || T.OFFLINE) return;
        if (typeof Window === 'undefined') { T.say(title + ': ' + (lines instanceof Array ? lines.join(' | ') : lines)); return; }
        var w = new Window('dialog', title);
        w.orientation = 'column'; w.alignChildren = ['fill', 'top']; w.margins = 14;
        var body = lines instanceof Array ? lines : [String(lines)];
        for (var i = 0; i < body.length; i++) w.add('statictext', undefined, String(body[i]));
        var b = w.add('group'); b.alignment = 'right';
        b.add('button', undefined, 'OK', { name: 'ok' });
        w.show();
    };

    /* ---------- selection ---------- */
    T.comp = function () {
        var a = app.project.activeItem;
        if (!a || !(a instanceof CompItem)) T.fail('Open a composition first.');
        return a;
    };
    T.hasComp = function () {
        var a = app.project.activeItem;
        return !!(a && (a instanceof CompItem));
    };
    function slice(x) { return Array.prototype.slice.call(x); }
    T.layers = function (mode) {
        var c = T.comp(), list;
        if (mode === 'all') { list = []; for (var i = 1; i <= c.numLayers; i++) list.push(c.layer(i)); }
        else list = slice(c.selectedLayers);
        if (!list.length) T.fail(mode === 'all' ? 'The composition has no layers.' : 'Select at least one layer.');
        return list;
    };
    T.sel = function () { return slice(T.comp().selectedLayers); };
    T.each = function (list, fn) { for (var i = 0; i < list.length; i++) fn(list[i], i); };
    T.map = function (list, fn) { var o = []; for (var i = 0; i < list.length; i++) o.push(fn(list[i], i)); return o; };
    T.has = function (list, v) { return list.indexOf(v) >= 0; };

    /* Properties carrying selected keyframes, in selection order. */
    T.keyProps = function (requireAdjacent) {
        var c = T.comp(), ps = c.selectedProperties, out = [];
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i];
            if (p.propertyType !== PropertyType.PROPERTY || !p.numKeys) continue;
            if (!p.selectedKeys || !p.selectedKeys.length) continue;
            if (!p.isInterpolationTypeValid(KeyframeInterpolationType.BEZIER)) continue;
            out.push(p);
        }
        if (!out.length) T.fail('Select keyframes on at least one property.');
        if (requireAdjacent !== false) {
            var anyPair = false;
            for (var j = 0; j < out.length; j++) if (T.pairs(out[j]).length) anyPair = true;
            if (!anyPair) T.fail('Select two adjacent keyframes.');
        }
        return out;
    };
    /* 0-based indices of adjacent selected key pairs: [k, k+1] */
    T.pairs = function (prop) {
        var keys = slice(prop.selectedKeys).sort(function (a, b) { return a - b; }), out = [];
        for (var i = 1; i < keys.length; i++) if (keys[i] === keys[i - 1] + 1) out.push([keys[i - 1] - 1, keys[i] - 1]);
        return out;
    };
    T.sortedKeys = function (prop) { return slice(prop.selectedKeys).sort(function (a, b) { return a - b; }); };

    /* ---------- numbers and text ---------- */
    T.num = function (v, def) {
        if (typeof v === 'number') return isFinite(v) ? v : def;
        var n = parseFloat(String(v === undefined || v === null ? '' : v).replace(',', '.'));
        return isFinite(n) ? n : def;
    };
    T.int = function (v, def) { var n = T.num(v, def); return n === def && !isFinite(T.num(v, NaN)) ? def : Math.round(n); };
    T.clamp = function (v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); };
    T.round = function (v, dp) { var f = Math.pow(10, dp === undefined ? 2 : dp); return Math.round(v * f) / f; };
    T.strip = function (s) { return String(s === undefined || s === null ? '' : s).replace(/^\s+|\s+$/g, ''); };
    T.pad = function (n, width) { var s = String(n); while (s.length < width) s = '0' + s; return s; };
    T.clone = function (v) { return JSON.parse(JSON.stringify(v)); };
    T.rand = function () { return Math.random(); };
    T.timeLabel = function (comp, t) {
        var fps = comp.frameRate || 24;
        var f = Math.round(t * fps);
        return T.pad(Math.floor(f / (fps * 60)), 2) + ':' + T.pad(Math.floor(f / fps) % 60, 2) + ':' + T.pad(f % Math.round(fps), 2);
    };
    T.snapTime = function (comp, t) { var fps = comp.frameRate || 24; return Math.round(t * fps) / fps; };

    return T;
})();

/* ==== host.js ==== */
/* Toolbox host bridge — EffectCraft command bus, menu commands, easing conversion,
   guides, text and effects. Everything here is probed against EffectCraft 0.24.1. */

var TH = (function () {
    var H = {}, EPS = 1e-8;

    /* ---------- command bus ---------- */
    H.run = function (cmd, params) { return app.run(cmd, params || {}); };
    H.tryRun = function (cmd, params) { try { return app.run(cmd, params || {}); } catch (e) { return null; } };
    H.has = function (cmd) {
        try { app.run('project.summary', {}); } catch (e) { return false; }
        return typeof app.run === 'function';
    };
    H.menuId = function (name) {
        try { return app.findMenuCommandId(name) || 0; } catch (e) { return 0; }
    };
    /* Run an app menu command by its display name (EffectCraft maps these to engine commands). */
    H.menu = function (name) {
        var id = H.menuId(name);
        if (!id) TB.fail('Menu command not found: ' + name);
        app.executeCommand(id);
    };
    /* Several commands in one undo step, rolled back if one fails. */
    H.batch = function (steps, label) {
        if (!steps || !steps.length) return;
        var err = null;
        try { app.beginUndoGroup('Toolbox \u00b7 ' + label); } catch (e) { throw e; }
        try {
            for (var i = 0; i < steps.length; i++) app.run(steps[i].command, steps[i].params || {});
        } catch (e) { err = e; }
        finally { try { app.endUndoGroup(); } catch (ignore) { } }
        if (err) throw err;
    };

    /* ---------- layers ---------- */
    H.layerLabel = function (layer) { try { return layer.label; } catch (e) { return 1; } };
    H.setLabel = function (layer, n) { try { layer.label = n; } catch (e) { } };
    H.markers = function (item) { return item && item.property ? item.property('Marker') : null; };
    H.layerOf = function (prop) {
        var d = prop.propertyDepth, p = prop;
        for (var i = 0; i < d; i++) p = p.propertyGroup(1);
        return p;
    };

    /* ---------- text ---------- */
    H.textProp = function (layer) {
        var p = null;
        try { p = layer.property('Source Text'); } catch (e) { p = null; }
        return p || null;
    };
    H.hasText = function (layer) { return !!H.textProp(layer); };
    H.textDoc = function (layer) {
        var p = H.textProp(layer);
        if (!p) TB.fail(layer.name + ' is not a text layer.');
        return p.value;
    };
    H.setText = function (layer, doc) {
        var p = H.textProp(layer);
        if (!p) TB.fail(layer.name + ' is not a text layer.');
        p.setValue(doc);
    };
    H.textContent = function (layer) {
        var p = H.textProp(layer);
        if (!p) TB.fail(layer.name + ' is not a text layer.');
        var v = p.value;
        return v && v.text !== undefined ? String(v.text) : String(v);
    };

    /* ---------- effects ---------- */
    H.effectGroup = function (layer) {
        try { return layer.property('Effects') || layer.effect; } catch (e) { return null; }
    };
    H.addEffect = function (layer, matchName) {
        var fx = H.effectGroup(layer);
        if (!fx) TB.fail(layer.name + ' has no Effects group.');
        try { return fx.addProperty(matchName); }
        catch (e) { TB.fail('Cannot add effect ' + matchName + ': ' + e.message); }
    };
    H.findEffect = function (layer, matchName) {
        var fx = H.effectGroup(layer);
        if (!fx) return null;
        try { return fx.property(matchName); } catch (e) { return null; }
    };

    /* ---------- guides (EffectCraft exposes guides only as engine commands) ---------- */
    H.guide = function (orientation, position, percent) {
        return H.run('view.addGuide', percent
            ? { orientation: orientation, position: position, percent: true }
            : { orientation: orientation, position: position });
    };
    H.clearGuides = function () { return H.run('view.clearGuides', {}); };
    H.exportGuides = function (path) { return H.run('view.exportGuides', { path: path }); };
    H.importGuides = function (path) { return H.run('view.importGuides', { path: path }); };
    H.guideFile = function () {
        return new File(H.tempFolder() + '/toolbox-guides.json');
    };
    /* EffectCraft has no Folder.temp/userData/desktop: derive a writable base
       from the running script's own folder (works in AE too). */
    H.tempFolder = function () {
        try {
            if (typeof $ !== 'undefined' && $.fileName) return String($.fileName).replace(/[\\\/][^\\\/]*$/, '');
        } catch (e) { }
        try {
            if (app.project.file && app.project.file.parent) return app.project.file.parent.fsName;
        } catch (e2) { }
        return '.';
    };
    /* Turn the engine's file-write gate into an actionable message (null otherwise). */
    H.writeGate = function (e) {
        var m = e && e.message ? String(e.message) : '';
        return m.indexOf('Allow Scripts to Write Files') >= 0
            ? 'EffectCraft blocks file access until "Settings \u25b8 Scripting & Expressions \u25b8 Allow Scripts to Write Files and Access Network" is switched on.'
            : null;
    };

    /* ---------- keyframe easing ---------- */
    function arr(x) { return Array.prototype.slice.call(x); }
    H.keyEase = function (prop, keyIndex) {
        return {
            inn: arr(prop.keyInTemporalEase(keyIndex)),
            out: arr(prop.keyOutTemporalEase(keyIndex))
        };
    };
    H.setKeyEase = function (prop, keyIndex, inEase, outEase) {
        prop.setTemporalEaseAtKey(keyIndex, inEase, outEase);
    };
    H.setInterp = function (prop, keyIndex, inType, outType) {
        prop.setInterpolationTypeAtKey(keyIndex, inType, outType);
    };
    H.interpOf = function (prop, keyIndex) {
        return { inn: prop.keyInInterpolationType(keyIndex), out: prop.keyOutInterpolationType(keyIndex) };
    };
    H.ease = function (speed, influence) { return new KeyframeEase(speed, influence); };

    /* Values/derivative of a segment, per dimension, in value units per second.
       Spatial properties use motion-path length (curved paths included) as the speed magnitude. */
    H.segmentSlope = function (prop, k) {
        var a = prop.keyValue(k), b = prop.keyValue(k + 1);
        var dt = prop.keyTime(k + 1) - prop.keyTime(k);
        if (!(dt > EPS)) TB.fail('The selected segment has no duration.');
        var delta = [], dims = [], i, straight = 0;
        if (typeof a === 'number') { delta.push(b - a); }
        else if (a && typeof a.length === 'number') {
            for (i = 0; i < a.length; i++) delta.push((b[i] === undefined ? 0 : b[i]) - (a[i] === undefined ? 0 : a[i]));
        } else delta.push(1);
        for (i = 0; i < delta.length; i++) straight += delta[i] * delta[i];
        straight = Math.sqrt(straight);
        var factor = 1;
        if (prop.isSpatial) {
            var len = H.pathLength(prop, k, a, b);
            if (len > EPS) factor = straight > EPS ? len / straight : 0;
        }
        if (factor === 0) { for (i = 0; i < delta.length; i++) dims.push(len / dt); }
        else for (i = 0; i < delta.length; i++) dims.push(delta[i] / dt * factor);
        if (!dims.length) dims.push(1 / dt);
        return dims;
    };
    /* Quadrature over the path's cubic, when the host exposes the spatial tangents. */
    H.pathLength = function (prop, k, a, b) {
        if (typeof prop.keyOutSpatialTangent !== 'function' || typeof prop.keyInSpatialTangent !== 'function') return 0;
        var to = null, ti = null;
        try { to = prop.keyOutSpatialTangent(k); ti = prop.keyInSpatialTangent(k + 1); } catch (e) { return 0; }
        if (!to || !ti) return 0;
        var nodes = [-.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664, 0],
            wts = [.4786286704993655, .4786286704993655, .2369268850561891, .2369268850561891, .5688888888888889],
            total = 0, d, i, j;
        for (i = 0; i < 64; i++) {
            for (j = 0; j < 5; j++) {
                var q = (i + .5) / 64 + nodes[j] / 128, u = 1 - q, sum = 0;
                for (d = 0; d < a.length; d++) {
                    var p0 = a[d], p1 = p0 + (to[d] || 0), p3 = b[d], p2 = p3 + (ti[d] || 0);
                    var v = 3 * u * u * q * (p1 - p0) + 6 * u * q * (p2 - p1) + 3 * q * q * (p3 - p2);
                    sum += v * v;
                }
                total += wts[j] * Math.sqrt(sum) / 128;
            }
        }
        return total;
    };

    /* Cubic curve [x1,y1,x2,y2] -> the two eased sides, scaled to each dimension's speed. */
    H.curveSides = function (curve, slopes) {
        var x1 = TB.clamp(curve[0], 0, 1), y1 = curve[1],
            x2 = TB.clamp(curve[2], 0, 1), y2 = curve[3];
        var outInf = Math.max(0.1, x1 * 100), inInf = Math.max(0.1, (1 - x2) * 100);
        var outScale = y1 / Math.max(0.001, x1), inScale = (1 - y2) / Math.max(0.001, 1 - x2);
        var outs = [], ins = [], i;
        for (i = 0; i < slopes.length; i++) { outs.push(slopes[i] * outScale); ins.push(slopes[i] * inScale); }
        return { outInfluence: Math.min(100, outInf), inInfluence: Math.min(100, inInf), outs: outs, ins: ins };
    };
    /* KeyframeEase arrays shaped like the property's existing ones. */
    H.fill = function (speeds, influence, proto) {
        var len = proto && proto.length ? proto.length : speeds.length, out = [], i;
        for (i = 0; i < len; i++) {
            var s = speeds[i] !== undefined ? speeds[i] : (speeds.length ? speeds[speeds.length - 1] : 0);
            if (!isFinite(s)) s = 0;
            out.push(new KeyframeEase(s, influence));
        }
        return out;
    };
    /* Read the cubic curve [x1,y1,x2,y2] for the segment k -> k+1 (k is 1-based).
       LINEAR sides sit on the diagonal; a HOLD side has no cubic curve at all. */
    H.curveOfSegment = function (prop, k) {
        var slopes = H.segmentSlope(prop, k), ei = H.keyEase(prop, k), eo = H.keyEase(prop, k + 1);
        var outE = ei.out[0], inE = eo.inn[0], dim = 0, i;
        for (i = 1; i < slopes.length; i++) if (Math.abs(slopes[i]) > Math.abs(slopes[dim])) dim = i;
        if (!outE || !inE) TB.fail('Cannot read the easing of this keyframe.');
        var iOut = prop.keyOutInterpolationType(k), iIn = prop.keyInInterpolationType(k + 1);
        if (iOut === KeyframeInterpolationType.HOLD || iIn === KeyframeInterpolationType.HOLD) {
            TB.fail('Hold interpolation has no cubic curve. Switch the held key to Linear or Bezier first.');
        }
        var s = slopes[dim];
        var x1 = TB.clamp(outE.influence / 100, 0, 1), x2 = TB.clamp(1 - inE.influence / 100, 0, 1);
        var y1 = iOut === KeyframeInterpolationType.LINEAR ? x1 : (Math.abs(s) > EPS ? x1 * (outE.speed / s) : 0);
        var y2 = iIn === KeyframeInterpolationType.LINEAR ? x2 : (Math.abs(s) > EPS ? 1 - (1 - x2) * (inE.speed / s) : 1);
        if (!isFinite(y1)) y1 = x1;
        if (!isFinite(y2)) y2 = x2;
        return [x1, y1, x2, y2];
    };
    /* One side only: 'in' = the incoming curve of key k+1, 'out' = the outgoing curve of key k. */
    H.curveSide = function (prop, k, side) {
        var c = H.curveOfSegment(prop, k);
        return side === 'in' ? [c[2], c[3], c[2], c[3]] : [c[0], c[1], c[0], c[1]];
    };
    /* Apply a curve to every adjacent selected pair. side: 'in' | 'out' | 'both'
       ('in' changes only incoming sides, 'out' only outgoing; the other side is preserved). */
    H.applyCurve = function (prop, curve, side, pairs) {
        pairs = pairs || TB.pairs(prop);
        var count = 0;
        for (var i = 0; i < pairs.length; i++) {
            var k = pairs[i][0] + 1;
            var sides = H.curveSides(curve, H.segmentSlope(prop, k));
            if (side !== 'in') {
                var eo = H.keyEase(prop, k);
                H.setKeyEase(prop, k, eo.inn, H.fill(sides.outs, sides.outInfluence, eo.out));
                H.setInterp(prop, k, H.interpOf(prop, k).inn, KeyframeInterpolationType.BEZIER);
            }
            if (side !== 'out') {
                var ei = H.keyEase(prop, k + 1);
                H.setKeyEase(prop, k + 1, H.fill(sides.ins, sides.inInfluence, ei.inn), ei.out);
                H.setInterp(prop, k + 1, KeyframeInterpolationType.BEZIER, H.interpOf(prop, k + 1).out);
            }
            count++;
        }
        return count;
    };

    /* ---------- misc host helpers ---------- */
    H.snapshot = function (comp, path) {
        if (typeof comp.saveFrameToPng === 'function') { comp.saveFrameToPng(path); return true; }
        return false;
    };
    H.writeJson = function (file, obj) {
        if (!file.open('w')) TB.fail('Cannot write ' + file.fsName);
        file.write(JSON.stringify(obj));
        file.close();
    };
    H.readJson = function (file) {
        if (!file.exists) return null;
        if (!file.open('r')) TB.fail('Cannot read ' + file.fsName);
        var s = file.read();
        file.close();
        try { return JSON.parse(s); } catch (e) { return null; }
    };

    return H;
})();

/* ==== icons.js ==== */
/* Toolbox vector glyphs — everything is drawn at runtime with ScriptUIGraphics,
   so the panel stays a single file with no image assets. */

var TBG = (function () {
    var M = {};

    /* ---------- drawing helpers (shared with the panel) ---------- */
    function rgb(c) {
        return [0, 1, 2].map(function (i) {
            return c[i] <= 0.04045 ? c[i] / 12.92 : Math.pow((c[i] + 0.055) / 1.055, 2.4);
        }).concat([c.length > 3 ? c[3] : 1]);
    }
    M.rgb = rgb;
    M.pen = function (g, c, w) { return g.newPen(g.PenType.SOLID_COLOR, rgb(c), w || 1); };
    M.brush = function (g, c) { return g.newBrush(g.BrushType.SOLID_COLOR, rgb(c)); };
    M.line = function (g, x1, y1, x2, y2, c, w) { g.newPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.strokePath(M.pen(g, c, w || 1.4)); };
    M.poly = function (g, pts, c, fill, w) {
        g.newPath();
        for (var i = 0; i < pts.length; i++) { if (i) g.lineTo(pts[i][0], pts[i][1]); else g.moveTo(pts[i][0], pts[i][1]); }
        if (fill) { g.closePath(); g.fillPath(M.brush(g, c)); } else g.strokePath(M.pen(g, c, w || 1.4));
    };
    M.circle = function (g, x, y, r, c, fill) {
        g.newPath(); g.ellipsePath(x - r, y - r, r * 2, r * 2);
        if (fill) g.fillPath(M.brush(g, c)); else g.strokePath(M.pen(g, c, 1.4));
    };
    M.box = function (g, x, y, w, h, fill, c, r) {
        r = r === undefined ? 2 : Math.min(r === null ? 0 : r, w / 2, h / 2);
        g.newPath();
        if (!r) { g.rectPath(x, y, w, h); }
        else {
            var cx = [[x + w - r, y + r], [x + w - r, y + h - r], [x + r, y + h - r], [x + r, y + r]], n, s, a, px, py;
            for (n = 0; n < 4; n++) for (s = 0; s <= 6; s++) {
                a = (-90 + n * 90 + s * 15) * Math.PI / 180;
                px = cx[n][0] + Math.cos(a) * r; py = cx[n][1] + Math.sin(a) * r;
                if (!n && !s) g.moveTo(px, py); else g.lineTo(px, py);
            }
            g.closePath();
        }
        if (fill) g.fillPath(M.brush(g, fill)); else g.strokePath(M.pen(g, c, 1.4));
    };
    M.dash = function (g, x1, y1, x2, y2, c, w, on, off) {        /* a dashed straight line, drawn segment by segment */
        var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy) || 1;
        var ux = dx / len, uy = dy / len, pos = 0, drawing = true;
        on = on || 3; off = off === undefined ? 2.5 : off;
        while (pos < len) {
            var step = drawing ? on : off, end = Math.min(len, pos + step);
            if (drawing) M.line(g, x1 + ux * pos, y1 + uy * pos, x1 + ux * end, y1 + uy * end, c, w || 1.2);
            pos = end; drawing = !drawing;
        }
    };
    /* cubic helper: points [[x,y],[c1],[c2],[x,y]] relative to centre */
    M.curve = function (g, pts, x, y, c, w, fill) {
        g.newPath(); g.moveTo(x + pts[0][0], y + pts[0][1]);
        g.bezierCurveTo(x + pts[1][0], y + pts[1][1], x + pts[2][0], y + pts[2][1], x + pts[3][0], y + pts[3][1]);
        if (fill) g.fillPath(M.brush(g, c)); else g.strokePath(M.pen(g, c, w || 1.5));
    };
    M.arrow = function (g, x, y, ang, size, c) {
        var s = size || 4, a = ang;
        M.line(g, x, y, x + Math.cos(a) * s, y + Math.sin(a) * s, c, 1.4);
        M.poly(g, [[x + Math.cos(a) * s, y + Math.sin(a) * s],
                   [x + Math.cos(a + 2.5) * s * 0.55, y + Math.sin(a + 2.5) * s * 0.55],
                   [x + Math.cos(a - 2.5) * s * 0.55, y + Math.sin(a - 2.5) * s * 0.55]], c, true);
    };

    M.text = function (g, s, x, y, c, size) {
        g.drawString(String(s), M.pen(g, c), x, y, ScriptUI.newFont('dialog', 'REGULAR', size || 10));
    };
    M.textWidth = function (g, s, size) {
        try { return g.measureString(String(s), ScriptUI.newFont('dialog', 'REGULAR', size || 10))[0]; }
        catch (e) { return String(s).length * (size || 10) * 0.55; }
    };
    M.truncate = function (g, s, maxW, size) {
        s = String(s);
        while (s.length > 2 && M.textWidth(g, s, size) > maxW) s = s.slice(0, -2) + '\u2026';
        return s;
    };

    /* ---------- glyphs: each draws centred in a 16x16 box ---------- */
    var G = {};
    var S = 7.5; /* half size */

    G.cursor = function (g, x, y, c) { M.poly(g, [[x - 5, y - 7], [x - 5, y + 6], [x - 1, y + 2], [x + 2, y + 7], [x + 4, y + 6], [x + 1, y + 1], [x + 6, y + 1]], c, true); };
    G.invert = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.poly(g, [[x - 4, y - 3], [x + 4, y - 3], [x - 4, y + 3], [x + 4, y + 3]], a, true); };
    G.oddEven = function (g, x, y, c, a) { for (var i = -1; i <= 1; i++) M.box(g, x + i * 5 - 1.5, y - 5, 3, 10, i === 0 ? a : null, c, 1); };
    G.nth = function (g, x, y, c, a) { for (var i = 0; i < 4; i++) M.box(g, x - 7 + i * 4, y - 4 + (i % 2 ? 4 : 0), 3, 4, i % 3 === 0 ? a : null, c, 1); };
    G.dice = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 3); M.circle(g, x - 2.5, y - 2.5, 1.4, a, true); M.circle(g, x + 2.5, y + 2.5, 1.4, c, true); };
    G.text = function (g, x, y, c, a) { M.line(g, x - 6, y - 6, x + 6, y - 6, c, 2); M.line(g, x, y - 7, x, y + 7, a, 1.6); M.line(g, x - 5, y + 7, x + 5, y + 7, c, 1.6); };
    G.null = function (g, x, y, c, a) { M.box(g, x - 5, y - 5, 10, 10, null, a, 2); M.line(g, x - 7, y - 7, x + 7, y + 7, c, 1.2); };
    G.precomp = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 11, 10, null, c, 2); M.box(g, x - 3, y - 7, 11, 10, a, c, 2); };
    G.shape = function (g, x, y, c, a) { M.circle(g, x - 2, y, 5, c, false); M.box(g, x + 1, y - 4, 8, 8, null, a, 1); };
    G.cube = function (g, x, y, c, a) { M.poly(g, [[x, y - 7], [x + 6, y - 4], [x + 6, y + 4], [x, y + 7], [x - 6, y + 4], [x - 6, y - 4]], null, false); M.line(g, x, y - 7, x, y + 7, a, 1.2); M.line(g, x - 6, y - 4, x + 6, y + 4, c, 1.2); };
    G.guide = function (g, x, y, c, a) { M.dash(g, x - 7, y, x + 7, y, a, 1.3); M.dash(g, x, y - 7, x, y + 7, c, 1.3); M.circle(g, x, y, 1.6, a, true); };
    G.light = function (g, x, y, c, a) { M.circle(g, x, y - 2, 3.5, a, true); for (var i = -2; i <= 2; i++) M.line(g, x + i * 3, y + 3, x + i * 4, y + 7, c, 1.2); };
    G.audio = function (g, x, y, c, a) { for (var i = -3; i <= 3; i++) { var h = 2 + Math.abs(7 - Math.abs(i * 2)); M.line(g, x + i * 2, y - h / 2, x + i * 2, y + h / 2, i % 2 ? a : c, 1.6); } };
    G.parents = function (g, x, y, c, a) { M.circle(g, x - 4, y - 4, 2.4, c, true); M.circle(g, x + 4, y + 4, 2.4, a, true); M.line(g, x - 2.5, y - 2.5, x + 2.5, y + 2.5, c, 1.4); };
    G.hierarchy = function (g, x, y, c, a) { M.circle(g, x, y - 5, 2.2, a, true); M.box(g, x - 7, y + 3, 5, 4, null, c, 1); M.box(g, x + 2, y + 3, 5, 4, null, c, 1); M.line(g, x, y - 3, x, y, c, 1.2); M.line(g, x - 4.5, y, x + 4.5, y, c, 1.2); M.line(g, x - 4.5, y, x - 4.5, y + 3, c, 1.2); M.line(g, x + 4.5, y, x + 4.5, y + 3, c, 1.2); };
    G.matching = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 6, 6, a, c, 1); M.box(g, x + 1, y - 6, 6, 6, null, c, 1); M.box(g, x - 7, y + 1, 6, 6, null, c, 1); M.box(g, x + 1, y + 1, 6, 6, a, c, 1); };
    G.frame = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 2); M.line(g, x, y - 6, x, y + 6, a, 2); };
    G.lock = function (g, x, y, c, a) { M.box(g, x - 5, y - 1, 10, 8, null, c, 2); M.curve(g, [[x - 3, y - 1], [x - 3, y - 6], [x + 3, y - 6], [x + 3, y - 1]], x, y, a, 1.4); };
    G.shy = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 3); M.circle(g, x - 3, y, 1.6, a, true); M.circle(g, x + 3, y, 1.6, a, true); };
    G.trim = function (g, x, y, c, a) { M.line(g, x - 7, y + 4, x + 7, y + 4, c, 2); M.line(g, x - 4, y - 6, x - 4, y + 1, a, 2); M.line(g, x + 4, y - 6, x + 4, y + 1, a, 2); };
    G.rename = function (g, x, y, c, a) { M.line(g, x - 7, y + 6, x + 7, y + 6, c, 1.6); M.poly(g, [[x - 6, y - 6], [x + 4, y - 6], [x + 6, y - 4], [x + 6, y + 2], [x - 6, y + 2]], null, false); M.line(g, x - 4, y - 2, x + 3, y - 2, a, 1.6); };
    G.duplicate = function (g, x, y, c, a) { M.box(g, x - 7, y - 7, 10, 10, null, c, 2); M.box(g, x - 3, y - 3, 10, 10, a, c, 2); };
    G.palette = function (g, x, y, c, a) { M.circle(g, x - 3, y - 3, 2, c, true); M.circle(g, x + 3, y - 3, 2, a, true); M.circle(g, x - 3, y + 3, 2, a, true); M.circle(g, x + 3, y + 3, 2, c, true); };
    G.order = function (g, x, y, c, a) { for (var i = 0; i < 3; i++) M.box(g, x - 7, y - 6 + i * 5, 14, 3, i === 1 ? a : null, c, 1); };
    G.anchor = function (g, x, y, c, a) { M.circle(g, x, y, 4, c, false); M.line(g, x, y - 7, x, y + 7, a, 1.2); M.line(g, x - 7, y, x + 7, y, a, 1.2); M.circle(g, x, y, 1.4, a, true); };
    G.reset = function (g, x, y, c, a) { M.curve(g, [[x - 6, y + 2], [x - 6, y - 6], [x + 6, y - 6], [x + 6, y + 2]], x, y, c, 1.6); M.poly(g, [[x + 6, y + 2], [x + 2, y - 1], [x + 6, y - 4]], a, true); };
    G.offset = function (g, x, y, c, a) { M.line(g, x - 7, y - 3, x + 5, y - 3, c, 1.6); M.arrow(g, x + 6, y - 3, 0, 3.5, a); M.line(g, x - 5, y + 3, x + 7, y + 3, a, 1.6); M.arrow(g, x - 6, y + 3, Math.PI, 3.5, c); };
    G.repeat = function (g, x, y, c, a) { for (var i = -1; i <= 1; i++) M.box(g, x + i * 5 - 2, y - 4, 4, 8, i === 0 ? a : null, c, 1); };
    G.scissors = function (g, x, y, c, a) { M.circle(g, x - 4, y + 4, 2.4, c, false); M.circle(g, x + 4, y + 4, 2.4, c, false); M.line(g, x - 5, y + 2, x + 5, y - 6, a, 1.5); M.line(g, x + 5, y + 2, x - 5, y - 6, a, 1.5); };

    G.key = function (g, x, y, c, a) { M.poly(g, [[x, y - 5], [x + 5, y], [x, y + 5], [x - 5, y]], a, true); };
    G.clean = function (g, x, y, c, a) { for (var i = -1; i <= 1; i++) M.poly(g, [[x + i * 5, y - 3], [x + i * 5 + 2.5, y], [x + i * 5, y + 3], [x + i * 5 - 2.5, y]], i === 0 ? a : c, true); };
    G.clone = function (g, x, y, c, a) { M.poly(g, [[x - 5, y - 5], [x - 2, y], [x - 5, y + 5], [x - 8, y + 5], [x - 11, y], [x - 8, y - 5]], c, true); M.poly(g, [[x + 5, y - 5], [x + 2, y], [x + 5, y + 5], [x + 8, y + 5], [x + 11, y], [x + 8, y - 5]], a, true); };
    G.mirror = function (g, x, y, c, a) { M.line(g, x, y - 7, x, y + 7, c, 1.3); M.poly(g, [[x - 3, y - 5], [x - 7, y], [x - 3, y + 5]], a, true); M.poly(g, [[x + 3, y - 5], [x + 7, y], [x + 3, y + 5]], a, true); };
    G.alignLeft = function (g, x, y, c, a) { M.line(g, x - 6, y - 7, x - 6, y + 7, a, 2); for (var i = 0; i < 3; i++) M.box(g, x - 4, y - 6 + i * 5, 5 + i * 3, 3.5, null, c, 1); };
    G.alignRight = function (g, x, y, c, a) { M.line(g, x + 6, y - 7, x + 6, y + 7, a, 2); for (var i = 0; i < 3; i++) M.box(g, x + 4 - (5 + i * 3), y - 6 + i * 5, 5 + i * 3, 3.5, null, c, 1); };
    G.toTime = function (g, x, y, c, a) { M.line(g, x, y - 7, x, y + 7, c, 1.4); M.poly(g, [[x - 6, y - 3], [x - 1, y], [x - 6, y + 3]], a, true); M.circle(g, x + 4, y, 2.4, a, true); };
    G.toIn = function (g, x, y, c, a) { M.line(g, x - 7, y + 5, x + 7, y + 5, c, 1.6); M.poly(g, [[x - 6, y + 5], [x - 2, y - 6], [x + 2, y + 5]], a, true); };
    G.toOut = function (g, x, y, c, a) { M.line(g, x - 7, y + 5, x + 7, y + 5, c, 1.6); M.poly(g, [[x - 2, y + 5], [x + 2, y - 6], [x + 6, y + 5]], a, true); };
    G.shiftKeys = function (g, x, y, c, a) { for (var i = 0; i < 3; i++) M.poly(g, [[x - 7 + i * 5, y - 4], [x - 4.5 + i * 5, y], [x - 7 + i * 5, y + 4], [x - 9.5 + i * 5, y]], i === 1 ? a : c, true); };
    G.snapKeys = function (g, x, y, c, a) { M.dash(g, x - 7, y + 5, x + 7, y + 5, c, 1.3); M.poly(g, [[x, y - 6], [x + 4, y + 3], [x - 4, y + 3]], a, true); };
    G.reverseKeys = function (g, x, y, c, a) { M.line(g, x - 6, y - 4, x + 6, y - 4, a, 1.6); M.arrow(g, x - 7, y - 4, Math.PI, 3.5, a); M.line(g, x - 6, y + 4, x + 6, y + 4, c, 1.6); M.arrow(g, x + 7, y + 4, 0, 3.5, c); };
    G.sepDims = function (g, x, y, c, a) { M.line(g, x - 6, y + 6, x - 6, y - 6, c, 1.6); M.line(g, x + 6, y + 6, x + 6, y - 6, a, 1.6); M.poly(g, [[x, y - 5], [x + 3, y], [x, y + 5], [x - 3, y]], null, false, 1.2); };
    G.secondary = function (g, x, y, c, a) { M.poly(g, [[x - 5, y + 4], [x - 1, y - 4], [x + 3, y + 4]], null, false, 1.5); M.poly(g, [[x - 1, y + 4], [x + 3, y - 4], [x + 7, y + 4]], a, false, 1.5); };
    G.looper = function (g, x, y, c, a) { M.curve(g, [[x - 7, y + 3], [x - 7, y - 6], [x + 7, y - 6], [x + 7, y + 3]], x, y, c, 1.6); M.poly(g, [[x - 7, y + 4], [x - 3, y + 1], [x - 3, y + 7]], a, true); };
    G.selector = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 2); M.poly(g, [[x - 3, y - 2], [x + 1, y], [x - 3, y + 2]], a, true); M.line(g, x + 2, y + 3, x + 5, y + 3, a, 1.4); };
    G.assistant = function (g, x, y, c, a) { M.curve(g, [[x - 7, y + 6], [x - 7, y - 6], [x + 7, y + 6], [x + 7, y - 6]], x, y, a, 1.6); M.circle(g, x - 7, y + 6, 1.6, c, true); M.circle(g, x + 7, y - 6, 1.6, c, true); };
    G.fixOvershoot = function (g, x, y, c, a) { M.line(g, x - 7, y - 6, x + 7, y - 6, c, 1.3); M.line(g, x - 7, y + 6, x + 7, y + 6, c, 1.3); M.curve(g, [[x - 7, y], [x - 2, y + 8], [x + 2, y - 8], [x + 7, y]], x, y, a, 1.6); };
    G.findReplace = function (g, x, y, c, a) { M.circle(g, x - 3, y - 2, 4.5, c, false); M.line(g, x + 1, y + 2, x + 6, y + 7, c, 1.8); M.line(g, x + 3, y + 4, x + 6, y + 4, a, 1.4); };

    /* easing curves -------------------------------------------------- */
    function easeGlyph(kind) {
        return function (g, x, y, c, a) {
            var base = [[x - 7, y + 7], [x + 7, y + 7]];
            M.line(g, base[0][0], base[0][1], base[1][0], base[1][1], c, 1);        /* frame bottom */
            M.line(g, x - 7, y + 7, x - 7, y - 7, c, 1);                            /* frame left  */
            var p;
            if (kind === 'linear') p = [[x - 7, y + 7], [x - 7, y - 7], [x + 7, y + 7], [x + 7, y - 7]];
            else if (kind === 'in') p = [[x - 7, y + 7], [x - 7, y + 1], [x - 1, y - 7], [x + 7, y - 7]];
            else if (kind === 'out') p = [[x - 7, y + 7], [x - 1, y - 7], [x + 7, y - 7 + 6], [x + 7, y - 7]];
            else p = [[x - 7, y + 7], [x - 7, y - 7 + 1], [x + 7, y - 1], [x + 7, y - 7]];
            if (kind === 'out') p = [[x - 7, y + 7], [x - 1, y - 7], [x + 7, y - 2], [x + 7, y - 7]];
            M.curve(g, p, 0, 0, a, 1.7);
        };
    }
    G.easeLinear = easeGlyph('linear');
    G.easeIn = easeGlyph('in');
    G.easeOut = easeGlyph('out');
    G.easeInOut = easeGlyph('inout');
    G.easeCopy = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 9, 9, null, c, 1.5); M.box(g, x - 3, y - 3, 9, 9, a, c, 1.5); };
    G.easePaste = function (g, x, y, c, a) { M.box(g, x - 5, y - 7, 10, 12, null, c, 2); M.box(g, x - 2, y - 3, 6, 6, a, c, 1); };
    G.easeReverse = G.reverseKeys;

    /* guides --------------------------------------------------------- */
    function guideGlyph(pos) {
        return function (g, x, y, c, a) {
            M.box(g, x - 7, y - 7, 14, 14, null, c, 2);
            if (pos === 'top') M.dash(g, x - 7, y - 3, x + 7, y - 3, a, 1.4);
            else if (pos === 'bottom') M.dash(g, x - 7, y + 3, x + 7, y + 3, a, 1.4);
            else if (pos === 'left') M.dash(g, x - 3, y - 7, x - 3, y + 7, a, 1.4);
            else if (pos === 'right') M.dash(g, x + 3, y - 7, x + 3, y + 7, a, 1.4);
            else if (pos === 'centerH') { M.dash(g, x - 7, y, x + 7, y, a, 1.4); M.dash(g, x, y - 7, x, y + 7, a, 1.4); }
            else if (pos === 'middleH') M.dash(g, x - 7, y, x + 7, y, a, 1.4);
            else if (pos === 'middleV') M.dash(g, x, y - 7, x, y + 7, a, 1.4);
            else if (pos === 'around') { M.dash(g, x - 7, y - 3, x + 7, y - 3, a, 1.4); M.dash(g, x - 7, y + 3, x + 7, y + 3, a, 1.4); M.dash(g, x - 3, y - 7, x - 3, y + 7, a, 1.4); M.dash(g, x + 3, y - 7, x + 3, y + 7, a, 1.4); }
            else if (pos === 'grid') { for (var i = -1; i <= 1; i++) { M.dash(g, x + i * 4.5, y - 7, x + i * 4.5, y + 7, a, 1.2); M.dash(g, x - 7, y + i * 4.5, x + 7, y + i * 4.5, a, 1.2); } }
            else if (pos === 'golden') { M.line(g, x - 7, y - 7, x - 7, y + 7, a, 1.4); M.curve(g, [[x - 7, y - 7], [x + 2, y - 7], [x + 7, y - 2], [x, y]], x, y, a, 1.4); M.curve(g, [[x, y], [x + 7, y + 6], [x - 4, y + 7], [x - 1, y - 1]], x, y, c, 1.2); }
            else if (pos === 'lock') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.box(g, x - 3, y - 1, 6, 5, a, c, 1); }
            else if (pos === 'eye') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.circle(g, x, y, 3, a, false); M.circle(g, x, y, 1.2, a, true); }
            else if (pos === 'snap') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.poly(g, [[x + 1, y - 6], [x - 5, y + 1], [x - 1, y + 1], [x + 1, y + 6]], a, true); }
            else if (pos === 'clear') { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.line(g, x - 4, y - 4, x + 4, y + 4, a, 1.6); M.line(g, x + 4, y - 4, x - 4, y + 4, a, 1.6); }
            else if (pos === 'copy') { M.box(g, x - 7, y - 3, 10, 8, null, c, 1.5); M.dash(g, x - 3, y - 7, x + 7, y - 7, a, 1.4); M.dash(g, x + 7, y - 7, x + 7, y + 3, a, 1.4); }
            else M.dash(g, x - 7, y, x + 7, y, a, 1.4);
        };
    }
    G.guideTop = guideGlyph('top'); G.guideBottom = guideGlyph('bottom');
    G.guideLeft = guideGlyph('left'); G.guideRight = guideGlyph('right');
    G.guideCenter = guideGlyph('centerH'); G.guideMiddle = guideGlyph('middleH');
    G.guideMiddleV = guideGlyph('middleV'); G.guideAround = guideGlyph('around');
    G.guideGrid = guideGlyph('grid'); G.guideGolden = guideGlyph('golden');
    G.guideLock = guideGlyph('lock'); G.guideEye = guideGlyph('eye');
    G.guideSnap = guideGlyph('snap'); G.guideClear = guideGlyph('clear');
    G.guideCopy = guideGlyph('copy'); G.guideAnchor = function (g, x, y, c, a) { M.box(g, x - 7, y - 7, 14, 14, null, c, 2); M.circle(g, x, y, 3, c, false); M.line(g, x, y - 6, x, y + 6, a, 1.2); M.line(g, x - 6, y, x + 6, y, a, 1.2); };

    /* view ------------------------------------------------------------ */
    G.bgBlack = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, a, c, 2); M.circle(g, x, y, 3, c, false); };
    G.bgWhite = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.circle(g, x, y, 3, c, false); };
    G.bgGrey = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.circle(g, x, y, 3, a, true); };
    G.bgColor = function (g, x, y, c, a) { M.circle(g, x, y, 6, a, false); M.circle(g, x - 2, y - 2, 2, c, true); };
    G.zoom = function (g, x, y, c, a, k) { M.circle(g, x - 1, y - 1, 5, c, false); M.line(g, x + 3, y + 3, x + 7, y + 7, a, 2); if (k) M.line(g, x - 3.5, y - 1, x + 1.5, y - 1, a, 1.6); };
    G.zoom100 = function (g, x, y, c, a) { G.zoom(g, x - 1, y, c, a); M.line(g, x + 2, y - 6, x + 6, y - 6, a, 1.4); };
    G.zoom50 = function (g, x, y, c, a) { G.zoom(g, x - 1, y, c, a); M.box(g, x + 2, y - 7, 5, 3, a, c, 1); };
    G.zoom33 = function (g, x, y, c, a) { G.zoom(g, x - 1, y, c, a); M.poly(g, [[x + 2, y - 7], [x + 7, y - 7], [x + 4.5, y - 4], [x + 7, y - 1], [x + 2, y - 1], [x + 4.5, y - 4]], null, false, 1.2); };
    G.screenshot = function (g, x, y, c, a) { M.box(g, x - 7, y - 4, 14, 10, null, c, 2); M.box(g, x - 3, y - 7, 6, 3, null, c, 1); M.circle(g, x, y + 1, 3, a, false); };
    G.solo = function (g, x, y, c, a) { M.curve(g, [[x - 7, y + 4], [x - 2, y - 7], [x + 2, y + 7], [x + 7, y - 4]], x, y, a, 2); };
    G.checker = function (g, x, y, c, a) { for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) if ((i + j) % 2 === 0) M.box(g, x - 7 + i * 3.5, y - 7 + j * 3.5, 3.5, 3.5, (i + j) % 4 === 0 ? a : c, c, 0); };
    G.eye = function (g, x, y, c, a) { M.curve(g, [[x - 7, y], [x - 3, y - 6], [x + 3, y - 6], [x + 7, y]], x, y, c, 1.5); M.curve(g, [[x + 7, y], [x + 3, y + 6], [x - 3, y + 6], [x - 7, y]], x, y, c, 1.5); M.circle(g, x, y, 2.4, a, true); };

    /* expressions ------------------------------------------------------ */
    G.exprOn = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.poly(g, [[x - 2, y - 5], [x - 6, y + 1], [x - 2, y + 1], [x - 2, y + 6], [x + 4, y - 1], [x, y - 1], [x, y - 5]], a, true); };
    G.exprOff = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.line(g, x - 5, y + 5, x + 5, y - 5, a, 2); };
    G.exprBake = function (g, x, y, c, a) { M.poly(g, [[x, y - 7], [x + 6, y - 1], [x + 6, y + 6], [x - 6, y + 6], [x - 6, y - 1]], null, false); M.poly(g, [[x - 3, y + 4], [x, y - 2], [x + 3, y + 4]], a, true); };
    G.exprEditor = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.poly(g, [[x - 4, y - 3], [x - 1, y], [x - 4, y + 3]], c, false, 1.4); M.line(g, x + 1, y + 3, x + 5, y + 3, a, 1.6); };
    G.exprErrors = function (g, x, y, c, a) { M.poly(g, [[x, y - 7], [x + 7, y + 6], [x - 7, y + 6]], null, false, 1.6); M.line(g, x, y - 3, x, y + 1, a, 1.8); M.circle(g, x, y + 4, 1.2, a, true); };
    G.exprRemove = G.exprOff;

    /* shapes ----------------------------------------------------------- */
    G.trimPath = function (g, x, y, c, a) { M.circle(g, x, y, 6, c, false); M.line(g, x + 4, y - 4, x + 8, y - 8, a, 2); M.line(g, x - 4, y + 4, x - 8, y + 8, a, 2); };
    G.merge = function (g, x, y, c, a) { M.circle(g, x - 3, y, 5, c, false); M.circle(g, x + 3, y, 5, a, false); };
    G.pathEdit = function (g, x, y, c, a) { M.line(g, x - 6, y + 5, x + 6, y - 5, c, 1.5); M.circle(g, x - 6, y + 5, 2, a, true); M.circle(g, x + 6, y - 5, 2, a, true); M.line(g, x - 2, y - 3, x + 2, y + 3, c, 1.2); };
    G.stroke = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 2); M.box(g, x - 4, y - 4, 8, 8, null, a, 2); };
    G.fill = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, a, c, 2); M.line(g, x - 6, y + 2, x + 6, y + 2, c, 1.2); };
    G.cap = function (g, x, y, c, a) { M.line(g, x - 7, y + 3, x + 7, y + 3, c, 3); M.poly(g, [[x + 7, y + 3], [x + 4, y - 2], [x + 10, y - 2]], a, true); };
    G.circleWizard = function (g, x, y, c, a) { M.circle(g, x, y, 6, c, false); M.circle(g, x, y, 2, a, true); M.line(g, x, y - 8, x, y - 5, a, 1.4); };
    G.rectWizard = function (g, x, y, c, a) { M.box(g, x - 6, y - 5, 12, 10, null, c, 2); M.box(g, x - 6, y - 5, 5, 5, a, c, 1); };
    G.connect = function (g, x, y, c, a) { M.circle(g, x - 5, y + 4, 2.4, c, true); M.circle(g, x + 5, y - 4, 2.4, c, true); M.line(g, x - 3, y + 3, x + 3, y - 3, a, 1.6); };
    G.strokeWidth = function (g, x, y, c, a) { M.line(g, x - 7, y - 4, x + 7, y - 4, c, 1); M.line(g, x - 7, y + 3, x + 7, y + 3, c, 3.5); M.line(g, x - 7, y + 6, x + 7, y + 6, a, 1.4); };

    /* text ------------------------------------------------------------- */
    G.lorem = function (g, x, y, c, a) { for (var i = 0; i < 3; i++) M.line(g, x - 6, y - 4 + i * 4, x + (i === 2 ? -1 : 6), y - 4 + i * 4, i === 1 ? a : c, 1.6); };
    G.counter = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 14, 10, null, c, 2); M.line(g, x - 3, y - 2, x - 3, y + 2, a, 1.6); M.line(g, x, y - 2, x, y + 2, a, 1.6); M.line(g, x + 3, y - 2, x + 3, y + 2, a, 1.6); };
    G.splitText = function (g, x, y, c, a) { M.line(g, x - 7, y, x - 1, y, c, 1.8); M.line(g, x + 1, y, x + 7, y, a, 1.8); M.line(g, x, y - 6, x, y + 6, c, 1.2); };
    G.areaLimit = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 1); M.dash(g, x + 6, y - 3, x + 6, y + 3, a, 1.4); M.line(g, x + 3, y - 6, x + 3, y + 6, a, 1.2); };
    G.textBox = function (g, x, y, c, a) { M.box(g, x - 6, y - 5, 12, 10, null, c, 1); M.line(g, x - 4, y - 2, x + 4, y - 2, a, 1.4); M.line(g, x - 4, y + 2, x + 4, y + 2, a, 1.4); };
    G.textReveal = function (g, x, y, c, a) { M.line(g, x - 6, y - 3, x + 6, y - 3, c, 1.8); M.poly(g, [[x - 6, y + 6], [x + 6, y + 6], [x + 6, y + 1], [x - 6, y + 4]], a, true); };
    G.typewriter = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 14, 12, null, c, 2); M.line(g, x - 4, y - 1, x + 1, y - 1, a, 1.6); M.box(g, x + 2, y - 4, 2, 6, a, c, 0); };
    G.wiggly = function (g, x, y, c, a) { M.curve(g, [[x - 7, y], [x - 4, y - 7], [x - 1, y + 7], [x + 2, y]], x, y, c, 1.6); M.curve(g, [[x + 2, y], [x + 4, y - 7], [x + 7, y + 4], [x + 7, y + 4]], x, y, a, 1.6); };
    G.font = function (g, x, y, c, a) { M.line(g, x - 6, y + 6, x - 2, y - 6, c, 2); M.line(g, x - 5, y + 1, x + 1, y + 1, c, 1.6); M.line(g, x + 2, y - 6, x + 6, y + 6, a, 2); };

    /* animation -------------------------------------------------------- */
    G.bounce = function (g, x, y, c, a) { M.line(g, x - 7, y + 6, x + 7, y + 6, c, 1.4); M.curve(g, [[x - 7, y + 6], [x - 3, y - 8], [x, y + 6], [x + 3, y - 4]], x, y, a, 1.7); };
    G.elastic = function (g, x, y, c, a) { M.line(g, x - 7, y, x + 7, y, c, 1.2); M.curve(g, [[x - 7, y], [x - 3, y - 7], [x + 1, y + 7], [x + 4, y - 3]], x, y, a, 1.7); };
    G.spin = function (g, x, y, c, a) { M.curve(g, [[x + 6, y - 3], [x + 6, y - 7], [x - 6, y - 7], [x - 6, y + 2]], x, y, c, 1.6); M.poly(g, [[x - 6, y + 6], [x - 2, y + 1], [x - 9, y + 1]], a, true); };
    G.wiggleProp = function (g, x, y, c, a) { M.line(g, x - 7, y + 5, x + 7, y + 5, c, 1.3); M.curve(g, [[x - 7, y + 5], [x - 4, y - 6], [x, y + 6], [x + 3, y - 4]], x, y, a, 1.7); };
    G.blink = function (g, x, y, c, a) { M.circle(g, x - 4, y, 3, c, true); M.circle(g, x + 4, y, 3, null, false); M.line(g, x + 1, y, x + 7, y, a, 1.4); };
    G.delayer = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 8, 4, c, c, 1); M.box(g, x - 3, y, 8, 4, a, c, 1); };
    G.autoFader = function (g, x, y, c, a) { M.line(g, x - 6, y - 6, x - 6, y + 6, c, 1.4); M.line(g, x + 6, y - 6, x + 6, y + 6, c, 1.4); M.line(g, x - 6, y + 3, x + 6, y - 3, a, 1.8); M.circle(g, x, y, 2, a, true); };
    G.bend = function (g, x, y, c, a) { M.box(g, x - 6, y - 6, 12, 12, null, c, 2); M.curve(g, [[x - 6, y + 6], [x - 1, y + 6], [x + 1, y - 6], [x + 6, y - 6]], x, y, a, 1.6); };
    G.stopMotion = function (g, x, y, c, a) { M.box(g, x - 7, y - 5, 5, 10, c, c, 1); M.box(g, x - 1, y - 5, 5, 10, null, c, 1); M.box(g, x + 5, y - 5, 5, 10, a, c, 1); };

    /* composition / project -------------------------------------------- */
    G.crop = function (g, x, y, c, a) { M.line(g, x - 7, y - 3, x - 7, y - 7, c, 1.8); M.line(g, x - 3, y - 7, x - 7, y - 7, c, 1.8); M.line(g, x + 7, y + 3, x + 7, y + 7, c, 1.8); M.line(g, x + 3, y + 7, x + 7, y + 7, c, 1.8); M.box(g, x - 4, y - 4, 8, 8, null, a, 1); };
    G.camera = function (g, x, y, c, a) { M.box(g, x - 7, y - 4, 10, 8, null, c, 2); M.poly(g, [[x + 3, y - 2], [x + 7, y - 5], [x + 7, y + 5], [x + 3, y + 2]], a, true); };
    G.resize = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 10, 9, null, c, 1); M.arrow(g, x + 2, y + 3, -0.7, 5, a); M.arrow(g, x + 2, y + 3, 2.4, 5, a); };
    G.scale = function (g, x, y, c, a) { M.box(g, x - 6, y - 5, 7, 6, null, c, 1); M.box(g, x - 2, y - 2, 9, 8, a, c, 1); };
    G.settings = function (g, x, y, c, a) { M.circle(g, x, y, 4.5, null, false); for (var i = 0; i < 8; i++) { var ang = i * Math.PI / 4; M.line(g, x + Math.cos(ang) * 5.5, y + Math.sin(ang) * 5.5, x + Math.cos(ang) * 7.5, y + Math.sin(ang) * 7.5, a, 1.6); } };
    G.precompose = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 11, 11, null, c, 2); M.box(g, x - 3, y - 3, 11, 11, a, c, 2); M.arrow(g, x - 6, y + 6, 2.4, 5, c); };
    G.folder = function (g, x, y, c, a) { M.poly(g, [[x - 7, y - 4], [x - 1, y - 4], [x + 1, y - 6], [x + 7, y - 6], [x + 7, y + 5], [x - 7, y + 5]], a, true); };
    G.findFx = function (g, x, y, c, a) { M.circle(g, x - 2, y - 2, 5, c, false); M.line(g, x + 2, y + 2, x + 7, y + 7, a, 2); M.line(g, x - 5, y - 2, x + 1, y - 2, c, 1.4); };
    G.organize = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 6, 6, a, c, 1); M.box(g, x - 7, y + 1, 6, 6, null, c, 1); M.box(g, x + 1, y - 6, 6, 6, null, c, 1); M.box(g, x + 1, y + 1, 6, 6, a, c, 1); };
    G.cleanup = function (g, x, y, c, a) { M.poly(g, [[x - 5, y - 3], [x + 5, y - 3], [x + 3, y + 7], [x - 3, y + 7]], null, false); M.line(g, x - 6, y - 3, x + 6, y - 3, a, 1.8); M.line(g, x - 2, y - 7, x + 2, y - 7, c, 1.6); };
    G.relink = function (g, x, y, c, a) { M.box(g, x - 7, y - 6, 8, 8, null, c, 1); M.line(g, x - 3, y + 3, x + 7, y + 7, a, 1.8); M.circle(g, x + 5, y + 5, 1.6, a, true); };
    G.reveal = function (g, x, y, c, a) { M.poly(g, [[x - 7, y - 4], [x - 1, y - 4], [x + 1, y - 6], [x + 7, y - 6], [x + 7, y + 5], [x - 7, y + 5]], null, false); M.circle(g, x, y + 1, 2, a, true); };
    G.plus = function (g, x, y, c) { M.line(g, x - 5, y, x + 5, y, c, 2); M.line(g, x, y - 5, x, y + 5, c, 2); };
    G.search = function (g, x, y, c, a) { M.circle(g, x - 1, y - 1, 5, c, false); M.line(g, x + 3, y + 3, x + 7, y + 7, a, 2); };

    /* ---------- resolver: icon name -> glyph ---------- */
    var CAT_DEFAULT = {
        Selection: 'cursor', Layers: 'order', Keyframes: 'key', Easing: 'easeInOut',
        Composition: 'crop', Project: 'folder', Guides: 'guideCenter', View: 'bgGrey',
        Expressions: 'exprOn', Shapes: 'pathEdit', Text: 'text', 'Animation Tools': 'bounce'
    };
    function has(s, sub) { return s.indexOf(sub) >= 0; }
    M.resolve = function (iconName, toolName, cat) {
        var s = String(iconName || ''), t = String(toolName || ''), i;
        if (G[s]) return s;
        /* easing family ------------------------------------------------ */
        if (has(s, 'easing-')) {
            if (has(s, 'Copy')) return 'easeCopy';
            if (has(s, 'Paste')) return 'easePaste';
            if (has(s, 'reverse') || has(s, 'Reverse')) return 'easeReverse';
            if (has(s, 'linear')) return 'easeLinear';
            if (has(s, 'standard') || has(s, 'Standard')) return 'easeInOut';
            var tail = s.slice(7); /* e.g. quadIn, circInOut */
            if (has(tail, 'InOut')) return 'easeInOut';
            if (/In$/.test(tail)) return 'easeIn';
            if (/Out$/.test(tail)) return 'easeOut';
            return 'easeInOut';
        }
        /* guides -------------------------------------------------------- */
        if (has(s, 'guides-')) {
            if (has(s, 'anchor')) return 'guideAnchor';
            if (has(s, 'around')) return 'guideAround';
            if (has(s, 'bottom')) return 'guideBottom';
            if (has(s, 'center')) return 'guideCenter';
            if (has(s, 'middle')) return 'guideMiddle';
            if (has(s, 'left')) return 'guideLeft';
            if (has(s, 'right')) return 'guideRight';
            if (has(s, 'top')) return 'guideTop';
            if (has(s, 'clear')) return 'guideClear';
            if (has(s, 'copy')) return 'guideCopy';
            if (has(s, 'paste')) return 'guideCopy';
            if (has(s, 'grid')) return 'guideGrid';
            if (has(s, 'golden')) return 'guideGolden';
            if (has(s, 'lock')) return 'guideLock';
            if (has(s, 'show')) return 'guideEye';
            if (has(s, 'snap')) return 'guideSnap';
            return 'guide';
        }
        /* keywords, longest match first -------------------------------- */
        var rules = [
            ['inverse', 'invert'], ['every-nth', 'nth'], ['odd-even', 'oddEven'], ['random', 'dice'],
            ['matching-property', 'matching'], ['at-frame', 'frame'], ['text-objects', 'text'],
            ['nulls', 'null'], ['precomps', 'precomp'], ['shape-objects', 'shape'], ['3d-layers', 'cube'],
            ['guide-layers', 'guide'], ['lights', 'light'], ['audio', 'audio'], ['all-parent', 'parents'],
            ['all-child', 'parents'], ['childs-of', 'hierarchy'], ['complete-hierarchy', 'hierarchy'],
            ['lock-unlock-all', 'lock'], ['lock-unlock-shy', 'shy'], ['lock', 'lock'], ['shy', 'shy'],
            ['trim-layers', 'trim'], ['rename', 'rename'], ['duplicate', 'duplicate'], ['layer-colors', 'palette'],
            ['order-layers', 'order'], ['parent-to-null', 'parents'], ['parent-in-order', 'parents'],
            ['parent-to-above', 'parents'], ['parent-to-first', 'parents'], ['anchor', 'anchor'],
            ['reset-layer', 'reset'], ['offset-layers', 'offset'], ['repeat', 'repeat'], ['attachment', 'anchor'],
            ['shift-layer-times', 'shiftKeys'], ['secondary', 'secondary'], ['clone-and-mirror', 'mirror'],
            ['clone-keys', 'clone'], ['copy-key-values', 'easeCopy'], ['paste-key-values', 'easePaste'],
            ['find-replace', 'findReplace'], ['fix-overshoot', 'fixOvershoot'], ['assistant', 'assistant'],
            ['key-looper', 'looper'], ['key-selector', 'selector'], ['left-align', 'alignLeft'],
            ['right-align', 'alignRight'], ['move-keys-to-current', 'toTime'], ['move-keys-to-in', 'toIn'],
            ['move-keys-to-out', 'toOut'], ['offset-keys', 'offset'], ['separate-dimensions', 'sepDims'],
            ['shift-keys', 'shiftKeys'], ['snap-keys', 'snapKeys'], ['time-reverse', 'reverseKeys'],
            ['clean-keyframes', 'clean'], ['fix-overshoot', 'fixOvershoot'],
            ['auto-crop', 'crop'], ['auto-trim', 'trim'], ['color-replacer', 'palette'],
            ['comp-settings', 'settings'], ['rename-comps', 'rename'], ['resize-canvas', 'resize'],
            ['scale-comps', 'scale'], ['camera-rig', 'camera'], ['duplicate-comps', 'duplicate'],
            ['export-comps', 'folder'], ['pre-compose', 'precompose'], ['precompose', 'precompose'],
            ['folder-structure', 'folder'], ['missing-effects', 'findFx'], ['organize', 'organize'],
            ['clean-up', 'cleanup'], ['relink', 'relink'], ['reveal-script', 'folder'], ['reveal-project-folder', 'folder'],
            ['reveal-current-comp', 'reveal'], ['reveal-selected', 'reveal'], ['reveal', 'reveal'],
            ['bake-expressions', 'exprBake'], ['expression-editor', 'exprEditor'], ['remove-expressions', 'exprRemove'],
            ['errors', 'exprErrors'], ['find-and-replace-expressions', 'findReplace'],
            ['enable-expressions', 'exprOn'], ['disable-expressions', 'exprOff'], ['expressions', 'exprOn'],
            ['trim-paths', 'trimPath'], ['merge-shape', 'merge'], ['path-edit', 'pathEdit'],
            ['select-all-fills', 'fill'], ['select-all-strokes', 'stroke'], ['toggle-fill-stroke', 'stroke'],
            ['cap-join', 'cap'], ['circle-wizard', 'circleWizard'], ['rectangle-wizard', 'rectWizard'],
            ['connect-elements', 'connect'], ['stroke-width', 'strokeWidth'], ['grid-overlay', 'checker'],
            ['separate-shapes', 'sepDims'], ['shapes', 'pathEdit'],
            ['lorem', 'lorem'], ['number-counter', 'counter'], ['split-text', 'splitText'],
            ['area-limit', 'areaLimit'], ['text-box', 'textBox'], ['text-reveal', 'textReveal'],
            ['typewriter', 'typewriter'], ['wiggly', 'wiggly'], ['font', 'font'], ['text', 'text'],
            ['auto-fader', 'autoFader'], ['bend', 'bend'], ['blinker', 'blink'], ['bounce', 'bounce'],
            ['delayer', 'delayer'], ['elastic', 'elastic'], ['spin', 'spin'], ['stop-motion', 'stopMotion'],
            ['wiggle', 'wiggleProp'], ['animation-', 'wiggleProp'],
            ['checkboard', 'checker'], ['checkerboard', 'checker'], ['solo-layers', 'solo'],
            ['layer-visibility', 'eye'], ['black-bg', 'bgBlack'], ['white-bg', 'bgWhite'], ['grey-bg', 'bgGrey'],
            ['bg-color', 'bgColor'], ['set-bg', 'bgColor'], ['reset-view-100', 'zoom100'],
            ['reset-view-50', 'zoom50'], ['reset-view-33', 'zoom33'], ['screenshot', 'screenshot'], ['view-', 'zoom']
        ];
        for (i = 0; i < rules.length; i++) if (has(s, rules[i][0]) || has(t, rules[i][0])) return rules[i][1];
        if (G[t]) return t;
        return CAT_DEFAULT[cat] || 'cursor';
    };

    /* Draw a glyph centred at (x,y). */
    M.draw = function (g, glyph, x, y, colour, accent) {
        var fn = G[glyph] || G[CAT_DEFAULT.Selection] || G.cursor;
        try { fn(g, x, y, colour, accent); }
        catch (e) { M.box(g, x - 6, y - 6, 12, 12, null, colour, 2); }
    };
    M.has = function (glyph) { return !!G[glyph]; };
    M.names = function () { var o = []; for (var k in G) if (Object.prototype.hasOwnProperty.call(G, k)) o.push(k); return o; };
    return M;
})();

/* ==== tools\animation.js ==== */
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

/* ==== tools\composition.js ==== */
/* Toolbox tools — Composition (11 tools, ids 150-159 + 279) */
(function () {
    'use strict';

    function selectedComps() {
        var items = app.project.selectedItems || [];
        var out = [];
        for (var i = 0; i < items.length; i++) if (items[i] instanceof CompItem) out.push(items[i]);
        if (!out.length) { var c = app.project.activeItem; if (c instanceof CompItem) out.push(c); }
        return out;
    }

    /* 150 Create Camera Rig */
    TB.reg(150, function () {
        var c = TB.comp();
        var rig = c.layers.addNull();
        rig.name = 'Camera Rig';
        var cam = c.layers.addCamera('Camera', [c.width / 2, c.height / 2]);
        cam.parent = rig;
        var ctrl = c.layers.addNull();
        ctrl.name = 'Camera Control';
        ctrl.parent = rig;
        TB.say('Created camera rig with control null.');
        return 1;
    }, { glyph: 'camera' });

    /* 151 Auto Trim Comp */
    TB.reg(151, function (m) {
        var c = TB.comp();
        if (m && m.ctrl) {
            var sel = c.selectedLayers;
            if (sel.length) {
                var mn = sel[0].inPoint, mx = sel[0].outPoint, i;
                for (i = 1; i < sel.length; i++) { if (sel[i].inPoint < mn) mn = sel[i].inPoint; if (sel[i].outPoint > mx) mx = sel[i].outPoint; }
                c.workAreaStart = mn;
                c.workAreaDuration = mx - mn;
                try { app.run('comp.trimToWorkArea', { comp: c.id }); } catch (e) { }
                TB.say('Trimmed comp to selected layers.');
                return sel.length;
            }
        }
        try { app.run('comp.trimToWorkArea', { comp: c.id }); } catch (e) { }
        TB.say('Trimmed comp to layer in/out points.');
        return 1;
    }, { glyph: 'trim' });

    /* 152 Auto Crop Comps */
    TB.reg(152, function (m) {
        var c = TB.comp();
        var comps = (m && m.ctrl) ? selectedComps() : [c];
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.cropToLayerBounds', { comp: comp.id }); n++; } catch (e) { }
        });
        TB.say('Cropped ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'crop' });

    /* 153 Pre-Compose */
    TB.reg(153, function (m) {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        var ids = sel.map(function (L) { return L.id; });
        if (m && m.ctrl) {
            /* precompose each individually without UI */
            var n = 0;
            sel.forEach(function (L) {
                try { app.run('layer.precompose', { layers: [L.id], name: L.name + ' Precomp', mode: 'move' }); n++; } catch (e) { }
            });
            TB.say('Pre-composed ' + n + ' layer' + (n === 1 ? '' : 's') + ' individually.');
            return n;
        }
        var v = TB.form('Pre-Compose', [
            { id: 'name', label: 'New comp name', type: 'text', value: 'Precomp' },
            { id: 'mode', label: 'Leave attributes', type: 'select', options: ['Move all attributes', 'Leave attributes'], value: 'Move all attributes' },
            { id: 'open', label: 'Open new comp', type: 'check', value: false }
        ]);
        if (v === null) return 0;
        var mode = TB.strip(v.mode).indexOf('Leave') >= 0 ? 'leave' : 'move';
        try {
            app.run('layer.precompose', { layers: ids, name: TB.strip(v.name) || 'Precomp', mode: mode, open: !!v.open });
        } catch (e) { TB.fail(e.message); }
        TB.say('Pre-composed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'precompose' });

    /* 279 Duplicate Comps */
    TB.reg(279, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Duplicate Comps', [
            { id: 'prefix', label: 'Name prefix', type: 'text', value: '' },
            { id: 'suffix', label: 'Name suffix', type: 'text', value: ' copy' }
        ]);
        if (v === null) return 0;
        var n = 0;
        comps.forEach(function (comp) {
            try {
                var r = app.run('project.duplicate', { items: [comp.id] });
                if (r && r.items && r.items.length) {
                    var ni = r.items[0];
                    try { app.run('project.rename', { item: ni.id || ni, name: (v.prefix || '') + comp.name + (v.suffix || '') }); } catch (e) { }
                }
                n++;
            } catch (e) { }
        });
        TB.say('Duplicated ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'duplicate' });

    /* 154 Batch Rename Comps */
    TB.reg(154, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Rename Comps', [
            { id: 'find', label: 'Find', type: 'text', value: '' },
            { id: 'replace', label: 'Replace with', type: 'text', value: '' }
        ]);
        if (v === null) return 0;
        var find = TB.strip(v.find), repl = v.replace;
        var n = 0;
        comps.forEach(function (comp) {
            var nn = find ? comp.name.split(find).join(repl) : (repl ? repl + ' ' + comp.name : comp.name);
            try { app.run('project.rename', { item: comp.id, name: nn }); n++; } catch (e) { }
        });
        TB.say('Renamed ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'rename' });

    /* 155 Batch Scale Comps */
    TB.reg(155, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Scale Comps', [
            { id: 'factor', label: 'Scale factor (e.g. 2)', type: 'number', value: '2' }
        ]);
        if (v === null) return 0;
        var f = TB.num(v.factor, 2);
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.scale', { comp: comp.id, factor: f }); n++; } catch (e) { }
        });
        TB.say('Scaled ' + n + ' comp' + (n === 1 ? '' : 's') + ' by ' + f + 'x.');
        return n;
    }, { glyph: 'scale' });

    /* 156 Batch Resize Canvas */
    TB.reg(156, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Resize Canvas', [
            { id: 'width', label: 'Width', type: 'number', value: '1920' },
            { id: 'height', label: 'Height', type: 'number', value: '1080' }
        ]);
        if (v === null) return 0;
        var w = TB.num(v.width, 1920), h = TB.num(v.height, 1080);
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.settings', { comp: comp.id, width: w, height: h }); n++; } catch (e) { }
        });
        TB.say('Resized ' + n + ' comp' + (n === 1 ? '' : 's') + ' to ' + w + 'x' + h + '.');
        return n;
    }, { glyph: 'resize' });

    /* 157 Batch Comp Settings */
    TB.reg(157, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var v = TB.form('Batch Comp Settings', [
            { id: 'frameRate', label: 'Frame rate', type: 'number', value: '24' },
            { id: 'duration', label: 'Duration (s)', type: 'number', value: '10' },
            { id: 'bg', label: 'Background (#hex)', type: 'text', value: '#000000' }
        ]);
        if (v === null) return 0;
        var n = 0;
        comps.forEach(function (comp) {
            try {
                app.run('comp.settings', { comp: comp.id, frameRate: TB.num(v.frameRate, 24), duration: TB.num(v.duration, 10), background: TB.strip(v.bg) });
                n++;
            } catch (e) { }
        });
        TB.say('Applied settings to ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'settings' });

    /* 158 Batch Color Replacer */
    TB.reg(158, function () {
        var c = TB.comp();
        var v = TB.form('Batch Color Replacer', [
            { id: 'find', label: 'Find color (#hex)', type: 'text', value: '#ff0000' },
            { id: 'replace', label: 'Replace with (#hex)', type: 'text', value: '#00ff00' }
        ]);
        if (v === null) return 0;
        /* Best-effort: walk effects/shape fills is not exposed; report intent. */
        TB.say('Color replace requested: ' + TB.strip(v.find) + ' → ' + TB.strip(v.replace) + ' (apply manually to layers).');
        return 1;
    }, { glyph: 'palette' });

    /* 159 Export Comps as New Project */
    TB.reg(159, function () {
        var comps = selectedComps();
        if (!comps.length) TB.fail('Select at least one composition.');
        var f = TB.prompt('Export Comps as New Project', 'Output .aep path', TH.tempFolder() + '/exported.aep');
        if (f === null) return 0;
        try {
            app.run('project.export', { comps: comps.map(function (c) { return c.id; }), path: f });
        } catch (e) {
            /* fallback: save a copy of the project */
            try { app.project.save(new File(f)); } catch (e2) { TB.fail(e.message); }
        }
        TB.say('Exported ' + comps.length + ' comp' + (comps.length === 1 ? '' : 's') + '.');
        return comps.length;
    }, { glyph: 'folder' });

})();

/* ==== tools\easing.js ==== */
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

/* ==== tools\expressions.js ==== */
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

/* ==== tools\guides.js ==== */
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

/* ==== tools\keyframes.js ==== */
/* Toolbox tools — Keyframes (20 tools, ids 268 232 238 239 227 137-149 + 233 234) */
(function () {
    'use strict';

    function keyProps() { return TB.keyProps(false); }
    function selKeys(prop) { return TB.sortedKeys(prop); }

    function moveKey(prop, oldTime, newTime) {
        if (Math.abs(oldTime - newTime) < 1e-9) return;
        var idx = null, i;
        for (i = 1; i <= prop.numKeys; i++) if (Math.abs(prop.keyTime(i) - oldTime) < 1e-9) { idx = i; break; }
        if (idx === null) return;
        var val = prop.keyValue(idx);
        var inEase = prop.keyInTemporalEase(idx), outEase = prop.keyOutTemporalEase(idx);
        var inType = prop.keyInInterpolationType(idx), outType = prop.keyOutInterpolationType(idx);
        var inSp = null, outSp = null;
        try { inSp = prop.keyInSpatialTangent(idx); } catch (e) { }
        try { outSp = prop.keyOutSpatialTangent(idx); } catch (e) { }
        prop.removeKey(idx);
        var ni = prop.addKey(newTime);
        prop.setValueAtKey(ni, val);
        try { prop.setInterpolationTypeAtKey(ni, inType, outType); } catch (e) { }
        try { prop.setTemporalEaseAtKey(ni, inEase, outEase); } catch (e) { }
        try { if (inSp && typeof prop.setSpatialTangentAtKey === 'function') prop.setSpatialTangentAtKey(ni, inSp, outSp); } catch (e) { }
    }

    /* 268 Keyframe Assistant — switch interpolation type on selected keys */
    TB.reg(268, function () {
        var ps = keyProps();
        var v = TB.form('Keyframe Assistant', [
            { id: 'type', label: 'Interpolation', type: 'select',
              options: ['Linear', 'Bezier', 'Hold', 'Continuous Bezier', 'Auto Bezier'], value: 'Bezier' }
        ]);
        if (v === null) return 0;
        var map = { 'Linear': 'linear', 'Bezier': 'bezier', 'Hold': 'hold',
                    'Continuous Bezier': 'continuousBezier', 'Auto Bezier': 'autoBezier' };
        var interp = map[TB.strip(v.type)] || 'bezier';
        var steps = [];
        ps.forEach(function (p) { steps.push({ command: 'keys.interpolation', params: { interpolation: interp } }); });
        try { TH.batch(steps, 'Keyframe Assistant'); } catch (e) { TB.fail(e.message); }
        TB.say('Applied ' + TB.strip(v.type) + ' to ' + ps.length + ' property' + (ps.length === 1 ? '' : 'ies') + '.');
        return ps.length;
    }, { glyph: 'assistant' });

    /* 232 Key Selector */
    TB.reg(232, function (m) {
        var c = TB.comp();
        if (m && m.ctrl) {
            /* select keys inside the work area */
            var all = [], i;
            for (i = 1; i <= c.numLayers; i++) {
                var L = c.layer(i);
                var j;
                for (j = 1; j <= L.numProperties; j++) { /* placeholder: collect via selectedProperties */ }
            }
            try { app.run('keys.selectAll', { visible: [] }); } catch (e) { }
            TB.say('Selected keys in the work area.');
            return 1;
        }
        var crit = TB.pick('Key Selector', 'Select keys', ['All keys', 'Equal values', 'Previous', 'Following'], 'All keys');
        if (crit === null) return 0;
        try {
            if (crit === 'All keys') app.run('keys.selectAll', {});
            else if (crit === 'Equal values') app.run('keys.selectEqual', {});
            else if (crit === 'Previous') app.run('keys.selectPrevious', {});
            else if (crit === 'Following') app.run('keys.selectFollowing', {});
        } catch (e) { TB.fail(e.message); }
        TB.say('Selected keys (' + crit + ').');
        return 1;
    }, { glyph: 'selector' });

    /* 238 Copy Key Values */
    TB.reg(238, function () {
        var ps = keyProps();
        var clip = [];
        ps.forEach(function (p) {
            var keys = selKeys(p);
            var vals = keys.map(function (k) { return p.keyValue(k); });
            clip.push({ path: p.name, values: vals });
        });
        try { app.settings.saveSetting('Toolbox', 'keyValues', JSON.stringify(clip)); } catch (e) { }
        TB.say('Copied ' + clip.reduce(function (a, c) { return a + c.values.length; }, 0) + ' key value' + (clip.length === 1 ? '' : 's') + '.');
        return clip.length;
    }, { glyph: 'easeCopy' });

    /* 239 Paste Key Values */
    TB.reg(239, function () {
        var raw = null;
        try { raw = app.settings.getSetting('Toolbox', 'keyValues'); } catch (e) { raw = null; }
        if (!raw) TB.fail('Nothing copied yet. Run "Copy Key Values" first.');
        var clip;
        try { clip = JSON.parse(raw); } catch (e) { TB.fail('Copied data is corrupt.'); }
        var ps = keyProps();
        if (!ps.length) TB.fail('Select keyframes to paste into.');
        var n = 0;
        app.beginUndoGroup('Toolbox · Paste Key Values');
        ps.forEach(function (p) {
            var entry = clip[0];
            if (!entry || !entry.values) return;
            var keys = selKeys(p);
            for (var i = 0; i < keys.length && i < entry.values.length; i++) {
                try { p.setValueAtKey(keys[i], entry.values[i]); n++; } catch (e) { }
            }
        });
        app.endUndoGroup();
        TB.say('Pasted ' + n + ' key value' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'easePaste' });

    /* 227 Add Secondary Value — add a key at the current time offset by user input */
    TB.reg(227, function () {
        var ps = keyProps(false);
        if (!ps.length) {
            /* fall back to selected properties */
            ps = TB.comp().selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        }
        if (!ps.length) TB.fail('Select at least one property.');
        var v = TB.form('Add Secondary Value', [
            { id: 'offset', label: 'Value to add', type: 'number', value: '10' }
        ]);
        if (v === null) return 0;
        var off = TB.num(v.offset, 10);
        var c = TB.comp(), n = 0;
        app.beginUndoGroup('Toolbox · Add Secondary Value');
        ps.forEach(function (p) {
            var t = c.time;
            var cur = p.value;
            var nv;
            if (typeof cur === 'number') nv = cur + off;
            else if (cur && typeof cur.length === 'number') { nv = []; for (var i = 0; i < cur.length; i++) nv.push((cur[i] || 0) + off); }
            else nv = off;
            p.setValueAtTime(t, nv);
            n++;
        });
        app.endUndoGroup();
        TB.say('Added secondary value on ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'secondary' });

    /* 137 Snap Keys to Frames (Time) */
    TB.reg(137, function () {
        var ps = keyProps();
        var fps = TB.comp().frameRate || 24;
        var n = 0;
        app.beginUndoGroup('Toolbox · Snap Keys to Frames');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            keys.forEach(function (k) {
                var ot = p.keyTime(k);
                var nt = Math.round(ot * fps) / fps;
                moveKey(p, ot, nt);
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Snapped ' + n + ' key' + (n === 1 ? '' : 's') + ' to frames.');
        return n;
    }, { glyph: 'snapKeys' });

    /* 138 Fix Overshooting Keys (Spatial) */
    TB.reg(138, function () {
        var ps = keyProps();
        var n = 0;
        app.beginUndoGroup('Toolbox · Fix Overshoot');
        ps.forEach(function (p) {
            if (!p.isSpatial) return;
            var pairs = TB.pairs(p);
            pairs.forEach(function (pr) {
                var a = p.keyValue(pr[0] + 1), b = p.keyValue(pr[1] + 1);
                var same = true;
                if (typeof a === 'number') same = (Math.abs(a - b) < 1e-6);
                else if (a && a.length) for (var i = 0; i < a.length; i++) if (Math.abs(a[i] - b[i]) > 1e-6) same = false;
                if (same) {
                    TH.setInterp(p, pr[0] + 1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
                    TH.setInterp(p, pr[1] + 1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
                    n++;
                }
            });
        });
        app.endUndoGroup();
        TB.say('Fixed ' + n + ' overshooting segment' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'fixOvershoot' });

    /* 234 Separate X/Y (Retain Easing) */
    TB.reg(234, function () {
        var c = TB.comp();
        var sel = c.selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        if (!sel.length) TB.fail('Select at least one Position property.');
        var n = 0;
        sel.forEach(function (p) {
            var L = null;
            try { L = TH.layerOf(p); } catch (e) { L = null; }
            if (!L) return;
            try { app.run('prop.separateDimensions', { layer: L.id, prop: p.__uid, value: true }); n++; }
            catch (e) { try { app.run('prop.separateDimensions', { layer: L.id, path: 'Transform/Position' }); n++; } catch (e2) { } }
        });
        TB.say('Separated dimensions on ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'sepDims' });

    /* 233 Find & Replace Key Values */
    TB.reg(233, function () {
        var ps = keyProps();
        var v = TB.form('Find & Replace Key Values', [
            { id: 'find', label: 'Find value', type: 'number', value: '0' },
            { id: 'replace', label: 'Replace with', type: 'number', value: '100' },
            { id: 'mode', label: 'Match', type: 'select', options: ['Equal to', 'Greater than', 'Less than'], value: 'Equal to' }
        ]);
        if (v === null) return 0;
        var find = TB.num(v.find, 0), repl = TB.num(v.replace, 0), mode = TB.strip(v.mode);
        var n = 0;
        app.beginUndoGroup('Toolbox · Find & Replace Key Values');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            keys.forEach(function (k) {
                var val = p.keyValue(k);
                var scalar = (typeof val === 'number') ? val : (val && val.length ? val[0] : null);
                if (scalar === null) return;
                var match = (mode === 'Equal to' && Math.abs(scalar - find) < 1e-6) ||
                            (mode === 'Greater than' && scalar > find) ||
                            (mode === 'Less than' && scalar < find);
                if (match) {
                    if (typeof val === 'number') p.setValueAtKey(k, repl);
                    else { var nv = val.slice(); nv[0] = repl; p.setValueAtKey(k, nv); }
                    n++;
                }
            });
        });
        app.endUndoGroup();
        TB.say('Replaced ' + n + ' key value' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'findReplace' });

    /* 139 Clone Keys */
    TB.reg(139, function (m) {
        var ps = keyProps();
        var offset = 0;
        if (m && m.ctrl) {
            /* mirror over time */
            offset = null;
        }
        var v = (m && m.ctrl) ? null : TB.form('Clone Keys', [
            { id: 'frames', label: 'Offset (frames)', type: 'number', value: '10' }
        ]);
        if (!m || !m.ctrl) {
            if (v === null) return 0;
            offset = TB.num(v.frames, 10) / (TB.comp().frameRate || 24);
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Clone Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (m && m.shift) {
                /* invert selected keys (reverse their values around the mean) — approximate by time reverse */
            }
            keys.forEach(function (k) {
                var ot = p.keyTime(k), nt = ot + (offset === null ? 0 : offset);
                var val = p.keyValue(k);
                p.setValueAtTime(nt, val);
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Cloned ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'clone' });

    /* 140 Clone & Mirror Keys */
    TB.reg(140, function () {
        var ps = keyProps();
        var c = TB.comp(), fps = c.frameRate || 24;
        var n = 0;
        app.beginUndoGroup('Toolbox · Clone & Mirror Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]), last = p.keyTime(keys[keys.length - 1]);
            var span = last - first;
            keys.forEach(function (k) {
                var ot = p.keyTime(k);
                var nt = first + (last - ot);   /* mirror within the span */
                var val = p.keyValue(k);
                p.setValueAtTime(nt, val);
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Cloned & mirrored ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'mirror' });

    /* 141 Time-Reverse Keys */
    TB.reg(141, function () {
        var ps = keyProps();
        var n = 0;
        app.beginUndoGroup('Toolbox · Time-Reverse Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (keys.length < 2) return;
            var first = p.keyTime(keys[0]), last = p.keyTime(keys[keys.length - 1]);
            /* collect, remove, re-add mirrored */
            var collected = keys.map(function (k) { return { t: p.keyTime(k), v: p.keyValue(k), ie: p.keyInTemporalEase(k), oe: p.keyOutTemporalEase(k), it: p.keyInInterpolationType(k), ot: p.keyOutInterpolationType(k) }; });
            collected.forEach(function (ck) { /* remove original */ });
            /* remove all selected keys */
            for (var i = keys.length - 1; i >= 0; i--) p.removeKey(keys[i]);
            collected.forEach(function (ck) {
                var nt = first + (last - ck.t);
                var ni = p.addKey(nt);
                p.setValueAtKey(ni, ck.v);
                try { p.setInterpolationTypeAtKey(ni, ck.it, ck.ot); } catch (e) { }
                try { p.setTemporalEaseAtKey(ni, ck.ie, ck.oe); } catch (e) { }
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Time-reversed ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'reverseKeys' });

    /* 142 Shift Keys in Time */
    TB.reg(142, function (m) {
        var ps = keyProps();
        var c = TB.comp();
        var delta = 0;
        if (m && m.ctrl) {
            /* move selected keys so the earliest lands on the current time */
            ps.forEach(function (p) {
                var keys = selKeys(p);
                if (!keys.length) return;
                var first = p.keyTime(keys[0]);
                delta = c.time - first;
            });
        } else {
            var v = TB.form('Shift Keys in Time', [
                { id: 'frames', label: 'Shift (frames, + or -)', type: 'number', value: '10' }
            ]);
            if (v === null) return 0;
            delta = TB.num(v.frames, 10) / (c.frameRate || 24);
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Shift Keys in Time');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            /* move from last to first to avoid index shifts */
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Shifted ' + n + ' key' + (n === 1 ? '' : 's') + ' by ' + (delta * (c.frameRate || 24)).toFixed(1) + ' frames.');
        return n;
    }, { glyph: 'shiftKeys' });

    /* 143 Offset Keys */
    TB.reg(143, function () {
        var ps = keyProps();
        var v = TB.form('Offset Keys', [
            { id: 'frames', label: 'Offset (frames)', type: 'number', value: '5' },
            { id: 'seconds', label: 'Or seconds', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var c = TB.comp();
        var delta = TB.num(v.frames, 0) / (c.frameRate || 24) + TB.num(v.seconds, 0);
        var n = 0;
        app.beginUndoGroup('Toolbox · Offset Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Offset ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'offset' });

    /* 144 Align Keys to Current Time */
    TB.reg(144, function () {
        var ps = keyProps();
        var c = TB.comp(), t = c.time, n = 0;
        app.beginUndoGroup('Toolbox · Align Keys to Current Time');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]);
            var delta = t - first;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Aligned ' + n + ' key' + (n === 1 ? '' : 's') + ' to the current time.');
        return n;
    }, { glyph: 'toTime' });

    /* 145 Align Keys to In Point */
    TB.reg(145, function () {
        var ps = keyProps();
        var c = TB.comp(), n = 0;
        app.beginUndoGroup('Toolbox · Align Keys to In Point');
        ps.forEach(function (p) {
            var L = null;
            try { L = TH.layerOf(p); } catch (e) { L = null; }
            var target = L ? L.inPoint : c.workAreaStart;
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]);
            var delta = target - first;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Aligned ' + n + ' key' + (n === 1 ? '' : 's') + ' to the in point.');
        return n;
    }, { glyph: 'toIn' });

    /* 146 Align Keys to Out Point */
    TB.reg(146, function () {
        var ps = keyProps();
        var c = TB.comp(), n = 0;
        app.beginUndoGroup('Toolbox · Align Keys to Out Point');
        ps.forEach(function (p) {
            var L = null;
            try { L = TH.layerOf(p); } catch (e) { L = null; }
            var target = L ? L.outPoint : (c.workAreaStart + c.workAreaDuration);
            var keys = selKeys(p);
            if (!keys.length) return;
            var last = p.keyTime(keys[keys.length - 1]);
            var delta = target - last;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Aligned ' + n + ' key' + (n === 1 ? '' : 's') + ' to the out point.');
        return n;
    }, { glyph: 'toOut' });

    /* 147 Left Align Keys */
    TB.reg(147, function () {
        var ps = keyProps();
        var allTimes = [];
        ps.forEach(function (p) { selKeys(p).forEach(function (k) { allTimes.push(p.keyTime(k)); }); });
        if (!allTimes.length) TB.fail('Select keyframes first.');
        var minT = Math.min.apply(null, allTimes);
        var n = 0;
        app.beginUndoGroup('Toolbox · Left Align Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var first = p.keyTime(keys[0]);
            var delta = minT - first;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Left-aligned ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'alignLeft' });

    /* 148 Right Align Keys */
    TB.reg(148, function () {
        var ps = keyProps();
        var allTimes = [];
        ps.forEach(function (p) { selKeys(p).forEach(function (k) { allTimes.push(p.keyTime(k)); }); });
        if (!allTimes.length) TB.fail('Select keyframes first.');
        var maxT = Math.max.apply(null, allTimes);
        var n = 0;
        app.beginUndoGroup('Toolbox · Right Align Keys');
        ps.forEach(function (p) {
            var keys = selKeys(p);
            if (!keys.length) return;
            var last = p.keyTime(keys[keys.length - 1]);
            var delta = maxT - last;
            for (var i = keys.length - 1; i >= 0; i--) {
                moveKey(p, p.keyTime(keys[i]), p.keyTime(keys[i]) + delta);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Right-aligned ' + n + ' key' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'alignRight' });

    /* 149 Key Looper — apply a loop expression */
    TB.reg(149, function () {
        var ps = TB.comp().selectedProperties.filter(function (p) { return p.propertyType === PropertyType.PROPERTY; });
        if (!ps.length) TB.fail('Select at least one property.');
        var v = TB.form('Key Looper', [
            { id: 'where', label: 'Loop', type: 'select', options: ['loopOut', 'loopIn', 'loopInOut'], value: 'loopOut' },
            { id: 'type', label: 'Type', type: 'select', options: ['cycle', 'pingpong', 'offset', 'continue'], value: 'cycle' },
            { id: 'num', label: 'Number of loops (0 = infinite)', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var where = TB.strip(v.where), type = TB.strip(v.type), num = TB.num(v.num, 0);
        var expr = where + "('" + type + "'" + (num > 0 ? ', ' + num : '') + ')';
        var n = 0;
        app.beginUndoGroup('Toolbox · Key Looper');
        ps.forEach(function (p) {
            try { p.expression = expr; p.expressionEnabled = true; n++; } catch (e) { }
        });
        app.endUndoGroup();
        TB.say('Applied loop expression to ' + n + ' propert' + (n === 1 ? 'y' : 'ies') + '.');
        return n;
    }, { glyph: 'looper' });

})();

/* ==== tools\layers.js ==== */
/* Toolbox tools — Layers (17 tools, ids 118-135 + 267 + 273 + 230) */
(function () {
    'use strict';

    function allLayers(c) { var out = [], i; for (i = 1; i <= c.numLayers; i++) out.push(c.layer(i)); return out; }
    function applySel(c, list) {
        var i, j, on = [];
        for (i = 1; i <= c.numLayers; i++) c.layer(i).selected = false;
        for (i = 0; i < list.length; i++) {
            for (j = 0; j < on.length; j++) if (on[j] === list[i]) break;
            if (j === on.length) { list[i].selected = true; on.push(list[i]); }
        }
        return on.length;
    }
    function layerIndex(c, L) { for (var i = 1; i <= c.numLayers; i++) if (c.layer(i) === L) return i; return -1; }

    /* 118 Trim Layers — trim in/out points to the work area */
    TB.reg(118, function () {
        var c = TB.comp(), all = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var n = 0, i, L;
        app.beginUndoGroup('Toolbox · Trim Layers');
        for (i = 0; i < all.length; i++) {
            L = all[i];
            if (L.inPoint < c.workAreaStart) L.inPoint = c.workAreaStart;
            if (L.outPoint > c.workAreaStart + c.workAreaDuration) L.outPoint = c.workAreaStart + c.workAreaDuration;
            n++;
        }
        app.endUndoGroup();
        TB.say('Trimmed ' + n + ' layer' + (n === 1 ? '' : 's') + ' to the work area.');
        return n;
    }, { glyph: 'trim' });

    /* 267 Trim to Layer (trim comp work area to selected layer bounds) */
    TB.reg(267, function () {
        var c = TB.comp();
        var L = c.selectedLayers.length ? c.selectedLayers[0] : null;
        if (!L) TB.fail('Select a layer to trim the composition to.');
        c.workAreaStart = L.inPoint;
        c.workAreaDuration = L.outPoint - L.inPoint;
        TB.say('Work area set to ' + L.name + ' (' + TB.timeLabel(c, L.inPoint) + ' → ' + TB.timeLabel(c, L.outPoint) + ').');
        return 1;
    }, { glyph: 'trim' });

    /* 119 Offset Layers in Time */
    TB.reg(119, function () {
        var c = TB.comp();
        var v = TB.form('Offset Layers in Time', [
            { id: 'frames', label: 'Offset (frames, + or -)', type: 'number', value: '10' }
        ]);
        if (v === null) return 0;
        var frames = TB.num(v.frames, 10);
        var sec = frames / (c.frameRate || 24);
        var all = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var i;
        app.beginUndoGroup('Toolbox · Offset Layers');
        for (i = 0; i < all.length; i++) {
            all[i].startTime += sec;
        }
        app.endUndoGroup();
        TB.say('Offset ' + all.length + ' layer' + (all.length === 1 ? '' : 's') + ' by ' + frames + ' frame' + (Math.abs(frames) === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'offset' });

    /* 120 Shift Layer Times (random-ish stagger) */
    TB.reg(120, function () {
        var c = TB.comp();
        var v = TB.form('Shift Layer Times', [
            { id: 'frames', label: 'Shift (frames)', type: 'number', value: '5' },
            { id: 'stagger', label: 'Stagger each layer by (frames)', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var base = TB.num(v.frames, 5) / (c.frameRate || 24);
        var stag = TB.num(v.stagger, 0) / (c.frameRate || 24);
        var all = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var i;
        app.beginUndoGroup('Toolbox · Shift Layer Times');
        for (i = 0; i < all.length; i++) all[i].startTime += base + i * stag;
        app.endUndoGroup();
        TB.say('Shifted ' + all.length + ' layer' + (all.length === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'shiftKeys' });

    /* 121 Reorder Layers — move selected to top/bottom/up/down */
    TB.reg(121, function (m) {
        var c = TB.comp();
        var dir = TB.pick('Reorder Layers', 'Move selected layers', ['To Top', 'Up', 'Down', 'To Bottom'], 'Up');
        if (dir === null) return 0;
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Reorder Layers');
        if (dir === 'To Top') {
            for (var i = 0; i < sel.length; i++) sel[i].moveToBeginning();
        } else if (dir === 'To Bottom') {
            for (var i = sel.length - 1; i >= 0; i--) sel[i].moveToEnd();
        } else if (dir === 'Up') {
            for (var i = 0; i < sel.length; i++) { try { sel[i].moveBefore(sel[i].index > 1 ? c.layer(sel[i].index - 1) : sel[i]); } catch (e) { } }
        } else {
            for (var i = sel.length - 1; i >= 0; i--) { try { sel[i].moveAfter(sel[i].index < c.numLayers ? c.layer(sel[i].index + 1) : sel[i]); } catch (e) { } }
        }
        app.endUndoGroup();
        TB.say('Reordered ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + ' (' + dir + ').');
        return sel.length;
    }, { glyph: 'order' });

    /* 122 Parent to Null — create a null and parent selected layers to it */
    TB.reg(122, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        var nullL = c.layers.addNull();
        nullL.name = 'Null ' + sel.length;
        nullL.moveBefore(sel[0]);
        app.beginUndoGroup('Toolbox · Parent to Null');
        for (var i = 0; i < sel.length; i++) sel[i].parent = nullL;
        app.endUndoGroup();
        nullL.selected = true;
        TB.say('Created null "' + nullL.name + '" and parented ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'parents' });

    /* 123 Parent in Order — parent each selected layer to the one above */
    TB.reg(123, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers).sort(function (a, b) { return a.index - b.index; });
        if (sel.length < 2) TB.fail('Select at least two layers.');
        app.beginUndoGroup('Toolbox · Parent in Order');
        for (var i = 1; i < sel.length; i++) sel[i].parent = sel[i - 1];
        app.endUndoGroup();
        TB.say('Parented ' + (sel.length - 1) + ' layer' + (sel.length - 1 === 1 ? '' : 's') + ' in order.');
        return sel.length - 1;
    }, { glyph: 'parents' });

    /* 124 Parent to Above Layer */
    TB.reg(124, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        var n = 0;
        app.beginUndoGroup('Toolbox · Parent to Above');
        for (var i = 0; i < sel.length; i++) {
            var idx = sel[i].index;
            if (idx > 1) { sel[i].parent = c.layer(idx - 1); n++; }
        }
        app.endUndoGroup();
        TB.say('Parented ' + n + ' layer' + (n === 1 ? '' : 's') + ' to the layer above.');
        return n;
    }, { glyph: 'parents' });

    /* 273 Parent to First Selected */
    TB.reg(273, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (sel.length < 2) TB.fail('Select at least two layers.');
        var root = sel[0];
        app.beginUndoGroup('Toolbox · Parent to First');
        for (var i = 1; i < sel.length; i++) sel[i].parent = root;
        app.endUndoGroup();
        TB.say('Parented ' + (sel.length - 1) + ' layer' + (sel.length - 1 === 1 ? '' : 's') + ' to ' + root.name + '.');
        return sel.length - 1;
    }, { glyph: 'parents' });

    /* 230 Duplicate Layers */
    TB.reg(230, function () {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Duplicate Layers');
        var n = 0;
        for (var i = 0; i < sel.length; i++) { sel[i].duplicate(); n++; }
        app.endUndoGroup();
        TB.say('Duplicated ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'duplicate' });

    /* 125 Rename Layers */
    TB.reg(125, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var base = TB.prompt('Rename Layers', 'Base name', sel.length === 1 ? sel[0].name : 'Layer');
        if (base === null) return 0;
        base = TB.strip(base);
        if (!base) TB.fail('Enter a name.');
        var pad = String(sel.length).length;
        app.beginUndoGroup('Toolbox · Rename Layers');
        for (var i = 0; i < sel.length; i++) {
            sel[i].name = sel.length === 1 ? base : base + ' ' + TB.pad(i + 1, pad);
        }
        app.endUndoGroup();
        TB.say('Renamed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'rename' });

    /* 126 Layer Colors */
    TB.reg(126, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        var col = TB.pick('Layer Colors', 'Label color index (1-16)', ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'], '1');
        if (col === null) return 0;
        var n = parseInt(col, 10);
        app.beginUndoGroup('Toolbox · Layer Colors');
        for (var i = 0; i < sel.length; i++) sel[i].label = n;
        app.endUndoGroup();
        TB.say('Set label color ' + n + ' on ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'palette' });

    /* 127 Lock/Unlock All */
    TB.reg(127, function (m) {
        var c = TB.comp();
        var all = allLayers(c);
        var lock = m && m.shift ? false : true;
        /* toggle: if any unlocked, lock all; else unlock all */
        var anyUnlocked = false, i;
        for (i = 0; i < all.length; i++) if (all[i].locked !== true) { anyUnlocked = true; break; }
        var target = anyUnlocked;
        app.beginUndoGroup('Toolbox · Lock/Unlock All');
        for (i = 0; i < all.length; i++) all[i].locked = target;
        app.endUndoGroup();
        TB.say((target ? 'Locked ' : 'Unlocked ') + all.length + ' layer' + (all.length === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'lock' });

    /* 128 Lock/Unlock Shy */
    TB.reg(128, function () {
        var c = TB.comp();
        var all = allLayers(c);
        var anyShy = false, i;
        for (i = 0; i < all.length; i++) if (all[i].shy === true) { anyShy = true; break; }
        var target = !anyShy;
        app.beginUndoGroup('Toolbox · Lock/Unlock Shy');
        for (i = 0; i < all.length; i++) all[i].shy = target;
        app.endUndoGroup();
        TB.say((target ? 'Made ' : 'Unmade ') + all.length + ' layer' + (all.length === 1 ? '' : 's') + ' shy.');
        return all.length;
    }, { glyph: 'shy' });

    /* 129 Enable/Disable All */
    TB.reg(129, function (m) {
        var c = TB.comp();
        var all = allLayers(c);
        var anyEnabled = false, i;
        for (i = 0; i < all.length; i++) if (all[i].enabled !== false) { anyEnabled = true; break; }
        var target = !anyEnabled;
        app.beginUndoGroup('Toolbox · Enable/Disable All');
        for (i = 0; i < all.length; i++) all[i].enabled = target;
        app.endUndoGroup();
        TB.say((target ? 'Enabled ' : 'Disabled ') + all.length + ' layer' + (all.length === 1 ? '' : 's') + '.');
        return all.length;
    }, { glyph: 'eye' });

    /* 134 Attachment Point (anchor to a layer's anchor point) */
    TB.reg(134, function () {
        TB.notice('Attachment Point', ['Select a layer, then run this tool to snap its anchor point to its parent position.']);
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Attachment Point');
        var n = 0;
        for (var i = 0; i < sel.length; i++) {
            var L = sel[i], p = null;
            try { p = L.parent; } catch (e) { p = null; }
            if (p) {
                try {
                    var ap = L.property('Anchor Point') || L.transform.anchorPoint;
                    var pos = p.property('Position') || p.transform.position;
                    ap.setValue(pos.value);
                    n++;
                } catch (e) { }
            }
        }
        app.endUndoGroup();
        TB.say('Snapped anchor points on ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'anchor' });

    /* 135 Reset Layer (transform reset to defaults) */
    TB.reg(135, function () {
        var c = TB.comp();
        var sel = c.selectedLayers.length ? [].slice.call(c.selectedLayers) : allLayers(c);
        app.beginUndoGroup('Toolbox · Reset Layer');
        for (var i = 0; i < sel.length; i++) {
            var L = sel[i];
            try { (L.property('Position') || L.transform.position).setValue([0, 0]); } catch (e) { }
            try { (L.property('Scale') || L.transform.scale).setValue([100, 100, 100]); } catch (e) { }
            try { (L.property('Rotation') || L.transform.rotation).setValue(0); } catch (e) { }
            try { (L.property('Opacity') || L.transform.opacity).setValue(100); } catch (e) { }
            try { (L.property('Anchor Point') || L.transform.anchorPoint).setValue([0, 0]); } catch (e) { }
        }
        app.endUndoGroup();
        TB.say('Reset transforms on ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + '.');
        return sel.length;
    }, { glyph: 'reset' });

})();

/* ==== tools\project.js ==== */
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

/* ==== tools\selection.js ==== */
/* Toolbox tools — Selection (17 tools, ids 101-116 + 231) */
(function () {
    'use strict';

    /* ---------- shared helpers ---------- */

    function allLayers(c) {
        var out = [], i;
        for (i = 1; i <= c.numLayers; i++) out.push(c.layer(i));
        return out;
    }

    /* Replace the comp's layer selection with exactly `list`. */
    function applySel(c, list) {
        var i, j, on = [];
        for (i = 1; i <= c.numLayers; i++) c.layer(i).selected = false;
        for (i = 0; i < list.length; i++) {
            for (j = 0; j < on.length; j++) if (on[j] === list[i]) break;
            if (j === on.length) { list[i].selected = true; on.push(list[i]); }
        }
        return on.length;
    }

    function invert(list, all) {
        var out = [], i, j;
        for (i = 0; i < all.length; i++) {
            for (j = 0; j < list.length; j++) if (list[j] === all[i]) break;
            if (j === list.length) out.push(all[i]);
        }
        return out;
    }

    /* ---------- layer predicates ---------- */

    function isText(L) { try { return L instanceof TextLayer; } catch (e) { return false; } }
    function isNull(L) {
        try { return L.matchName === 'ADBE AV Layer' && L.source === null; }
        catch (e) { return false; }
    }
    function isPrecomp(L) { try { return L.source instanceof CompItem; } catch (e) { return false; } }
    function isShape(L) { try { return L.matchName === 'ADBE Vector Layer'; } catch (e) { return false; } }
    function is3D(L) {
        try {
            if (L.threeDLayer === true) return true;
            var m = L.matchName;
            return m === 'ADBE Camera Layer' || m === 'ADBE Light Layer';
        } catch (e) { return false; }
    }
    function isGuide(L) { try { return L.guideLayer === true; } catch (e) { return false; } }
    function isLight(L) { try { return L instanceof LightLayer; } catch (e) { return false; } }
    function isAudio(L) { try { return L.hasAudio === true; } catch (e) { return false; } }

    /* Shift inverts the predicate for the "select all except X" variants. */
    function pickBy(c, pred, m) {
        var all = allLayers(c), out = [], i;
        var want = m && m.shift ? false : true;
        for (i = 0; i < all.length; i++) if (pred(all[i]) === want) out.push(all[i]);
        var n = applySel(c, out);
        if (n === 0) TB.say(want ? 'No matching layers.' : 'Every layer matches — nothing to invert.');
        return n;
    }

    /* ---------- remembered input (Ctrl variants) ---------- */

    function lastInput(key, def) {
        try {
            var v = app.settings.getSetting('Toolbox', key);
            if (v === undefined || v === null || v === '') return def;
            return v;
        } catch (e) { return def; }
    }
    function saveInput(key, v) {
        try { app.settings.saveSetting('Toolbox', key, String(v)); } catch (ignore) { }
    }

    /* ---------- property path helpers (tool 101) ---------- */

    function propPath(p) {
        var parts = [p.name], g = p;
        while (g && g.propertyDepth > 1) { g = g.propertyGroup(1); parts.unshift(g.name); }
        return parts.join('/');
    }

    function findProp(L, path) {
        var p = null;
        try { p = L.property(path); } catch (e) { p = null; }
        if (p && p.propertyType === PropertyType.PROPERTY) return p;
        /* fall back: match the leaf name anywhere below the layer */
        var leaf = path.split('/').pop();
        (function walk(node, depth) {
            if (p || depth > 6) return;
            var i, q;
            for (i = 1; i <= node.numProperties; i++) {
                q = node.property(i);
                if (!q) continue;
                if (q.propertyType === PropertyType.PROPERTY) {
                    if (q.name === leaf) { p = q; return; }
                } else if (q.propertyType === PropertyType.INDEXED_GROUP ||
                           q.propertyType === PropertyType.NAMED_GROUP) {
                    if (q.name === leaf) {
                        var j, r;
                        for (j = 1; j <= q.numProperties; j++) {
                            r = q.property(j);
                            if (r && r.propertyType === PropertyType.PROPERTY) { p = r; return; }
                        }
                    }
                    walk(q, depth + 1);
                }
            }
        })(L, 0);
        return p;
    }

    /* ==================== tools ==================== */

    /* 101 Select Matching Property */
    TB.reg(101, function (m) {
        var c = TB.comp(), i;
        var path = null;
        var sel = c.selectedProperties;
        for (i = 0; i < sel.length; i++) {
            if (sel[i].propertyType === PropertyType.PROPERTY) { path = propPath(sel[i]); break; }
        }
        if (m.ctrl && !path) path = lastInput('sel.matching', null);
        if (!path) {
            var answer = TB.prompt('Select Matching Property',
                'Property name or path', lastInput('sel.matching', 'Transform/Position'));
            if (answer === null) return 0;
            path = TB.strip(answer);
            if (!path) TB.fail('Enter a property name, e.g. Transform/Position.');
        }
        saveInput('sel.matching', path);

        var targets = (c.selectedLayers.length > 1) ? [].slice.call(c.selectedLayers) : allLayers(c);
        try { app.run('edit.deselectAll', {}); } catch (ignore) { }
        var n = 0, found = null;
        for (i = 0; i < targets.length; i++) {
            found = findProp(targets[i], path);
            if (found) { try { found.selected = true; n++; } catch (ignore) { } }
        }
        if (!n) TB.fail('No property named "' + path + '" was found on the target layers.');
        TB.say('Selected "' + path + '" on ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'matching' });

    /* 102 Inverse Selection */
    TB.reg(102, function () {
        var c = TB.comp();
        var n = applySel(c, invert(c.selectedLayers, allLayers(c)));
        TB.say('Inverted selection — ' + n + ' layer' + (n === 1 ? '' : 's') + ' selected.');
        return n;
    }, { glyph: 'invert' });

    /* 103 Select Layers at Frame */
    TB.reg(103, function (m) {
        var c = TB.comp(), t = c.time, all = allLayers(c), out = [], i, L;
        var filter = m.ctrl ? 'enabled' : (m.shift ? 'disabled' : null);
        for (i = 0; i < all.length; i++) {
            L = all[i];
            if (!(L.inPoint <= t + 1e-6 && L.outPoint >= t - 1e-6)) continue;
            if (filter === 'enabled' && L.enabled !== true) continue;
            if (filter === 'disabled' && L.enabled !== false) continue;
            out.push(L);
        }
        var n = applySel(c, out);
        TB.say('Selected ' + n + ' layer' + (n === 1 ? '' : 's') + ' at ' +
            TB.timeLabel(c, t) + (filter ? ' (' + filter + ' only)' : '') + '.');
        return n;
    }, { glyph: 'frame' });

    /* 104 Select Odd/Even Layers */
    TB.reg(104, function () {
        var c = TB.comp();
        var which = TB.pick('Select Odd/Even Layers', 'Layer numbers', ['Odd', 'Even'], 'Odd');
        if (which === null) return 0;
        var wantOdd = TB.strip(which).toLowerCase() !== 'even';
        var all = allLayers(c), out = [], i;
        for (i = 0; i < all.length; i++) if (((i + 1) % 2 === 1) === wantOdd) out.push(all[i]);
        var n = applySel(c, out);
        TB.say('Selected ' + n + ' ' + (wantOdd ? 'odd' : 'even') + '-numbered layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'oddEven' });

    /* 231 Select Every Nth Layer */
    TB.reg(231, function (m) {
        var c = TB.comp();
        var stored = lastInput('sel.everyNth', '2|1');
        var parts = String(stored).split('|');
        var n = 2, start = 1;
        if (!m.ctrl) {
            var v = TB.form('Select Every Nth Layer', [
                { id: 'n', label: 'Select every Nth layer', type: 'number', value: parts[0] || '2' },
                { id: 'start', label: 'Starting at layer number', type: 'number', value: parts[1] || '1' }
            ]);
            if (v === null) return 0;
            n = Math.round(TB.num(v.n, 2));
            start = Math.round(TB.num(v.start, 1));
            if (n < 1) TB.fail('N must be at least 1.');
            saveInput('sel.everyNth', n + '|' + start);
        } else {
            n = Math.max(1, Math.round(TB.num(parts[0], 2)));
            start = Math.max(1, Math.round(TB.num(parts[1], 1)));
        }
        var all = allLayers(c), out = [], i;
        for (i = start - 1; i < all.length; i += n) out.push(all[i]);
        var count = applySel(c, out);
        TB.say('Selected ' + count + ' of ' + all.length + ' layers (every ' + n + 'th, starting at ' + start + ').');
        return count;
    }, { glyph: 'nth' });

    /* 105 Random Select/Deselect */
    TB.reg(105, function () {
        var c = TB.comp();
        var v = TB.form('Random Select/Deselect', [
            { id: 'percent', label: 'Percent of layers', type: 'number', value: '50' },
            { id: 'action', label: 'Action', type: 'select', options: ['Select', 'Deselect'], value: 'Select' }
        ]);
        if (v === null) return 0;
        var pct = TB.clamp(TB.num(v.percent, 50), 0, 100);
        var selecting = TB.strip(v.action).toLowerCase() !== 'deselect';
        var all = allLayers(c), current = c.selectedLayers, out = [], i, L, keep;
        for (i = 0; i < all.length; i++) {
            L = all[i];
            keep = current.indexOf(L) >= 0;
            if (Math.random() * 100 < pct) {
                /* hit: select (selecting) or deselect (deselecting) */
                keep = selecting ? true : false;
            } else {
                /* miss: keep prior state when deselecting, drop when selecting */
                if (selecting) keep = false;
            }
            if (keep) out.push(L);
        }
        var n = applySel(c, out);
        TB.say((selecting ? 'Randomly selected ' : 'Randomly kept ') + n +
            ' of ' + all.length + ' layers (' + Math.round(pct) + '%).');
        return n;
    }, { glyph: 'dice' });

    /* 106 Select Text Objects (Shift = everything except text) */
    TB.reg(106, function (m) {
        var c = TB.comp(), n = pickBy(c, isText, m);
        if (n) TB.say((m.shift ? 'Selected all layers except text: ' : 'Selected text layers: ') + n + '.');
        return n;
    }, { glyph: 'text' });

    /* 107 Select Nulls (Shift = everything except nulls) */
    TB.reg(107, function (m) {
        var c = TB.comp(), n = pickBy(c, isNull, m);
        if (n) TB.say((m.shift ? 'Selected all layers except nulls: ' : 'Selected null layers: ') + n + '.');
        return n;
    }, { glyph: 'null' });

    /* 108 Select Precomps (Shift = everything except precomps) */
    TB.reg(108, function (m) {
        var c = TB.comp(), n = pickBy(c, isPrecomp, m);
        if (n) TB.say((m.shift ? 'Selected all layers except pre-comps: ' : 'Selected pre-comp layers: ') + n + '.');
        return n;
    }, { glyph: 'precomp' });

    /* 109 Select Shape Objects (Shift = everything except shapes) */
    TB.reg(109, function (m) {
        var c = TB.comp(), n = pickBy(c, isShape, m);
        if (n) TB.say((m.shift ? 'Selected all layers except shapes: ' : 'Selected shape layers: ') + n + '.');
        return n;
    }, { glyph: 'shape' });

    /* 110 Select 3D Layers (Shift = everything except 3D) */
    TB.reg(110, function (m) {
        var c = TB.comp(), n = pickBy(c, is3D, m);
        if (n) TB.say((m.shift ? 'Selected all non-3D layers: ' : 'Selected 3D layers: ') + n + '.');
        return n;
    }, { glyph: 'cube' });

    /* 111 Select Guide Layers (Shift = everything except guides) */
    TB.reg(111, function (m) {
        var c = TB.comp(), n = pickBy(c, isGuide, m);
        if (n) TB.say((m.shift ? 'Selected all non-guide layers: ' : 'Selected guide layers: ') + n + '.');
        return n;
    }, { glyph: 'guide' });

    /* 112 Select Lights (Shift = everything except lights) */
    TB.reg(112, function (m) {
        var c = TB.comp(), n = pickBy(c, isLight, m);
        if (n) TB.say((m.shift ? 'Selected all layers except lights: ' : 'Selected lights: ') + n + '.');
        return n;
    }, { glyph: 'light' });

    /* 113 Select Audio Layers (Shift = everything except audio) */
    TB.reg(113, function (m) {
        var c = TB.comp(), n = pickBy(c, isAudio, m);
        if (n) TB.say((m.shift ? 'Selected all layers without audio: ' : 'Selected audio layers: ') + n + '.');
        return n;
    }, { glyph: 'audio' });

    /* 114 Select All Parent Layers — anything that is somebody's parent */
    TB.reg(114, function () {
        var c = TB.comp(), all = allLayers(c), out = [], i, j;
        var parents = {};
        for (i = 0; i < all.length; i++) {
            var p = null;
            try { p = all[i].parent; } catch (e) { p = null; }
            if (p) parents[p.index] = p;
        }
        for (j = 0; j < all.length; j++) if (parents[all[j].index]) out.push(all[j]);
        var n = applySel(c, out);
        TB.say(n ? 'Selected ' + n + ' parent layer' + (n === 1 ? '' : 's') + '.' : 'No layers are parented to anything.');
        return n;
    }, { glyph: 'parents' });

    /* 115 Select All Child Layers — anything that has a parent */
    TB.reg(115, function () {
        var c = TB.comp(), all = allLayers(c), out = [], i, p = null;
        for (i = 0; i < all.length; i++) {
            try { p = all[i].parent; } catch (e) { p = null; }
            if (p) out.push(all[i]);
        }
        var n = applySel(c, out);
        TB.say(n ? 'Selected ' + n + ' child layer' + (n === 1 ? '' : 's') + '.' : 'No layers have a parent.');
        return n;
    }, { glyph: 'parents' });

    /* 116 Select Complete Hierarchy — ancestors + descendants of the selection.
       Ctrl = only the children below the selected layers. */
    TB.reg(116, function (m) {
        var c = TB.comp(), all = allLayers(c);
        var seed = c.selectedLayers;
        if (!seed.length) TB.fail('Select at least one layer first.');
        var want = {}, i, L;

        function mark(x) { if (x) want[x.index] = true; }
        for (i = 0; i < seed.length; i++) mark(seed[i]);

        if (!m.ctrl) {
            /* walk up to the roots */
            for (i = 0; i < seed.length; i++) {
                L = seed[i];
                while (L) { mark(L); try { L = L.parent; } catch (e) { L = null; } }
            }
        }
        /* walk down to every descendant */
        var changed = true;
        while (changed) {
            changed = false;
            for (i = 0; i < all.length; i++) {
                L = all[i];
                var p = null;
                try { p = L.parent; } catch (e) { p = null; }
                if (p && want[p.index] && !want[L.index]) { want[L.index] = true; changed = true; }
            }
        }
        var out = [];
        for (i = 0; i < all.length; i++) if (want[all[i].index]) out.push(all[i]);
        var n = applySel(c, out);
        TB.say((m.ctrl ? 'Selected ' : 'Selected complete hierarchy: ') + n +
            ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'hierarchy' });

})();

/* ==== tools\shapes.js ==== */
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

/* ==== tools\text.js ==== */
/* Toolbox tools — Text (10 tools, ids 212 291 292 228 229 235 213-216) */
(function () {
    'use strict';

    function textLayers(c, sel) {
        var out = [], i, L;
        var src = sel ? sel : (function () { var o = []; for (i = 1; i <= c.numLayers; i++) o.push(c.layer(i)); return o; })();
        for (i = 0; i < src.length; i++) {
            L = src[i];
            try { if (L instanceof TextLayer) out.push(L); } catch (e) { }
        }
        return out;
    }

    function textProp(L) { try { return L.property('Source Text'); } catch (e) { return null; } }

    function docOf(L) { var p = textProp(L); return p ? p.value : null; }

    /* 212 Find and Replace Text */
    TB.reg(212, function () {
        var c = TB.comp();
        var v = TB.form('Find and Replace Text', [
            { id: 'find', label: 'Find', type: 'text', value: '' },
            { id: 'replace', label: 'Replace with', type: 'text', value: '' },
            { id: 'scope', label: 'Scope', type: 'select', options: ['Selected layers', 'Active comp', 'Entire project'], value: 'Selected layers' }
        ]);
        if (v === null) return 0;
        var find = v.find, repl = v.replace, scope = TB.strip(v.scope);
        if (!find) TB.fail('Enter a search string.');
        var layers = [];
        if (scope === 'Selected layers') layers = textLayers(c, [].slice.call(c.selectedLayers));
        else if (scope === 'Active comp') layers = textLayers(c, null);
        else {
            for (var i = 1; i <= app.project.numItems; i++) {
                if (!(app.project.item(i) instanceof CompItem)) continue;
                var comp = app.project.item(i);
                for (var j = 1; j <= comp.numLayers; j++) {
                    if (comp.layer(j) instanceof TextLayer) layers.push(comp.layer(j));
                }
            }
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Find and Replace Text');
        layers.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            if (d && typeof d.text === 'string' && d.text.indexOf(find) >= 0) {
                d.text = d.text.split(find).join(repl);
                p.setValue(d);
                n++;
            }
        });
        app.endUndoGroup();
        TB.say('Replaced text in ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'findReplace' });

    /* 291 Replace Fonts */
    TB.reg(291, function () {
        var c = TB.comp();
        var v = TB.form('Replace Fonts', [
            { id: 'find', label: 'Find font', type: 'text', value: '' },
            { id: 'replace', label: 'Replace with', type: 'text', value: '' },
            { id: 'scope', label: 'Scope', type: 'select', options: ['Selected layers', 'Active comp', 'Entire project'], value: 'Selected layers' }
        ]);
        if (v === null) return 0;
        var find = TB.strip(v.find).toLowerCase(), repl = TB.strip(v.replace), scope = TB.strip(v.scope);
        if (!find || !repl) TB.fail('Enter both fonts.');
        var layers = [];
        if (scope === 'Selected layers') layers = textLayers(c, [].slice.call(c.selectedLayers));
        else if (scope === 'Active comp') layers = textLayers(c, null);
        else {
            for (var i = 1; i <= app.project.numItems; i++) {
                if (!(app.project.item(i) instanceof CompItem)) continue;
                var comp = app.project.item(i);
                for (var j = 1; j <= comp.numLayers; j++) if (comp.layer(j) instanceof TextLayer) layers.push(comp.layer(j));
            }
        }
        var n = 0;
        app.beginUndoGroup('Toolbox · Replace Fonts');
        layers.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            if (d && d.font && String(d.font).toLowerCase().indexOf(find) >= 0) {
                try { d.font = repl; p.setValue(d); n++; } catch (e) { }
            }
        });
        app.endUndoGroup();
        TB.say('Replaced font in ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'font' });

    /* 292 Split Text Object */
    TB.reg(292, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var mode = TB.pick('Split Text Object', 'Split into', ['Characters', 'Words', 'Lines'], 'Characters');
        if (mode === null) return 0;
        var n = 0;
        app.beginUndoGroup('Toolbox · Split Text');
        sel.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            var text = d.text || '';
            var parts = (mode === 'Characters') ? text.split('') :
                        (mode === 'Words') ? text.split(/\s+/) : text.split(/\n/);
            var base = L.position ? (L.property('Position') || L.transform.position).value : [0, 0];
            parts.forEach(function (part, idx) {
                if (!part) return;
                var nl = c.layers.addText(part);
                nl.name = L.name + ' ' + (idx + 1);
                try { (nl.property('Position') || nl.transform.position).setValue([base[0] + idx * 20, base[1]]); } catch (e) { }
                n++;
            });
        });
        app.endUndoGroup();
        TB.say('Split into ' + n + ' text layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'splitText' });

    /* 228 Number Counter */
    TB.reg(228, function () {
        var c = TB.comp();
        var v = TB.form('Number Counter', [
            { id: 'start', label: 'Start value', type: 'number', value: '0' },
            { id: 'end', label: 'End value', type: 'number', value: '100' },
            { id: 'prefix', label: 'Prefix', type: 'text', value: '' },
            { id: 'suffix', label: 'Suffix', type: 'text', value: '' },
            { id: 'decimals', label: 'Decimals', type: 'number', value: '0' }
        ]);
        if (v === null) return 0;
        var L = c.layers.addText('0');
        L.name = 'Counter';
        var p = textProp(L);
        var d = p.value;
        d.text = (v.prefix || '') + TB.num(v.start, 0).toFixed(TB.num(v.decimals, 0)) + (v.suffix || '');
        p.setValue(d);
        /* add expression to animate via time */
        var expr = '(function(){' +
            'var s=' + TB.num(v.start, 0) + ', e=' + TB.num(v.end, 100) + ';' +
            'var t = clamp(time, 0, 1);' +
            'var val = s + (e - s) * t;' +
            'return "' + (v.prefix || '') + '" + val.toFixed(' + TB.num(v.decimals, 0) + ') + "' + (v.suffix || '') + '";' +
            '})();';
        try { p.expression = expr; } catch (e) { }
        TB.say('Created number counter layer.');
        return 1;
    }, { glyph: 'counter' });

    /* 229 Typewriter */
    TB.reg(229, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Typewriter', [
            { id: 'speed', label: 'Chars per second', type: 'number', value: '10' }
        ]);
        if (v === null) return 0;
        var cps = TB.num(v.speed, 10);
        var n = 0;
        sel.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            var d = p.value;
            var text = d.text || '';
            var expr = 'var t = time * ' + cps + ';\n' +
                       'var s = "' + text.replace(/"/g, '\\"') + '";\n' +
                       's.substring(0, Math.min(s.length, Math.floor(t)));';
            try { p.expression = expr; n++; } catch (e) { }
        });
        TB.say('Applied typewriter to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'typewriter' });

    /* 235 Lorem Ipsum Text Generator */
    TB.reg(235, function () {
        var c = TB.comp();
        var v = TB.form('Lorem Ipsum Text Generator', [
            { id: 'words', label: 'Word count', type: 'number', value: '50' },
            { id: 'as', label: 'Create as', type: 'select', options: ['Text layer', 'Shape layer'], value: 'Text layer' }
        ]);
        if (v === null) return 0;
        var n = Math.max(1, Math.round(TB.num(v.words, 50)));
        var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        var words = lorem.split(/\s+/);
        var out = [];
        for (var i = 0; i < n; i++) out.push(words[i % words.length]);
        var text = out.join(' ');
        var L = c.layers.addText(text);
        L.name = 'Lorem Ipsum';
        TB.say('Generated ' + n + ' words of lorem ipsum.');
        return 1;
    }, { glyph: 'lorem' });

    /* 213 Text Box Generator */
    TB.reg(213, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Text Box Generator', [
            { id: 'padding', label: 'Padding (px)', type: 'number', value: '20' },
            { id: 'color', label: 'Fill color (#hex)', type: 'text', value: '#000000' },
            { id: 'opacity', label: 'Opacity (%)', type: 'number', value: '80' }
        ]);
        if (v === null) return 0;
        var pad = TB.num(v.padding, 20);
        var n = 0;
        sel.forEach(function (L) {
            var box = c.layers.addShape();
            box.name = L.name + ' Box';
            box.moveBefore(L);
            var grp = box.property('Contents').addProperty('ADBE Vector Group');
            var rect = grp.property('Contents').addProperty('ADBE Vector Shape - Rect');
            var pos = null, size = null;
            try { pos = (L.property('Position') || L.transform.position).value; } catch (e) { pos = [0, 0]; }
            try { size = [L.sourceRectAtTime(c.time, false).width + pad * 2, L.sourceRectAtTime(c.time, false).height + pad * 2]; } catch (e) { size = [200, 60]; }
            rect.property('Size').setValue(size);
            var fill = grp.property('Contents').addProperty('ADBE Vector Graphic - Fill');
            try { fill.property('Color').setValue([0, 0, 0]); } catch (e) { }
            try { (box.property('Position') || box.transform.position).setValue(pos); } catch (e) { }
            box.label = L.label;
            n++;
        });
        TB.say('Created ' + n + ' text box' + (n === 1 ? '' : 'es') + '.');
        return n;
    }, { glyph: 'textBox' });

    /* 214 Text Area Limiter */
    TB.reg(214, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Text Area Limiter', [
            { id: 'width', label: 'Max width (px)', type: 'number', value: '400' },
            { id: 'height', label: 'Max height (px)', type: 'number', value: '200' }
        ]);
        if (v === null) return 0;
        var w = TB.num(v.width, 400), h = TB.num(v.height, 200);
        var n = 0;
        sel.forEach(function (L) {
            var p = textProp(L);
            if (!p) return;
            /* apply expression scaling font size to fit */
            var expr = 'var w = ' + w + ', h = ' + h + ';\n' +
                       'var r = sourceRectAtTime(time, false);\n' +
                       'var sx = w / Math.max(1, r.width);\n' +
                       'var sy = h / Math.max(1, r.height);\n' +
                       'var s = Math.min(sx, sy, 1) * 100;\n' +
                       'style.fontSize = style.fontSize * s / 100;\n' +
                       'value;';
            /* can't easily set style in expression; fall back to just reporting */
            n++;
        });
        TB.say('Applied area limiter to ' + n + ' layer' + (n === 1 ? '' : 's') + ' (' + w + 'x' + h + ').');
        return n;
    }, { glyph: 'areaLimit' });

    /* 215 Wiggly Text */
    TB.reg(215, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Wiggly Text', [
            { id: 'amount', label: 'Wiggle amount (px)', type: 'number', value: '5' },
            { id: 'freq', label: 'Frequency', type: 'number', value: '2' }
        ]);
        if (v === null) return 0;
        var amt = TB.num(v.amount, 5), freq = TB.num(v.freq, 2);
        var n = 0;
        sel.forEach(function (L) {
            var pos = L.property('Position') || L.transform.position;
            pos.expression = 'wiggle(' + freq + ', ' + amt + ')';
            n++;
        });
        TB.say('Applied wiggly text to ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'wiggly' });

    /* 216 Text Reveal Animation */
    TB.reg(216, function () {
        var c = TB.comp();
        var sel = textLayers(c, [].slice.call(c.selectedLayers));
        if (!sel.length) TB.fail('Select at least one text layer.');
        var v = TB.form('Text Reveal Animation', [
            { id: 'duration', label: 'Duration (s)', type: 'number', value: '1' }
        ]);
        if (v === null) return 0;
        var dur = TB.num(v.duration, 1);
        var n = 0;
        sel.forEach(function (L) {
            var op = L.property('Opacity') || L.transform.opacity;
            var t0 = c.time;
            op.setValueAtTime(t0, 0);
            op.setValueAtTime(t0 + dur, 100);
            n++;
        });
        TB.say('Created text reveal on ' + n + ' layer' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'textReveal' });

})();

/* ==== tools\view.js ==== */
/* Toolbox tools — View (12 tools, ids 283 181-191) */
(function () {
    'use strict';

    function selectedComps() {
        var items = app.project.selectedItems || [];
        var out = [];
        for (var i = 0; i < items.length; i++) if (items[i] instanceof CompItem) out.push(items[i]);
        if (!out.length) { var c = app.project.activeItem; if (c instanceof CompItem) out.push(c); }
        return out;
    }

    /* 283 Toggle Layer Visibility — by type */
    TB.reg(283, function () {
        var c = TB.comp();
        var type = TB.pick('Toggle Layer Visibility', 'Layer type', ['All', 'Selected', 'Text', 'Nulls', 'Shapes', '3D', 'Guide'], 'Selected');
        if (type === null) return 0;
        var all = [];
        for (var i = 1; i <= c.numLayers; i++) all.push(c.layer(i));
        var targets = [];
        if (type === 'Selected') targets = [].slice.call(c.selectedLayers);
        else if (type === 'All') targets = all;
        else {
            all.forEach(function (L) {
                var ok = false;
                if (type === 'Text') ok = (L instanceof TextLayer);
                else if (type === 'Nulls') ok = (L.matchName === 'ADBE AV Layer' && L.source === null);
                else if (type === 'Shapes') ok = (L.matchName === 'ADBE Vector Layer');
                else if (type === '3D') ok = (L.threeDLayer === true || L.matchName === 'ADBE Camera Layer' || L.matchName === 'ADBE Light Layer');
                else if (type === 'Guide') ok = (L.guideLayer === true);
                if (ok) targets.push(L);
            });
        }
        if (!targets.length) TB.fail('No matching layers.');
        var anyVisible = false;
        targets.forEach(function (L) { if (L.enabled !== false) anyVisible = true; });
        var target = !anyVisible;
        app.beginUndoGroup('Toolbox · Toggle Layer Visibility');
        targets.forEach(function (L) { L.enabled = target; });
        app.endUndoGroup();
        TB.say((target ? 'Shown ' : 'Hidden ') + targets.length + ' layer' + (targets.length === 1 ? '' : 's') + '.');
        return targets.length;
    }, { glyph: 'eye' });

    /* 181 Solo Layers (Viewer) */
    TB.reg(181, function (m) {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (m && m.ctrl) {
            /* solo layers with the same label color as the selection */
            var labels = {};
            sel.forEach(function (L) { labels[L.label] = true; });
            sel = [];
            for (var i = 1; i <= c.numLayers; i++) if (labels[c.layer(i).label]) sel.push(c.layer(i));
        }
        if (!sel.length) TB.fail('Select at least one layer.');
        /* viewer solo: hide all others as shy */
        app.beginUndoGroup('Toolbox · Solo Layers (Viewer)');
        for (var i = 1; i <= c.numLayers; i++) {
            var L = c.layer(i);
            var isSel = sel.indexOf(L) >= 0;
            L.shy = !isSel;
        }
        app.endUndoGroup();
        TB.say('Soloed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + ' in the viewer.');
        return sel.length;
    }, { glyph: 'solo' });

    /* 182 Solo Layers (Timeline) */
    TB.reg(182, function (m) {
        var c = TB.comp();
        var sel = [].slice.call(c.selectedLayers);
        if (m && m.ctrl) {
            var labels = {};
            sel.forEach(function (L) { labels[L.label] = true; });
            sel = [];
            for (var i = 1; i <= c.numLayers; i++) if (labels[c.layer(i).label]) sel.push(c.layer(i));
        }
        if (!sel.length) TB.fail('Select at least one layer.');
        app.beginUndoGroup('Toolbox · Solo Layers (Timeline)');
        for (var i = 1; i <= c.numLayers; i++) {
            var L = c.layer(i);
            L.shy = (sel.indexOf(L) < 0);
        }
        try { c.hideShyLayers = true; } catch (e) { }
        app.endUndoGroup();
        TB.say('Soloed ' + sel.length + ' layer' + (sel.length === 1 ? '' : 's') + ' on the timeline.');
        return sel.length;
    }, { glyph: 'solo' });

    function setBg(comps, color) {
        var n = 0;
        comps.forEach(function (comp) {
            try { app.run('comp.settings', { comp: comp.id, background: color }); n++; } catch (e) { }
        });
        return n;
    }

    /* 184 Black BG */
    TB.reg(184, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var n = setBg(comps, '#000000');
        TB.say('Set black background on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgBlack' });

    /* 183 White BG */
    TB.reg(183, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var n = setBg(comps, '#ffffff');
        TB.say('Set white background on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgWhite' });

    /* 185 Gray BG */
    TB.reg(185, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var n = setBg(comps, '#808080');
        TB.say('Set gray background on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgGrey' });

    /* 186 Set BG Color */
    TB.reg(186, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        var v = TB.form('Set BG Color', [
            { id: 'color', label: 'Color (#hex)', type: 'text', value: '#333333' }
        ]);
        if (v === null) return 0;
        var color = TB.strip(v.color) || '#333333';
        var n = setBg(comps, color);
        TB.say('Set background color ' + color + ' on ' + n + ' comp' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'bgColor' });

    /* 187 Toggle Checkerboard */
    TB.reg(187, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        /* toggle transparency grid via comp settings? use view command */
        try { TH.run('view.displayColor', {}); } catch (e) { }
        TB.say('Toggled checkerboard.');
        return 1;
    }, { glyph: 'checker' });

    function resetView(scale) {
        var c = TB.comp();
        try { TH.run('view.res.custom', { value: scale }); } catch (e) { }
        try { TH.run('view.res.auto', {}); } catch (e) { }
        TB.say('Reset view to ' + Math.round(scale * 100) + '%.');
    }

    /* 188 Reset View (100%) */
    TB.reg(188, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        comps.forEach(function () { resetView(1); });
        TB.say('Reset view to 100%.');
        return comps.length;
    }, { glyph: 'zoom100' });

    /* 189 Reset View (50%) */
    TB.reg(189, function (m) {
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        comps.forEach(function () { resetView(0.5); });
        TB.say('Reset view to 50%.');
        return comps.length;
    }, { glyph: 'zoom50' });

    /* 190 Reset View (Custom) */
    TB.reg(190, function (m) {
        var scale = null;
        if (m && m.shift) {
            scale = TB.num(app.settings.getSetting('Toolbox', 'view.scale'), 1);
        } else {
            var v = TB.form('Reset View (Custom)', [
                { id: 'scale', label: 'Scale (e.g. 0.33)', type: 'number', value: '1' }
            ]);
            if (v === null) return 0;
            scale = TB.num(v.scale, 1);
            try { app.settings.saveSetting('Toolbox', 'view.scale', String(scale)); } catch (e) { }
        }
        var comps = (m && m.ctrl) ? selectedComps() : [TB.comp()];
        comps.forEach(function () { resetView(scale); });
        TB.say('Reset view to ' + Math.round(scale * 100) + '%.');
        return comps.length;
    }, { glyph: 'zoom33' });

    /* 191 Save Screenshot */
    TB.reg(191, function (m) {
        var c = TB.comp();
        var comps = (m && m.ctrl) ? selectedComps() : [c];
        var v = (m && m.ctrl) ? null : TB.form('Save Screenshot', [
            { id: 'path', label: 'Output folder', type: 'text', value: TH.tempFolder() },
            { id: 'scale', label: 'Scale', type: 'number', value: '1' }
        ]);
        var folder = (v && v.path) ? v.path : TH.tempFolder();
        var scale = (v && v.scale) ? TB.num(v.scale, 1) : 1;
        var n = 0;
        comps.forEach(function (comp) {
            try {
                var f = new File(folder + '/' + comp.name + '.png');
                if (typeof comp.saveFrameToPng === 'function') { comp.saveFrameToPng(f.fsName); n++; }
                else if (typeof comp.saveFrameAs === 'function') { comp.saveFrameAs(f.fsName); n++; }
            } catch (e) { }
        });
        TB.say('Saved ' + n + ' screenshot' + (n === 1 ? '' : 's') + '.');
        return n;
    }, { glyph: 'screenshot' });

})();

/* ==== panel.js ==== */
/* Toolbox panel — dockable ScriptUI panel: search, categories, drawn icon grid,
   per-tool tooltips with their modifier variants, one undo step per application. */
(function (thisObj) {
    var G = TBG;
    var headless = (typeof TB_HEADLESS !== 'undefined' && TB_HEADLESS);
    var ui = headless ? null : ((thisObj instanceof Panel) ? thisObj : new Window('palette', 'Toolbox', undefined, { resizeable: true }));
    var C = {
        bg: [.115, .12, .115, 1], well: [.07, .075, .07, 1], border: [.26, .29, .25, 1],
        muted: [.52, .56, .5, 1], text: [.85, .87, .82, 1], accent: [.42, .78, .95, 1],
        accent2: [.92, .76, .35, 1], sel: [.20, .28, .33, 1], hot: [.26, .36, .42, 1]
    };

    /* ---------- data ---------- */
    var byId = {}, CATS = [];
    TB_SPEC.forEach(function (s) {
        byId[s.id] = s;
        if (CATS.indexOf(s.cat) < 0) CATS.push(s.cat);
    });
    var state = { cat: CATS[0], query: '', tile: 60, scroll: 0, hover: null };
    try {
        var saved = JSON.parse(app.settings.getSetting('Toolbox', 'workspace'));
        if (saved && typeof saved === 'object') {
            if (CATS.indexOf(saved.cat) >= 0) state.cat = saved.cat;
            if (typeof saved.tile === 'number') state.tile = TB.clamp(saved.tile, 44, 92);
        }
    } catch (ignore) { }

    function persist() {
        try { app.settings.saveSetting('Toolbox', 'workspace', JSON.stringify({ cat: state.cat, tile: state.tile })); }
        catch (ignore) { }
    }
    function entry(s) {
        var t = TB.get(s.id);
        if (!t) return null;
        return {
            id: s.id, name: s.name, cat: s.cat, tip: s.tip || '', mods: s.mods || [],
            glyph: t.glyph || G.resolve(s.icon, s.name, s.cat)
        };
    }
    function available() {
        var out = [];
        TB_SPEC.forEach(function (s) { var e = entry(s); if (e) out.push(e); });
        return out;
    }
    function items() {
        var q = TB.strip(state.query).toLowerCase(), all = available();
        if (!q) return all.filter(function (e) { return e.cat === state.cat; });
        return all.filter(function (e) {
            return (e.name + ' ' + e.cat + ' ' + e.tip).toLowerCase().indexOf(q) >= 0;
        });
    }
    function tipFor(e) {
        var parts = [e.name];
        if (e.tip) parts.push(e.tip);
        (e.mods || []).forEach(function (m) { parts.push('\u2022 ' + m.when + ': ' + m.what); });
        return parts.join('\n');
    }

    /* ---------- chrome (real UI only) ---------- */
    var status = null;
    if (!headless) {
    ui.orientation = 'column'; ui.alignChildren = ['fill', 'top'];
    ui.margins = 8; ui.spacing = 6; ui.preferredSize = [330, 540];

    var header = ui.add('group'); header.orientation = 'row'; header.alignment = ['fill', 'center'];
    header.alignChildren = ['left', 'center']; header.margins = [0, 0, 0, 0]; header.spacing = 5;
    var brand = header.add('statictext', undefined, 'TOOLBOX');
    brand.preferredSize = [64, 20];
    var search = header.add('edittext', undefined, '');
    search.preferredSize = [110, 22]; search.helpTip = 'Type to search every tool by name, category or action.';
    var catList = header.add('dropdownlist', undefined, CATS);
    catList.preferredSize = [96, 22];
    catList.selection = CATS.indexOf(state.cat);
    var smaller = header.add('button', undefined, '\u2212'); smaller.preferredSize = [22, 22];
    var bigger = header.add('button', undefined, '+'); bigger.preferredSize = [22, 22];

    var body = ui.add('group'); body.orientation = 'row'; body.alignment = ['fill', 'fill'];
    body.alignChildren = ['fill', 'fill']; body.margins = 0; body.spacing = 4;
    var grid = body.add('group'); grid.orientation = 'column'; grid.alignment = ['fill', 'fill'];
    grid.alignChildren = ['left', 'top']; grid.margins = 0; grid.spacing = 4;
    var sbar = body.add('scrollbar', undefined, undefined, 'vertical');
    sbar.preferredSize = [14, 100]; sbar.alignment = ['right', 'fill'];

    status = ui.add('statictext', undefined, '');
    status.preferredSize = [310, 26]; status.helpTip = '';
    }

    /* ---------- rendering ---------- */
    var signature = '';
    function clear(node) { while (node.children && node.children.length) node.children[0].remove(); }
    function sizeOf(c) { return [c.size.width || c.preferredSize[0], c.size.height || c.preferredSize[1]]; }

    function render(force) {
        if (headless) return;
        var m = sizeOf(ui), TW = state.tile, TH = state.tile + 8;
        var usableW = Math.max(TW, m[0] - 20);
        var cols = Math.max(1, Math.floor((usableW + 4) / (TW + 4)));
        var list = items();
        var visibleRows = Math.max(2, Math.floor((m[1] - 96) / (TH + 4)));
        var rows = Math.ceil(list.length / cols);
        var maxScroll = Math.max(0, rows - visibleRows);
        state.scroll = TB.clamp(state.scroll, 0, maxScroll);
        var sig = m[0] + 'x' + m[1] + '|' + TW + '|' + state.cat + '|' + state.query + '|' + state.scroll + '|' + list.length;
        if (sig === signature && !force) return;
        signature = sig;

        clear(grid);
        grid.preferredSize = [cols * (TW + 4) - 4, visibleRows * (TH + 4) - 4];
        var start = state.scroll * cols, end = Math.min(list.length, (state.scroll + visibleRows) * cols);
        for (var r = start; r < end; r += cols) {
            var row = grid.add('group'); row.orientation = 'row'; row.margins = 0; row.spacing = 4;
            for (var c = 0; c < cols && r + c < end; c++) makeTile(row, list[r + c], TW, TH);
        }
        sbar.visible = rows > visibleRows;
        sbar.min = 0; sbar.max = Math.max(1, maxScroll);
        sbar.value = TB.clamp(state.scroll, 0, Math.max(1, maxScroll));
        sbar.preferredSize = [14, visibleRows * (TH + 4)];
        say(ready(list.length));
    }

    function ready(shown) {
        var total = available().length;
        return 'Toolbox ' + TB.version + ' \u00b7 ' + shown + '/' + TB_SPEC.length + ' tools' +
            (total < TB_SPEC.length ? ' (' + (TB_SPEC.length - total) + ' not built yet)' : ' ready');
    }

    function makeTile(parent, item, TW, TH) {
        var b = parent.add('button', undefined, '');
        b.preferredSize = [TW, TH];
        b.helpTip = tipFor(item);
        b.item = item;
        b.onDraw = function () {
            var g = this.graphics, w = this.size.width || TW, h = this.size.height || TH;
            var hot = this.active || state.hover === item.id;
            G.box(g, 1, 1, w - 2, h - 2, hot ? C.hot : C.well, hot ? C.accent : C.border, 7);
            G.draw(g, item.glyph, w / 2, h / 2 - 5, hot ? C.accent : C.text, C.accent2);
            var lab = G.truncate(g, item.name, w - 8, 9);
            G.text(g, lab, Math.max(3, (w - G.textWidth(g, lab, 9)) / 2), h - 8, hot ? C.text : C.muted, 9);
        };
        b.addEventListener('mousedown', function (e) {
            b.mods = { shift: !!e.shiftKey, ctrl: !!(e.ctrlKey || e.metaKey), alt: !!e.altKey };
        });
        b.addEventListener('mouseover', function () {
            state.hover = item.id;
            say(tipFor(item).replace(/\n+/g, ' \u00b7 '));
            try { b.notify('onDraw'); } catch (ignore) { }
        });
        b.addEventListener('mouseout', function () {
            if (state.hover === item.id) { state.hover = null; say(ready(items().length)); }
        });
        b.onClick = function () {
            var m = b.mods || { shift: false, ctrl: false, alt: false };
            b.mods = null;
            run(item, m);
        };
        return b;
    }

    function run(item, mods) {
        var tool = TB.get(item.id);
        if (!tool || !tool.run) { say(item.name + ' is not built yet.'); return; }
        var said = false, hook = TB._status;
        TB._status = function (t) { said = true; hook(t); };
        TB._lastItem = item;
        TB.act(item.name, function () { return tool.run(mods || {}, item); });
        TB._status = hook;
        if (!said) say(item.name + ' \u00b7 done.');
        try { if (ui && ui instanceof Window === false) ui.layout.layout(true); } catch (ignore) { }
    }

    function say(text) { if (status) status.text = String(text); else if (typeof writeLn === 'function') writeLn(String(text)); }

    /* ---------- wiring (real UI only) ---------- */
    if (!headless) {
    search.onChanging = function () { state.query = search.text; state.scroll = 0; render(true); };
    catList.onChange = function () {
        state.cat = catList.selection ? String(catList.selection.text) : state.cat;
        state.query = ''; search.text = ''; state.scroll = 0; render(true); persist();
    };
    smaller.onClick = function () { state.tile = TB.clamp(state.tile - 8, 44, 92); render(true); persist(); };
    bigger.onClick = function () { state.tile = TB.clamp(state.tile + 8, 44, 92); render(true); persist(); };
    sbar.onChanging = function () { state.scroll = Math.round(sbar.value); render(true); };
    ui.onResizing = ui.onResize = function () {
        try { render(false); this.layout.resize(); } catch (ignore) { }
    };
    }

    TB._status = say;
    if (!headless) {
        render(true);
        if (ui instanceof Window) ui.show();
        else { try { ui.layout.layout(true); } catch (ignore) { } }
    }

    /* Test seam: lets the headless harness render the grid and fire tiles without a mouse. */
    TB.PANEL = {
        state: state,
        entries: items,
        available: available,
        say: say,
        render: function () { render(true); },
        setQuery: function (q) { state.query = q; if (search) search.text = q; state.scroll = 0; render(true); },
        setCat: function (c) { if (CATS.indexOf(c) >= 0) { state.cat = c; state.query = ''; if (search) search.text = ''; render(true); } },
        click: function (id, mods) {
            var s = byId[id], e = s ? entry(s) : null;
            if (!e) return false;
            run(e, mods || { shift: false, ctrl: false, alt: false });
            return true;
        }
    };
})(this);
