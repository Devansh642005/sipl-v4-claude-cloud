# Final QA record

- TypeScript: `npm run typecheck` passed.
- Production: `npm run build` passed; both `/` and `/projects/sri-krishna-vilas` prerender successfully.
- Browser: all 9 Playwright tests passed. Complete flows at 375×812, 390×844, 430×932, 768×1024, 1280×900, 1440×900, 1920×1080; reduced motion and document delivery; explicit mouse-drag master-plan pan and reset.
- Covered: one H1, responsive typography, horizontal overflow, navigation/dialog focus, hero image fallback, development tabs, master-plan zoom/reset/drag, normal journey scrolling, reference plans, gallery filters/keyboard/swipe/Escape, certificate viewing, priorities, residence guidance, FAQ, enquiry validation and email handoff, silent film user-triggered loading, brochure download, local anchors, browser console/runtime errors and local asset responses.
- Automated accessibility: axe WCAG 2 A/AA and WCAG 2.1 AA checks returned no violations for the 390px homepage, 1440px homepage, gallery dialog and FAQ dialog. This is an automated audit of those states, not a claim of certified conformance.
- Visual review: desktop/mobile hero, development, configuration, enquiry, company and gallery compositions reviewed. Fixed inherited oversized enquiry type, low-contrast supporting copy and transient hero CTA opacity.
- Source preservation: all 357 supplied files match their pre-implementation SHA-256 inventory hashes.
- ZIP: generated with the included portable Node script; CRC validation passed. No node_modules, .next, environment secrets or test-results were included.
- Clean ZIP extraction: `npm install` passed in a separate temporary folder, with zero vulnerabilities reported at install time. Both `npm run typecheck` and `npm run build` also passed in that extracted folder, independently of the original workspace.

Production handoffs remain explicit: enquiry endpoint and final privacy terms; launch URL/indexing configuration. Real GLB/glTF integration is the next model phase, using the already supplied SKP sources.

## Premium polish · 9 September 2026

- Existing Playwright suite plus two hero-specific tests: 11 passed. Existing checks cover 375, 390, 430, 768, 1280, 1440 and 1920 widths, interactions, console exceptions and missing local requests.
- Approved project hero playback, pause/resume, muted looping inline video, reduced-motion fallback and rejected-autoplay poster behavior passed.
- Visual captures reviewed at the requested 375×812, 390×844, 430×932, 768×1024 and 1440×900 sizes. No horizontal overflow in the captures. Below-fold lazy images were loaded for section review.
- TypeScript and production build passed. No dependencies added.
- Final axe WCAG A/AA audits: zero violations on project page at 390 and 1440 widths, gallery dialog and concierge dialog. CTA entrance retains near-full opacity to avoid transient contrast loss.
