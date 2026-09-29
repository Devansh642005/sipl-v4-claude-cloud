# SIPL Group corporate website

A multi-page Next.js App Router / React / TypeScript frontend for SIPL Group’s real estate and hospitality portfolio in Varanasi. The corporate homepage leads into dedicated company, project and customer-resource routes.

## Run locally

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run build
npm run start
```

## Browser tests

```sh
npx playwright install chromium
npm run test:e2e
```

Alternatively set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an existing Chrome/Chromium executable. Tests cover routes at 390/768/1440, smaller mobile layouts, project filters, navigation, lead modal, forms, film, galleries, master-plan viewer and EMI arithmetic.

No lint command is configured. Prettier is available for source formatting.

## Content and media

Start with `docs/CORPORATE_HANDOVER.md`, `docs/ASSET_REPLACEMENT_GUIDE.md` and `docs/CLIENT_CONTENT_REQUIRED.md`. Public content lives in `src/data/`; components consume structured records. Missing factual content is omitted rather than invented. Original project components and media remain preserved where useful.

## Forms and deployment

Forms prepare email drafts; they do not automatically send or upload data. `src/lib/enquiry.ts` is the transport adapter for corporate forms. Connect an approved backend before changing the delivery language. No unverified WhatsApp number is published.

Run with `SIPL_ALLOW_INDEXING=true` only for an approved production deployment. The default preview configuration is noindex. The app needs a Node-compatible Next.js host for image optimisation and routing; the ZIP is portable source, not a PHP theme or a prebuilt static export.

## Export

```sh
npm run export:zip
```

Output: `exports/sipl-group-frontend.zip`. It contains source, public media, docs, tests and lockfile, with no node_modules, build cache or other export archives. Extract it into a fresh directory and run `npm ci`, `npm run typecheck`, and `npm run build` to validate independently.
