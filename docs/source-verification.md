> Historical pre-corporate verification record. The 10–11 September corporate redesign supersedes its homepage/hero and missing-About observations. See `CORPORATE_HANDOVER.md` for the successful About-page recovery, 2013 foundation, team records and current architecture. Original observations below are preserved for traceability.

# Source verification and final implementation notes

## Audit scope

The available supplied company directory contained 357 files, 201 distinct byte-identical sources, and 176 distinct standard-format images. All files were inventoried with sizes and SHA-256 hashes in `source-inventory.json`; duplicate images were grouped and the distinct image set visually reviewed in contact sheets. All 27 pages of the supplied image-based brochure and all 28 pages of the official linked brochure were visually reviewed. Strong relevant plan pages and certification material were inspected separately. Historical PHP/CSS/JS was used as reference only. There were no archives in the available supplied directory to extract. Extensionless staff/profile files, unrelated stock, events and duplicate media are catalogued but not repurposed as project architecture.

## Official access

Successfully accessed during this implementation:

- https://siplgroup.in/ — company themes, real estate/hospitality portfolio structure, contacts and official brochure/walkthrough links.
- https://siplgroup.in/sri-krishna-vilas/ — address, 2.65 acres, 1/1.5/2/3 BHK, developer context, two-tower design themes, project highlights and nearby-development qualifiers.
- https://siplgroup.in/wp-content/uploads/2025/02/Brochure.pdf — downloaded and inspected as the official linked 28-page edition; copied into public/documents.

Access failed in the web tool for the linked YouTube video https://www.youtube.com/watch?v=3hNM2ulWbI4, `/about-us`, and several linked individual plan-image URLs (cache/fetch errors). We do not claim to have fetched those pages. The YouTube URL was verified as SIPL’s link; the actual locally supplied walkthrough was inspected instead. Company copy is grounded in the successfully fetched home page and supplied company source, not a claimed successful about-page fetch.

## Verified facts used

SIPL Group / Building Trust; trust, ethics, principles and quality/customer themes; Real Estate and Hospitality; Sri Krishna Vilas on Lahartara-Bhitari Road, Varanasi; 2.65 acres; 1, 1.5, 2 and 3 BHK; 70% open area; the exact 12 official project highlights; developer Shreemaa Infrarealty Private Limited, a SIPL Group company; helpdesk 0542-4000511; email@siplgroup.in; both official office addresses. Portfolio uses the official navigation categories and qualifiers: Sri Krishna Vilas / running, Barsana and Raman Reti / upcoming real estate; The Kashi Residency / running and Manasi Ganga / upcoming hospitality.

The supplied `GH240670.jpg` visibly identifies Sri Krishna Vilas, IGBC Green Homes, Precertified Gold and November 2025. It is presented only as precertification. Its stated renewal conditions are retained; no assertion of final certification or current renewal is made.

## Conflicts and omissions

- The 27-page supplied brochure and 28-page official linked brochure differ in master-plan presentation, plan types/areas and imagery. The official linked master-plan presentation aligns with the current supplied architectural renders. Reference plan sources are labelled rather than synthesised into an inventory.
- 1 BHK reference: supplied brochure page 13. 2 BHK reference: official linked brochure page 17. 3 BHK reference: official linked brochure page 21. These are whole source-page previews with their original embedded labels. Areas are not extracted into sales UI; visitors are instructed to confirm current plans. No 1.5 BHK plan could be clearly identified, so it is available on request.
- Old Manasi Ganga descriptive text conflicts with the official navigation classification. The final public portfolio follows the official hospitality category and supplied user baseline, omitting the conflicting township specifics.
- “Nine-year history” is retained only as a source observation, not displayed as current tenure. No extrapolated founding/tenure statistic.
- Proposed Cable Car and Proposed 6 Lane Road qualifiers remain proposed; the stadium remains sanctioned. Other infrastructure is presented as SIPL’s connectivity/city references, with current delivery status available on request. No distances or travel times are displayed, even where an older brochure includes them.
- No RERA/VDA registration number, legal approval ID, possession/completion date, percentage progress, availability, price, payment plan, unit inventory, floor count, area claim, ROI or investment guarantee was added. Brochure approval logos/stamps are not treated as independently verified legal approvals.
- No verified WhatsApp mobile number was found in the inspected material. Call and email are provided; no WhatsApp number is invented.

## Media choices

Existing optimized front/west-north/master-plan/walkway/atrium/lobby/pool/open-gym/jogging/badminton/theatre/living/bedroom/site/hospitality images remain in use. Added east-side, front, aerial and evening project renders; source-brochure-confirmed club house, indoor gym/spa and guest room; supplied kids-play frame; genuine additional site photos; actual Barsana/Raman Reti/Manasi Ganga identities; and the supplied Varanasi riverfront image, explicitly labelled city context rather than the project site.

Excluded: unrelated foreign-city skylines, generic apartment/stock imagery, generic engineers/security images, generic stock sports and interiors without project support, staff portraits and event images not needed for the buyer journey. No architecture was generated, morphed or redrawn.

The earlier 10-second clip remains inactive. On 9 September 2026 the user supplied and explicitly approved `public/media/sri-krishna-vilas-tour.mp4`. Its original is untouched; the homepage and project hero use a 1080p, 24 fps H.264 fast-start derivative with no audio. The image poster remains available for mobile, reduced motion, Save-Data and autoplay failure. The nearly five-minute supplied walkthrough was inspected, optimized and prepared as a silent web derivative with a written visual alternative. The source originals were not edited.

## Architecture and production limits

The final frontend uses reusable React/TypeScript components in the existing Next.js application. This preserves the useful modern foundation while replacing sparse layout and unverified public selectors. It requires no PHP runtime, proprietary editor, account or paid service. Vite was a preference, not a runtime requirement; migrating frameworks would not improve the visible experience or ZIP portability.

Forms prepare local data only and provide call/email handoff. Connect a verified endpoint before claiming online delivery. Site-visit time windows are preferences only. FAQs and priorities are deterministic and use central source data. No account, database, fake live agent, availability engine or pricing system exists.

Real 3D: use the existing `Whole model.skp` and second supplied SKP in the next phase. A local model was found at `/home/devansh/Documents/lobby_files/skv entrance flat lobby1.skp`; confirm whole-development model location and roles within the supplied set when conversion begins. Preserve originals; inspect units/materials/components, export GLB/glTF, optimize geometry and textures, verify nodes/camera positions, then provide the adapter defined by `ModelViewportProps`. The current reference UI owns no fake geometry and exposes no rotate control for 2D imagery.
