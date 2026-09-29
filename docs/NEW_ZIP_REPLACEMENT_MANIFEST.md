# V4 replacement manifest

The registry is `src/data/new-zip-media.json`, merged into `src/data/media.ts`. All entries below belong only to Sri Krishna Vilas and are architectural renders. Existing source files are preserved.

| Media ID | Production file | Exact archive member | Pixels | Bytes |
|---|---|---|---|---|
| hero | `/media/sri-krishna-vilas/v4/hero.webp` | `Image & Video/front view_Day exterior view.png` | 2240 × 1260 | 314,778 |
| architecture | `/media/sri-krishna-vilas/v4/architecture.webp` | `Image & Video/west-north side view.png` | 2240 × 1260 | 336,736 |
| walkway | `/media/sri-krishna-vilas/v4/walkway.webp` | `Image & Video/Alliway.png` | 1920 × 1080 | 238,532 |
| pool | `/media/sri-krishna-vilas/v4/pool.webp` | `Image & Video/Pool view.png` | 1920 × 1080 | 339,464 |
| gym | `/media/sri-krishna-vilas/v4/gym.webp` | `Image & Video/Open gym.png` | 1920 × 1080 | 519,822 |
| jogging | `/media/sri-krishna-vilas/v4/jogging.webp` | `Image & Video/Jogging track.png` | 1920 × 1080 | 203,266 |
| atrium | `/media/sri-krishna-vilas/v4/atrium.webp` | `Image & Video/Atrium.png` | 1920 × 1080 | 114,136 |
| badminton | `/media/sri-krishna-vilas/v4/badminton.webp` | `Image & Video/Badminton court.png` | 1920 × 1080 | 656,662 |
| east | `/media/sri-krishna-vilas/v4/east.webp` | `Image & Video/East side.png` | 2240 × 1260 | 529,330 |
| master-plan | `/media/sri-krishna-vilas/v4/master-plan.webp` | `Image & Video/Plan.png` | 2800 × 1575 | 614,552 |
| v4-arrival | `/media/sri-krishna-vilas/v4/v4-arrival.webp` | `Image & Video/Main Gate.png` | 2240 × 1260 | 346,468 |

## Integration points

- Project discovery reads each project’s own media ID. Sri Krishna Vilas alone resolves to the new exterior.
- Sri Krishna Vilas hero uses `v4-arrival`; architecture, master plan, amenities and gallery read their matching IDs.
- Krishna returns a media ID from a verified intent; it never searches arbitrary images or infers identity.
- Existing gallery URL references are migrated at the registry boundary using `mediaReplacementBySource`.
- Corporate hero remains Varanasi context; corporate stories use the existing official event archive.
- Hospitality and upcoming-project identities are unchanged.

## Replacement procedure

Copy only approved, optimized assets into the matching project folder. Update the single media record (including sourceArchivePath, verificationStatus, focalPoint and dimensions). Do not change a project association based on visual similarity alone. Review crops at 390, 768 and 1440 pixels and check the gallery/concierge image views.
