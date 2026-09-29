# SIPL V3 presentation handover

The approved corporate routes, verified company/project data and interactive systems are retained. This release changes the visual presentation. No application dependencies or production raster assets were added. No existing source or asset was deleted.

## Presentation

- Corporate-first dark Varanasi hero, controlled Roman/italic typography, foundation annotation and river contours.
- Original SVG elevation, abstract plan, river/ghat and lattice families; bronze chapter rails and measurement-style marks. These are decorative abstractions, not factual building drawings.
- Six related edge treatments: stepped chapters, chamfered images, portrait portals, inset plan sheets, floating annotations and photographic dissolves. Mobile simplifies these shapes and overlaps.
- Royal desktop project menu and dark mobile accordion drawer; existing focus/ESC behavior retained.
- About principles use staggered ruled columns; legacy retains verified narrative milestones; leadership uses three large portrait spreads and compact secondary people rows.
- Project discovery keeps category/status filters and project-specific identities. Missing upcoming project photography is represented by each project’s own logo, never another development.
- Sri Krishna Vilas retains master-plan zoom, reference plans, residence selectors, gallery/lightbox and film. Drawing-table framing, a shared-space panorama and a corrected dark enquiry chapter refine the presentation.
- Recognition remains IGBC project precertification, presented as a floating document. No corporate award claim is introduced.
- Media/news use a lead story with secondary story stack. The blog reading room links to existing material; no fictional article was published. NRI, EMI, Careers and Contact retain their functionality in the new system.
- Footer and closing chapters use original background line art. Corporate pages do not use Sri Krishna Vilas tower wallpaper.

## Motion and accessibility

IntersectionObserver triggers selected SVG line drawings and chapter rules without hiding content. Navigation, media and hover transitions retain reduced-motion behavior. Native dialogs, focus management, form validation, poster-first film and keyboard/swipe viewers remain in place. No WebGL or heavy animation dependency was introduced.

## Verification

- TypeScript: passed.
- Production build: passed; existing static route inventory retained.
- Existing Playwright suite: **39 passed**.
- **60 route/viewport checks** across 375, 390, 430, 768 and 1440 px: no horizontal overflow; one H1 per checked page.
- **31 axe page/state audits**: no reported WCAG A/AA violations. Includes desktop/mobile navigation and the project enquiry section after scrolling to it. This is automated coverage, not an assertion of complete accessibility certification.
- Browser captures: Home, About, Projects, Sri Krishna Vilas, Awards, Media, Blog, Leadership, NRI, EMI, Careers and Contact at 1440×900 and 390×844; Home/Projects also reviewed at 768×1024. No broken main-content images or page errors reported.
- Full-page review fixed narrow-screen decorative overflow, a float-constrained reading paragraph, secondary portrait sizing and legacy project-enquiry contrast.
- No lint script is configured in this repository.

Evidence is in `v3-browser-findings.json`, `v3-width-checks.json`, `v3-accessibility.json` and `visual-review/v3/`.

## Media handoff and preserved limitations

See `ASSET_REPLACEMENT_GUIDE.md` and `src/data/media-slot-manifest.json` for page, slot, subject, current media, crop and replacement dimensions. Low-resolution official portraits and upcoming-project logos are replaceable without rebuilding the layout. `CLIENT_CONTENT_REQUIRED.md` remains the list of missing approved company inputs. Forms still prepare honest email handoffs; they do not claim backend delivery. WhatsApp remains unpublished without a verified number.

## Safety and export

This supplied directory has no Git metadata. The pre-V3 ZIP is preserved at `exports/sipl-group-pre-v3.zip`; a source snapshot is at `/tmp/sipl-before-v3-source.tar.gz`. The final export is produced by `npm run export:zip`, excluding node_modules, build output and prior exports. Independent extraction/install/typecheck/build validation is recorded separately in `exports/v3-export-validation.json`.

## Changed source files

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/data/media.ts`
- `src/app/[...slug]/page.tsx`
- `src/app/projects/sri-krishna-vilas/page.tsx`
- `src/components/corporate/shared.tsx`
- `src/components/corporate/pages.tsx`
- `src/components/corporate/interactive.tsx`
- `src/app/royal.css`
- `src/data/media-slot-manifest.json`
- `src/components/corporate/graphic-motion.tsx`
- `src/components/corporate/architectural-art.tsx`

The full file inventory is `v3-file-changes.json`.
