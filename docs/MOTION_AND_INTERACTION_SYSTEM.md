# V4 motion and interaction system

## Implementation

`experience.css` layers the V4 presentation over the preserved corporate and royal systems. `architectural-art.tsx` supplies original SVG elevation, plan and river/ghat-inspired graphics; these are decorative, never technical project drawings. `graphic-motion.tsx` uses one IntersectionObserver and requestAnimationFrame-coalesced scroll/pointer updates. No extra animation dependency, canvas or scroll replacement was introduced.

Hero elements settle in sequence; selected drawing paths reveal once; the hero plane has a small desktop pointer/scroll offset. A 400ms partial architectural veil marks route entry without delaying navigation. A thin page progress rule and active journey markers track reading position. Mobile removes pointer depth and simplifies layers.

## Direct interactions

- Royal mega menu: keyboard/click opening, focused/hovered project preview, source-specific image, closing Escape, persistent mobile enquiry action.
- Project discovery: visual and index modes, selected project stage, native scroll/swipe index, mouse drag, previous/next controls, arrow-key selection, selection progress, category/status filtering retained.
- Portfolio constellation: selectable project relationships, explicitly diagrammatic rather than geographic.
- About principles: accessible Trust/Ethics/Principles tabs, arrow-key focus, editorial image/text changes.
- Culture rail: genuine event photographs, native scrolling and explicit previous/next controls; no endless automatic motion.
- Amenities: verified project image switching with explicit state buttons; existing amenity content retained.
- Residence/master-plan/gallery: existing selectors, drag/zoom/reset/fullscreen, keyboard/swipe retained; selected references crossfade and new matching imagery resolves centrally.
- Video theatre: one site-wide native dialog, no video element or MP4 request before deliberate interaction; user-triggered playback with controls, no loop, pause/unmount on close.
- Forms: focus rules and state transitions; existing validated email-draft handoff is explicit and does not claim submission or booking confirmation.

## Krishna — deterministic digital concierge

One floating contact launcher opens a native modal sheet. No LLM, API secret or human impersonation. Answers are matched against `src/data/concierge.ts` and verified project/contact/media records. Unknown or commercial/legal claims direct visitors to SIPL. Other project names are resolved before Sri Krishna Vilas image intents. Office address takes precedence over generic location wording.

Responses can show a correctly associated image, caption, source description, enlarged viewer and project/gallery link. Film and enquiry actions close the concierge before opening the destination dialog. Messages are kept only in mounted memory (up to 12 exchanges), with an explicit Clear chat control. No transcript is sent to a backend. WhatsApp remains hidden until its configuration contains a verified number.

## Accessibility and performance

Native dialogs retain modal keyboard behavior and Escape; focus restoration is covered by tests. Inputs have persistent labels. Critical choices never depend on hover. Reduced motion disables sequence/parallax/veil and uses instant native scrolling while preserving controls. The existing broader reduced-motion CSS remains active. Animations primarily use opacity/transform; no heavy media preloading or added animation packages.

Source facts, routes, forms and legal/status qualifiers are preserved. Media slots and source provenance are documented separately.
