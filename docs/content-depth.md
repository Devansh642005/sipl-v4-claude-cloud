> Historical iteration record. The current implementation and verification report is `source-verification.md`; runtime and export instructions are in `../README.md`.

# Restored corporate and flagship depth

## Homepage order

1. Cinematic SIPL arrival (existing hero, navigation, enquiry CTA and flagship teaser)
2. SIPL / Building Trust (company introduction, stated quality policy and architectural image)
3. Flagship Sri Krishna Vilas (overview, major image, project and guided-experience CTAs)
4. Future development explorer teaser (Overview / Towers / Amenities / Master Plan)
5. Editorial project portfolio (Sri Krishna Vilas, Barsana, Raman Reti, Manasi Ganga with unresolved category)
6. Design / life / amenities (pool, jogging, gym, theatre, badminton, atrium, lobby)
7. From Vision to Reality (labelled design visual and separate supplied site photograph)
8. Why SIPL / supporting material (dated IGBC precertificate and stated company priorities)
9. Location / Varanasi
10. Group / hospitality (The Kashi Residency and Manasi Ganga pending introduction)
11. Enquiry / site visit
12. Expanded footer (company, projects, contact placeholders and policy disclosures)

## Project page order

1. Cinematic arrival
2. Project overview
3. Development Explorer
4. Master Plan Explorer
5. Guided Property Journey
6. Amenities / lifestyle
7. Residence Explorer
8. Interior gallery
9. From Vision to Reality
10. Location
11. Film
12. Brochure / project information
13. Enquiry / site visit, followed by the shared footer

## Source boundaries

- `siplgroup/page-about-us.php`: real estate developer in Varanasi, real estate/hospitality interests, trust/ethics/principles, stated quality commitments. Summarized without time-sensitive tenure, staffing, rankings, financial returns or claimed achievements.
- `siplgroup/page-sri-krishna-vilas.php`: location, developer Shreemaa Infrarealty Private Limited (a SIPL Group company), two-tower architectural concept and design priorities. Inventory, dimensions and sales claims remain excluded.
- `siplgroup/page-barsana.php`: residential group housing identity. Area, status and marketing superlatives excluded.
- `siplgroup/page-raman-reti.php`: township concept with villas, plots and open spaces. Current scope requires confirmation.
- `siplgroup/page-manasi-ganga.php` describes a township, while `header.php` lists it under hospitality. Only its name and unresolved classification are published.
- `siplgroup/header.php`: The Kashi Residency hospitality entry; supplied `img/The Kashi Residency.jpeg` already mapped to the existing hospitality image. No current booking, service or operating-status claims added.
- `siplgroup/New Image/GH240670.jpg`: visually inspected certificate records IGBC Green Homes Precertified Gold for Sri Krishna Vilas, registration GH240670, November 2025. Three-year validity subject to renewal based on six-monthly updates; present renewal status unverified. This is not presented as final certification or statutory project approval.
- `siplgroup/New Image/Sri Krishna Vilas.pdf`: supplied 27-page image-based brochure. Cover visually checked; copied unchanged for reference download. Date/edition and specifications remain unconfirmed. Public cover image derived from page 1.

All supplied originals remain untouched. Public asset-map entries record the new copies/derivative.

## Remaining placeholders

Real GLB/glTF model and renderer; tower mapping; floor/residence schedules and plans; inventory/areas/prices; map hotspot coordinates; exact entrance/map pin/connectivity; construction capture date; certificate renewal; brochure edition; Manasi Ganga category; current hospitality information; video source/captions; contact routing and official policies. Enquiries still validate locally without sending or storing information.

## Next model phase

Use the already supplied `Whole model.skp` and second SKP; do not request new models as a prerequisite. This pass did not convert them. A local SKP was found at `/home/devansh/Documents/lobby_files/skv entrance flat lobby1.skp`; confirm asset roles and locate the whole-development source in the supplied model set during conversion preparation. Preserve the originals, inspect units/materials/components, export GLB/glTF, optimize geometry/textures and map verified nodes/cameras into the existing typed viewer adapter. Test mobile memory/performance and scroll-safe gestures before enabling model controls.

## Exact files changed in this expansion

- src/app/page.tsx
- src/app/projects/sri-krishna-vilas/page.tsx
- src/app/globals.css
- src/components/company-depth.tsx (new)
- src/components/project-depth.tsx (new)
- src/components/project-editorial.tsx
- src/components/project-reveal.tsx
- src/components/site-footer.tsx
- src/components/enquiry-form.tsx
- src/data/company.ts (new)
- src/data/site.ts
- src/data/asset-map.json
- public/assets/skv-igbc-precertificate.jpg (new copy)
- public/assets/skv-brochure-cover.jpg (new derivative)
- public/documents/sri-krishna-vilas-supplied-brochure.pdf (new copy)
- tests/homepage.spec.ts
- docs/flagship-integration.md
- docs/content-depth.md (this file)

## Validation

Production build and TypeScript check passed. Six Playwright tests passed: both routes at 375, 390, 430, 768 and 1440px, plus reduced motion / normal scrolling. Existing explorer, master-plan zoom, residence context, menu, enquiry and film checks retained. Added section-order/visibility checks, supplied image loading, certificate/interior dialogs, Manasi Ganga enquiry, brochure download, and policy disclosure coverage. Desktop/mobile editorial compositions visually reviewed.
