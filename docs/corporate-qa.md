# Corporate redesign validation — 11 September 2026

## Passed

- `npm run typecheck`.
- `npm run build`: successful production build, 33 generated framework/content outputs; 29 public content routes plus metadata/framework endpoints.
- `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/google-chrome npm run test:e2e`: **39 passed**, against the production build.
- No lint script exists in this repository. New source and tests were formatted with the existing Prettier tool.
- Automated axe WCAG 2 A/AA and 2.1 AA checks: no violations in 18 page/viewport audits plus the enquiry modal. Pages: Home, About, Projects, Sri Krishna Vilas, Events Gallery, NRI, EMI, Careers and Contact, at 390 and 1440.
- Core route smoke tests at 390, 768 and 1440, plus 375 and 430 layout checks.
- All corporate routes return their intended content and unique metadata; unknown routes return 404. Sitemap, robots and official brochure/plan files respond.

## Interaction coverage

Desktop mega menu; mobile accordions and Escape/focus restoration; project category/status filters; manual and session-limited automatic lead popup; focus containment; honest enquiry and career email-draft links; FAQ contact helper; gallery keyboard/swipe navigation; master-plan zoom and selected-perspective viewer; residence/reference-plan selector; poster-first film modal with controls and no loop; reduced motion; EMI reference calculation and zero-interest case.

## Visual inspection

Home, About, Projects, Sri Krishna Vilas, Awards, Media, Blog and Contact were opened in Chrome on desktop and mobile with images loaded. Final browser findings and review sheets accompany this document. Checked corporate hierarchy, photography attribution, typography, card composition, color transitions, overlap/depth, footer, image crops, contrast, mobile bounds and modal behavior.

The inherited project page was condensed: six initial gallery images with expansion, concise amenities and construction blocks, direct plan/film/brochure actions. Two inherited aspect-ratio rules causing mobile overflow were corrected. No fake data was introduced to fill limited-content routes.

## Export verification

The final source ZIP is created with `npm run export:zip`; node_modules and build caches are excluded by the export allowlist. Independent extraction, clean dependency installation, typecheck and production build are the final release checks. Their terminal results are reported with the delivered ZIP.

## Scope of the frontend

Enquiries use an explicit email handoff. No live CRM submission, resume upload, payment, allocation, hotel booking engine or WhatsApp service is claimed. The client content guide identifies what is still needed for these integrations and additional verified editorial content.
