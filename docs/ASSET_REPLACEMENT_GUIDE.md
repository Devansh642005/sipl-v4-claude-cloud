# SIPL media replacement guide

## Central sources

- `src/data/media.ts`: public registry and named homepage slots.
- `src/data/corporate-media.json`: imported people, events, hotel and corporate assets.
- `src/data/media-dimensions.json`: dimensions and aspect ratios keyed by public URL.
- `src/data/projects.ts`: each project’s own media ID and factual record.
- `src/data/team.ts`, `awards.ts`, `news.ts`, `testimonials.ts`, `blog.ts`: typed content collections.
- `src/data/asset-map.json` and `sipl.ts`: preserved Sri Krishna Vilas provenance and detailed project data.

An asset supports `id`, `src`, `alt`, `category`, `project`, `type`, `aspectRatio`, `width`, `height`, `caption`, `actualOrRender`, `priority`, `source` and `verified`. Do not assign a project unless the source establishes that association.

## Homepage slots

| Slot | Registry ID now | Current file | Desired replacement | Minimum / ratio |
|---|---|---|---|---|
| Corporate hero | `varanasi` | `/assets/varanasi.webp` | Corporate/city photograph, not one project tower | 1800×1400; 4:3, crop-safe centre |
| About preview | `event-1` | `/assets/corporate/event-1.webp` | Genuine company/people photograph | 1400×1000; 4:3 |
| Real estate vertical | Brand line composition | CSS, no fabricated development render | Optional own corporate/residential image via a new slot | 1400×1000; 4:3 |
| Hospitality vertical | `kashi-room` | `/assets/corporate/kashi-room.webp` | Approved Kashi room/hospitality photograph | 1400×1000; 4:3 |
| Sri Krishna Vilas card | `hero` | `/assets/hero.webp` | Approved project exterior | 1800×1200; 3:2 |
| Barsana card | `barsana-logo` | `/assets/barsana-logo.webp` | Barsana-only image or clean logo | 1200×800; 3:2 |
| Raman Reti card | `raman-logo` | `/assets/raman-logo.webp` | Raman Reti-only image or clean logo | 1200×800; 3:2 |
| Kashi card | `hospitality` | `/assets/hospitality.webp` | Approved Kashi exterior | 1400×1000; 4:3 |
| Manasi Ganga card | `manasi-logo` | `/assets/manasi-logo.webp` | Manasi-only image or clean logo | 1200×800; 3:2 |
| Film preview | `pool` | `/assets/pool.webp` | Approved film still | 1920×1080; 16:9 |
| Recognition | `skv-igbc-precertificate` | `/assets/skv-igbc-precertificate.jpg` | Original readable document scan | 1600 px long edge; preserve original ratio |

Additional slots: `mediaSlots.culture`, portraits keyed by person, event collections by `category: event`. Corporate CTA uses original architectural line decoration and no repeated project photograph.

## Import a ZIP safely

1. Extract outside `public`, preserving the original ZIP. Do not overwrite source assets blindly.
2. Confirm project/person/category attribution, actual photo versus render, usage permission, caption, and date. Keep uncertain media in a review folder.
3. Select the highest-resolution genuine source. Deduplicate by hash and visually review similar images. Do not upscale low-resolution originals.
4. Export optimized WebP/JPEG/PNG into `public/assets/corporate/` or a clearly named project folder. Use lowercase descriptive filenames. Retain source originals outside the deployment asset set.
5. Add/update the registry entry and `media-dimensions.json`. Update a `mediaSlots` value or project `image` ID to change content without layout edits. For a logo-to-photo replacement change `type: logo` to `photograph`; the card switches from contain to cover automatically.
6. For people, update the existing `media` ID in `team.ts`. For testimonials, add only verified, permission-cleared records; the homepage preview appears automatically. For articles, add a verified record to `blog.ts`; its article route and sitemap entry are generated.
7. Keep category/project associations correct. Never reuse Sri Krishna Vilas renders for another development or as office/team photography.
8. Run `npm run typecheck`, `npm run build`, and browser checks at 390/768/1440. Inspect crops, captions and keyboard viewers. Regenerate the ZIP after checks.

## Film

`public/media/sri-krishna-vilas-tour.mp4` is the untouched approved 49.5-second silent source. The site serves `sri-krishna-vilas-corporate-film.mp4`, a 1080p H.264 fast-start derivative, only after the visitor presses play. `approvedFilm` controls source, original, poster and duration label. No film autoplays on initial page load and no full-film loop is enabled.

## Audit utilities

