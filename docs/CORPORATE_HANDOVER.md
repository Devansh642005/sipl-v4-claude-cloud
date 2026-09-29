# SIPL Group corporate redesign

## Product and route architecture

29 public content routes: homepage; About, Leadership, Legacy, Awards, Corporate Culture; Projects, Real Estate, Hospitality, Sri Krishna Vilas, Barsana, Raman Reti; The Kashi Residency and Manasi Ganga; Gallery hub, Project Photos, Current Photos, Events; Media, News, Blog, Testimonials, NRI, EMI Calculator, Careers, Contact, Privacy Policy and Disclaimer. A typed article detail template is ready for verified articles. Unknown routes return 404.

The homepage has ten concise chapters: corporate hero, brand strip, About preview, verified snapshot, business verticals, five-project portfolio, film preview, updates, recognition and corporate CTA. Customer voices appear only when verified testimonial records exist.

Global elements include a utility strip, keyboard-operated project mega menu, native-dialog mobile drawer with accordions, structured five-column footer, session-limited lead modal and one contact launcher. No fabricated WhatsApp contact, live-agent status or backend submission confirmation.

## Source recovery

Primary source: https://siplgroup.in/ and its About, project, gallery, careers and contact pages, cross-checked against all supplied PHP files. Read-only crawl snapshots are under `docs/source-crawl`.

Recovered 2013 foundation, twelve team members and designations, three legal entity names from the official group graphic, company quality policy/culture/community themes, the five-project hierarchy, office details, official social destinations, actual events and project/site imagery. https://kashiresidency.com/ supplied the additional verified guest-room photograph.

Brigade main website returned 403. Its official North Bangalore, Mysuru, Xanadu, East Projects and Commercial campaign pages were read, together with official corporate material. The retained principles are separation of corporate/vertical/project experiences, facts adjacent to imagery and nearby brochure/walkthrough/enquiry actions. Roma informed local content completeness. No competitor claims, testimonials, prices, code or branding were copied.

NRI guidance links to the Government of India OCI FAQ: https://ociservices.gov.in/onlineOCI/faq. It is deliberately general; eligibility, tax and financing require current professional/bank advice.

## Media and verified claims

Corporate imagery is city-, people- and hospitality-led. Homepage Sri Krishna Vilas architecture is confined to its project card and film preview; recognition uses its own document. Logos stand in for unavailable verified upcoming-project photography. Original source assets and the previously exported website remain preserved.

Only the 2013 founding year and two business verticals are shown as corporate statistics. Project IGBC recognition is explicitly November 2025 Gold precertification, with renewal/final-certification distinctions. No fictional customer reviews, extra awards, project prices, delivery schedules or team profiles are published.

## Functionality

- Sri Krishna Vilas retains zoom/pan master plan, selected-perspective viewer, configuration selector/reference plans, keyboard/swipe gallery, brochure download and validated site-visit form. Gallery initially previews six images and expands to the entire collection.
- Film uses a lighter fast-start copy of the approved silent original, poster-first in an accessible modal with controls.
- Enquiries prepare an email draft through `src/lib/enquiry.ts`; the user sends it. Career resumes are manually attached in the email application, never falsely reported as uploaded.
- EMI uses reducing-balance arithmetic, includes zero-interest handling and clearly marks illustrative input values.
- Structured data includes Organization, WebSite, BreadcrumbList, project Place and future Article schema. Each route has unique metadata and canonical URL; robots and sitemap are generated.
- `SIPL_ALLOW_INDEXING=true` enables indexing for an approved production deployment. Preview is noindex by default.

## Safety and handover

No Git repository exists in the supplied workspace. Pre-redesign source and export archive: `/tmp/sipl-pre-corporate-20260910.tar.gz`. The prior ZIP is retained separately in `exports/sipl-group-pre-corporate-20260910.zip`. Old useful components and source assets have not been deleted.

Missing client inputs: `CLIENT_CONTENT_REQUIRED.md`. Media integration: `ASSET_REPLACEMENT_GUIDE.md`. Validation results: `corporate-qa.md`.
