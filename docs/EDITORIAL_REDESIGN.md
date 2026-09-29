# SIPL Group corporate redesign

Implemented on `redesign/sipl-corporate-editorial` in the existing Next.js application. Repository remote verified as `Devansh642005/sipl-v4-claude-cloud`. No remote changes or deployment.

## Design and scope

Warm ivory, terracotta, stone and charcoal; locally packaged Cormorant Garamond and DM Sans. Corporate Varanasi hero, all five portfolio identities, company story, separate residential and hospitality features, discovery/enquiry campaign. Shared split-image page heroes, typography, controls and surfaces carry the system through the retained corporate routes. Sri Krishna Vilas retains its galleries, film, master plan, configurations, document viewer and enquiry. Upcoming projects use their own published identities instead of unrelated Sri Krishna Vilas interiors/events. Plans unavailable here are described as “Detailed plan available on request.”

## Nine-reference review

| Reference | Production adaptation |
| --- | --- |
| A / 20-14-38 | Corporate homepage: warm paper, large terracotta serif, Varanasi place story. Original city photograph remains intact; no landmark collage or claimed property view. |
| B / 20-14-45 | Portfolio: quiet stone ground, generous spacing, restrained image depth and distinct project identity panels. Fantasy island/masterplan omitted. |
| C / 20-14-57 | Homepage enquiry: CSS brass ring and key-tag frame containing The Kashi Residency image. Conceptual discovery artwork, no possession promise. |
| D / 20-15-09 | Sri Krishna Vilas interior section: layered ivory reveal around a supplied sample-flat visualisation, explicit illustrative label. No mandatory animation. |
| E / 20-15-41 | Optional, not produced: sunglasses/person concept adds visual distortion and needs separately cleared lifestyle imagery. |
| F / 20-15-55 | Sri Krishna Vilas location section: thin decorative pin over authentic exterior, verified street name; explicitly not a map. Existing qualified locality information retained. |
| G / 20-16-45 | Homepage residential feature: doorway-shaped architectural frame, factual destination and real project link. No unsupported busy/peaceful comparison. |
| H / 20-17-34 | Combined with G in one arch-framed invitation. No duplicated section, borrowed people or implied residents. |
| I / 20-20-58 | Rounded hospitality aperture and circular corporate principle seal borrow curved framing and negative space without bending buildings or fabricating an aerial. |

## Assets and factual limits

Original local `Image & Video` files inspected selectively, including exterior, atrium and sample-flat interiors. Only three compressed copies added; originals untouched. Existing optimized source-mapped images retained. See `editorial-asset-manifest.json`, `src/data/new-zip-media.json`, and `src/data/corporate-media.json` for provenance. Pinterest references were extracted only to `/tmp` and are not public assets. The Drive folder returned an inaccessible-URL error through the browsing tool; no Drive contents claimed as inspected.

Company inputs still needed: project photography/renders and detailed plans for Barsana, Raman Reti and Manasi Ganga; current availability, pricing and visit confirmation directly from SIPL. Existing project statuses are retained from repository company material, not freshly independently verified. Higher-resolution approved Varanasi and Kashi exterior photography would improve the existing images. No new statistics, distances, testimonials or booking backend added.

## Verification and preview

`npm run build`, `npm run typecheck`; browser audit in `editorial-browser-qa.json`; screenshots in `visual-review/editorial`. Tested preserved concierge, project discovery, keyboard interaction, reduced motion, routes/metadata, gallery swipe and keyboard, document zoom, residence selector, EMI arithmetic, career handoff, popup focus, new enquiry drafts and responsive menu. Existing legacy homepage tests contain previous headline/type-scale expectations and were not used as design acceptance criteria.

One desktop concierge timeout passed on isolated rerun. An unbounded full-page screenshot run crashed Chrome; the bounded capture audit replaces that run. Screenshots and campaign review PDF are review artifacts, not the website implementation.

Local preview: `http://localhost:3000`; start with `npm run dev -- --port 3000`. Enquiries prepare email drafts; nothing is sent until the visitor sends from their email app.

Final results: production build and typecheck passed; 112 route/viewport checks (28 routes × 4 widths) found no overflow, duplicate/missing H1 or broken loaded images. Dedicated enquiry tests passed at 390 and 1440px. Twelve distinct targeted interaction/regression tests passed, with the desktop concierge case requiring one isolated rerun. Campaign PDF: `visual-review/editorial/campaign-review.pdf`.
