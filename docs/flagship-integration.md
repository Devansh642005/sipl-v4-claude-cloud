> Historical iteration record. The current implementation and verification report is `source-verification.md`; runtime and export instructions are in `../README.md`.

# SIPL corporate and flagship foundations

Routes: `/` is the SIPL corporate homepage; `/projects/sri-krishna-vilas` owns the detailed project experience. Existing editorial typography, imagery, journey, film and form components are retained. Legacy source and public assets have not been modified.

## Real 3D integration

No Three.js dependency, generated geometry, simulated image rotation or SKP conversion is included.

1. Review supplied SKP sources, materials, units and licensing with the company. Export and optimize GLB/glTF in a separate asset workflow; retain the original files.
2. Establish a tested mobile asset budget, simplify geometry, compress textures and validate exports against the source. Confirm Tower A/B and amenity node names and camera targets.
3. Implement a client-only R3F/Three.js adapter for `ModelViewportProps` in `src/components/development-explorer.tsx`. Pass the adapter and verified `ModelAsset` from a client wrapper. The adapter must report ready/error, consume mode and sequenced camera commands, and emit selected modes. Keep loading/error imagery and reset readiness when replacing assets.
4. Add renderer fullscreen, guided camera tour, keyboard controls and opt-in touch interaction (one-finger rotate, pinch zoom, tap selection). Keep normal page scrolling outside the activated canvas. Current fullscreen and guided tour deliberately open reference imagery and the image story.
5. Test on actual mobile hardware, reduced motion, WebGL failure, slow connections and context loss before enabling the model.

## Verification boundaries

- `src/data/flagship.ts`: model is null; Tower A/B are unverified requested UI labels; floor and residence arrays are empty. Populate only verified schedules. No prices, areas, availability or counts are inferred. Residence selectors reset dependent selections and pass selected context to enquiry.
- `src/data/explorer.ts`: chapter hotspot coordinates are null. Add percentage x/y coordinates only after company verification; numbered buttons then appear on the supplied plan. The large selectable chapter list and fullscreen zoom work independently of coordinates. The chapter sequence is editorial, not a verified physical route.
- Film source and captions remain null. Poster-first interaction exposes the existing pending-film state. Connect an approved web video and caption track before release.
- Supplied construction photograph is labelled ACTUAL SITE PROGRESS; capture date is unconfirmed. Architectural visuals are labelled separately.
- Location uses the existing supplied address. Coordinates, entrance, destinations and travel times await verification.
- Hospitality is now included using the supplied legacy navigation and company introduction; current property details and booking contacts remain pending. See `content-depth.md` for source attribution and the Manasi Ganga classification conflict.
- Enquiry is an explicitly labelled local preview. No details are sent or stored; verified contact routing and privacy content remain required.
- Existing unverified configuration notes in site data are not used as residence inventory. Form configuration choices express visitor preferences only.

## Validation

Run `npm run build`, `npm run typecheck`, and browser tests with a preview on port 3000. Browser coverage includes both routes at 375, 390, 430, 768 and 1440 pixels, navigation, plan zoom, pending-data states, enquiry context, film fallback and horizontal overflow.

## Restored content depth

See `content-depth.md` for current section orders, source evidence, copied brochure/certificate assets, remaining facts and the exact expansion change list. The next model phase uses the already supplied Whole model.skp and second SKP; no new source assets are a prerequisite.