`docs/corporate-asset-audit.json` lists filename, dimensions, bytes, source-associated category/project, likely subject, exact duplicates, near-duplicate candidates and quality flags. Unknown assets remain unapproved for new use. `scripts/audit-assets.py` can regenerate the audit with Python/Pillow when the original sibling `siplgroup` folder is available. Its decoder limitations are not evidence that an image is corrupt.

## V3 presentation slot manifest

`src/data/media-slot-manifest.json` records each major slot’s page, subject, registry ID, ratio, resolution and crop. These are **recommended replacement dimensions**, not a claim that the current source meets them. Existing low-resolution official portraits and project logos are retained honestly; sharper approved company images can replace them. Layouts are already complete. No stock or generated people are used.

Update the referenced ID in `src/data/media.ts` / `corporate-media.json`, or the project/team record. Image dimensions belong in `media-dimensions.json`. The same registry image may be duplicated at 6–9% opacity inside a page hero as a decorative photographic dissolve; it has empty alt text and is not a second factual image.

| Page | Slot | Current file | Expected subject | Ratio / minimum | Crop |
|---|---|---|---|---|---|
| / | `corporateHero` | `/assets/varanasi.webp` | Corporate or Varanasi panorama, city context only | 4:3 / 1800×1400 | centre; protect skyline |
| / | `aboutPreview` | `/assets/corporate/event-1.webp` | Genuine SIPL gathering or company photograph | 4:3 / 1400×1050 | centre; keep faces inside safe area |
| / | `hospitality` | `/assets/corporate/kashi-room.webp` | The Kashi Residency interior | 4:3 / 1400×1050 | centre |
| /about | `aboutHero` | `/assets/corporate/event-2.webp` | Genuine SIPL company or event photograph | 4:3 / 1400×1050 | centre |
| /about/legacy | `legacyHero` | `/assets/varanasi.webp` | Varanasi city or approved company archive | 4:3 / 1400×1050 | centre |
| /about/corporate-culture | `culture` | `/assets/corporate/event-2.webp` | Official people or workplace photograph | 4:3 / 1400×1050 | faces within centre 80% |
| /projects/hospitality | `hospitality` | `/assets/corporate/kashi-room.webp` | Approved Kashi hotel interior | 4:3 / 1400×1050 | centre |
| /nri | `nriHero` | `/assets/varanasi.webp` | Varanasi context photograph | 4:3 / 1400×1050 | centre |
| /careers | `careersHero` | `/assets/corporate/event-3.webp` | Real SIPL team/event photograph | 4:3 / 1400×1050 | centre |
| /blog | `readingCover` | `/assets/corporate/event-4.webp` | Genuine SIPL company gathering; no fictional story | 4:3 / 1400×1050 | faces clear of bottom text |
| /contact | `contactCity` | `/assets/varanasi.webp` | Varanasi context or verified office exterior | 4:3 / 1400×1050 | centre |
| /, /media, /projects/sri-krishna-vilas | `filmPoster` | `/assets/pool.webp` | Approved Sri Krishna Vilas film still | 16:9 / 1920×1080 | centre |
| /, /about, /about/awards, /projects/sri-krishna-vilas | `recognition` | `/assets/skv-igbc-precertificate.jpg` | Original IGBC project precertificate | original / 1600 px long edge | contain entire document |
| /projects/sri-krishna-vilas | `amenityPanorama` | `/assets/walkway.webp` | SKV shared landscape / walkway visualisation | 3:2 / 1600×1067 | centre |
| /, /projects, project detail | `projects.sri-krishna-vilas.image` | `/assets/hero.webp` | Sri Krishna Vilas only; use approved own image or identity | 3:2 / 1600×1067 | photo: cover / logo: contain |
| /, /projects, project detail | `projects.barsana.image` | `/assets/barsana-logo.webp` | Barsana only; use approved own image or identity | 3:2 / 1600×1067 | photo: cover / logo: contain |
| /, /projects, project detail | `projects.raman-reti.image` | `/assets/raman-logo.webp` | Raman Reti only; use approved own image or identity | 3:2 / 1600×1067 | photo: cover / logo: contain |
| /, /projects, project detail | `projects.the-kashi-residency.image` | `/assets/hospitality.webp` | The Kashi Residency only; use approved own image or identity | 3:2 / 1600×1067 | photo: cover / logo: contain |
| /, /projects, project detail | `projects.manasi-ganga.image` | `/assets/manasi-logo.webp` | Manasi Ganga only; use approved own image or identity | 3:2 / 1600×1067 | photo: cover / logo: contain |
| /about/leadership, /about preview | `team.devesh-tripathi` | `/assets/corporate/devesh-tripathi.webp` | Official Devesh Tripathi portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.shailesh-tripathi` | `/assets/corporate/shailesh-tripathi.webp` | Official Shailesh Tripathi portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.deepak-arya` | `/assets/corporate/deepak-arya.webp` | Official Deepak Arya portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.anita-singh` | `/assets/corporate/anita-singh.webp` | Official Anita Singh portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.ar-amit-kumar-gupta` | `/assets/corporate/ar-amit-kumar-gupta.webp` | Official Ar. Amit Kumar Gupta portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.raj-kumar` | `/assets/corporate/raj-kumar.webp` | Official Raj kumar portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.rajanikant-upadhyay` | `/assets/corporate/rajanikant-upadhyay.webp` | Official Rajanikant Upadhyay portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.chandan-shashank` | `/assets/corporate/chandan-shashank.webp` | Official Chandan Shashank portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.satyendra-ojha` | `/assets/corporate/satyendra-ojha.webp` | Official Satyendra Ojha portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.manisha-gaur` | `/assets/corporate/manisha-gaur.webp` | Official Manisha Gaur portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.vyomika-pathak` | `/assets/corporate/vyomika-pathak.webp` | Official Vyomika Pathak portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /about/leadership, /about preview | `team.sarvesh-tripathi` | `/assets/corporate/sarvesh-tripathi.webp` | Official Sarvesh Tripathi portrait; no generated or stock person | 3:4 / 900×1200 | contain for leaders; centre crop for secondary portraits |
| /projects/sri-krishna-vilas | `east` | `/assets/east.webp` | SKV east-side perspective | 3:2 / 1600×1067 | centre; retain actual/render caption |
| /projects/sri-krishna-vilas | `exterior-evening` | `/assets/exterior-evening.webp` | SKV evening perspective | 3:2 / 1600×1067 | centre; retain actual/render caption |
| /projects/sri-krishna-vilas | `progress-courtyard` | `/assets/progress-courtyard.webp` | Actual SKV construction archive | 3:2 / 1600×1067 | centre; retain actual/render caption |
| /gallery | `galleryHub.atrium` | `/assets/atrium.webp` | SKV architectural visualisation | 3:2 / 1600×1067 | centre |
| /gallery | `galleryHub.progress` | `/assets/progress.webp` | Actual SKV construction archive | 3:2 / 1600×1067 | centre |
| /gallery | `galleryHub.event-4` | `/assets/corporate/event-4.webp` | Official SIPL event | 3:2 / 1600×1067 | centre |

### Graphic-only slots and retained interactive media

- Homepage real-estate chapter, generic upcoming-project backgrounds, page side art, recognition field and footer use original `ArchitecturalLineArt` vectors. They are abstract brochure art, **not** project elevations, survey drawings or navigable maps. No factual geometry is implied.
- Leadership uses `PortraitPlane`: a portal crop, fine halo and soft base shadow. Transparent approved cutouts can later replace portraits by updating the same IDs. Current photographs have not been synthetically reconstructed.
- Master plan, residence reference sheets, gallery collections and document viewers retain their existing registries in `sipl.ts`, `explorer.ts` and `asset-map.json`. Replace only with a verified matching plan/configuration; preserve contain sizing, captions and document identifiers. Plans should be at least 2000 px on the long edge, retaining original proportions.
- Gallery entries remain source/category driven. Supply original landscape and portrait photographs, ideally 1600 px or larger on the long edge. Never relabel a render as an actual site photo.
- Publication/article images remain in the article records. No unpublished article or testimonial is made public to fill a visual slot.
- Desktop overlaps and chamfers simplify below 600 px. Keep faces, document text and logos away from the outer 10% when providing replacements.


## V4 official ZIP integration

The original archive was reviewed selectively, not fully extracted. See `NEW_ZIP_ASSET_AUDIT.md` and `NEW_ZIP_REPLACEMENT_MANIFEST.md`. Exact production assets, dimensions, hashes, source archive paths and focal points are centralized in `src/data/new-zip-media.json`; the media registry merges these records without changing page components.

The machine-readable slot manifest is `src/data/media-slot-manifest.json`. It includes the new entrance hero, discovery, values, culture and concierge slots. Discovery resolves the selected project’s own image ID; there is no shared project-image fallback. Krishna image responses also use registry IDs.

For any new delivery: verify subject/project first, resize to the slot’s recommended dimensions, preserve aspect ratio, optimize to WebP, update alt/caption and actualOrRender, record exact archive member and verification status, then check mobile/desktop crop and enlarged views. Leave unknown files unpublished. Do not replace team images with rendered or stock people.
