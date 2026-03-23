# Gatsby to Next.js Migration Design

**Date:** 2026-03-22
**Project:** dbowland-ui (dbowland.com)
**Status:** Approved

## Overview

Migrate the personal website from Gatsby 5 to Next.js (Pages Router) with static export. The site is deployed as static files to S3 behind CloudFront. All infrastructure remains unchanged. The migration addresses Gatsby's stagnating ecosystem while preserving identical user-facing output.

## Goals

- Replace Gatsby with Next.js Pages Router
- Maintain static export to S3 (`output: 'export'`)
- Establish a reusable image optimization pattern (`next-export-optimize-images`) for use across other UIs
- Preserve all CloudFront error page routing (400, 403, 404, 500)
- Preserve caching strategy (content-hashed assets: 1-year immutable; HTML/JSON/XML: no-cache)

## Non-Goals

- Server-side rendering (SSR) or runtime Node server
- App Router migration
- Infrastructure changes to `template.yaml`, CloudFront, S3, or Route53
- MUI dark mode flash elimination (known cosmetic issue, pre-existing)

## Architecture

The output is identical to today: a directory of static HTML/CSS/JS files uploaded to S3. CloudFront serves them with the existing URL rewrite function and error page routing. No behavioral change for users.

## Section 1: Configuration

### `next.config.js` (replaces `gatsby-config.js` and `gatsby-node.js`)

```js
const withExportImages = require('next-export-optimize-images')
const path = require('path')

module.exports = withExportImages({
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['tsx', 'ts'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  webpack: (config) => {
    // Remove if confirmed unnecessary after testing
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    }
    return config
  },
})
```

Path aliases: `tsconfig.json` already has the correct `paths` entries — Next.js resolves them natively with no changes needed. The existing Gatsby alias plugin is removed and replaced by what's already in `tsconfig.json`.

### `next-sitemap.config.js` (replaces `gatsby-plugin-sitemap`)

```js
module.exports = {
  siteUrl: 'https://dbowland.com',
}
```

Sitemap generation runs via a `postbuild` npm lifecycle script, which npm executes automatically after `next build` completes.

### Files deleted

- `gatsby-config.js`
- `gatsby-node.js`
- `jest.preprocess.js`
- `__mocks__/gatsby.js`

### Directory renamed

- `static/` → `public/`

## Section 2: New files — `_app.tsx` and `_document.tsx`

### `src/pages/_app.tsx`

Global wrapper for all pages. Owns font imports, global CSS imports, and the MUI theme provider. Font and CSS imports move here from `Themed`:

```tsx
import Themed from '@components/themed'
import '@fontsource/roboto'
import type { AppProps } from 'next/app'

import '@assets/css/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Themed>
      <Component {...pageProps} />
    </Themed>
  )
}
```

### `src/pages/_document.tsx`

Defines the HTML shell. Styled-components SSR is handled by the SWC compiler (`compiler.styledComponents: true` in `next.config.js`), so no `ServerStyleSheet` setup is needed here:

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

## Section 3: Pages and components

### Pages — two changes per page (all 11 pages)

This applies to every page: `index.tsx`, `projects.tsx`, `marriage.tsx`, `genographic.tsx`, `privacy-policy.tsx`, `smooth-scroll.tsx`, `form-submit.tsx`, `proposal.tsx`, `wedding.tsx`, `404.tsx`, `400.tsx`, `403.tsx`, `500.tsx`.

**1. `Head` export → `next/head`**

All pages use Gatsby's `Head` export pattern. Replace with `<Head>` from `next/head` inside the component. The Gatsby `Head` export is removed and its contents move inside the component JSX:

```tsx
// Before (Gatsby) — simple title
export const Head = () => <title>David Bowland | Software Developer</title>

// After (Next.js)
import Head from 'next/head'
// Inside JSX:
<Head><title>David Bowland | Software Developer</title></Head>
```

Four pages have fragment `Head` exports with multiple children and need explicit treatment:

`smooth-scroll.tsx` and `form-submit.tsx` contain a `<title>` and a `<script>` tag:

```tsx
// Before (Gatsby)
export const Head = () => (
  <>
    <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
    <script defer src="/smooth-scroll.js"></script>
  </>
)

// After (Next.js) — fragment replaced with <Head>, multiple children supported natively
import Head from 'next/head'
// Inside JSX:
<Head>
  <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
  <script defer src="/smooth-scroll.js"></script>
</Head>
```

`proposal.tsx` and `wedding.tsx` contain a `<title>` and a `<RedirectHead>` component:

```tsx
// Before (Gatsby)
export const Head = () => (
  <>
    <title>Redirecting...</title>
    <RedirectHead id={VIDEO_ID} type={DriveFileRedirect} />
  </>
)

// After (Next.js)
import Head from 'next/head'
// Inside JSX:
<Head>
  <title>Redirecting...</title>
  <RedirectHead id={VIDEO_ID} type={DriveFileRedirect} />
</Head>
```

**2. Remove `react-helmet` imports** if present (not widely used in this codebase).

The `RedirectHead` component renders a `<meta>` refresh tag — it continues to work the same way, placed inside `<Head>` on pages that use it.

### Components — gatsby Link imports (7 files)

Every component that imports `{ Link } from 'gatsby'` needs the same two changes:

- `import { Link } from 'gatsby'` → `import Link from 'next/link'`
- Every `<Link to="...">` → `<Link href="...">`

Affected files:

- `src/components/title-bar/index.tsx` — the `style` prop on `<Link>` is valid in Next.js v13+ (renders directly to `<a>`); no wrapping needed
- `src/components/resume/elements.tsx` — `ResumeLink = styled(Link)` stays as-is; the `to` → `href` rename happens at the usage site in `resume/index.tsx`: `<ResumeLink to={resumePdf}>` → `<ResumeLink href={resumePdf}>`
- `src/components/privacy-policy/index.tsx` — three usages
- `src/components/projects-table/index.tsx` — many usages
- `src/components/privacy-link/index.tsx` — one usage
- `src/components/server-error-message/index.tsx` — one usage
- `src/components/genographic-infographic/index.tsx` — one usage (also wraps a `StaticImage`, see below)

### Components — StaticImage → next/image (3 files)

All `StaticImage` usages replace with `Image` from `next-export-optimize-images/image`. The `src` changes from a relative string to an imported asset. The `imgStyle` prop (Gatsby-specific, targets the inner `<img>`) becomes `style` merged with the outer `style` on the `<Image>` component.

**`src/components/resume/index.tsx`:**

```tsx
// Before
import { StaticImage } from 'gatsby-plugin-image'
<StaticImage alt="Picture of David Bowland" src="../../assets/images/David-2023-05-10.jpg" style={ResumeImageStyles} />

// After
import Image from 'next-export-optimize-images/image'
import headshot from '@assets/images/David-2023-05-10.jpg'
<Image alt="Picture of David Bowland" src={headshot} style={ResumeImageStyles} />
```

**`src/components/projects-table/index.tsx`** (3 instances — emails, jokes, choosee diagrams):

```tsx
// Before
import { StaticImage } from 'gatsby-plugin-image'
<StaticImage alt="Diagram of emails project" imgStyle={{ objectFit: 'contain' }} src="../../assets/images/emails-diagram.png" style={ProjectImageStyles} />

// After
import Image from 'next-export-optimize-images/image'
import emailsDiagram from '@assets/images/emails-diagram.png'
<Image alt="Diagram of emails project" src={emailsDiagram} style={{ ...ProjectImageStyles, objectFit: 'contain' }} />
```

Same pattern for `jokes-diagram.png` and `choosee-diagram.png`.

**`src/components/genographic-infographic/index.tsx`** (1 instance, wrapped in a `<Link>`):

```tsx
// Before
import { StaticImage } from 'gatsby-plugin-image'
<Link to={genographicPdf}>
  <StaticImage alt="..." src="../../assets/images/genographic-infographic.png" />
</Link>

// After
import Image from 'next-export-optimize-images/image'
import genographicInfographic from '@assets/images/genographic-infographic.png'
<Link href={genographicPdf}>
  <Image alt="..." src={genographicInfographic} />
</Link>
```

### `Themed` (`src/components/themed/index.tsx`)

Remove `@fontsource/roboto` and `@assets/css/index.css` imports (moved to `_app.tsx`). Component logic is otherwise unchanged.

### Font imports in `smooth-scroll.tsx` and `form-submit.tsx`

Both pages contain `import '@fontsource/fira-code'`. This import stays in place — Next.js allows CSS imports from `node_modules` anywhere in the application, so page-level font imports are valid.

## Section 4: Testing

### `jest.config.ts`

Replace the Gatsby-specific transform setup with `next/jest`:

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['.*\\.d\\.ts', 'config/*', 'types.ts'],
  coverageThreshold: {
    global: { branches: 90, functions: 90, lines: 80 },
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|yaml)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
    '@fontsource/(.*)$': '<rootDir>/__mocks__/file-mock.js',
  },
  setupFiles: ['<rootDir>/jest.setup-test-env.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/out'],
}

export default createJestConfig(config)
```

**Removed from jest config:**

- `gatsby-page-utils` moduleNameMapper workaround
- `__PATH_PREFIX__` global
- `transformIgnorePatterns` with gatsby special case
- `transform` block (handled by `next/jest`)

**Unchanged:**

- Coverage thresholds (90/90/80)
- `jest.setup-test-env.js`
- `test/__mocks__.ts`
- `__mocks__/file-mock.js`
- `identity-obj-proxy` for CSS (kept explicitly — `next/jest` only auto-mocks CSS modules, not plain `.css` imports)

## Section 5: Dependencies

### Remove

| Package                                                | Reason                                    |
| ------------------------------------------------------ | ----------------------------------------- |
| `gatsby` + all `gatsby-plugin-*`                       | Replaced by Next.js                       |
| `gatsby-plugin-alias-imports`                          | Replaced by native `tsconfig.json` paths  |
| `gatsby-plugin-mdx`                                    | No MDX files in project                   |
| `gatsby-transformer-sharp`, `gatsby-source-filesystem` | Replaced by `next-export-optimize-images` |
| `@mdx-js/mdx`, `@mdx-js/react`                         | No MDX files in project                   |
| `react-helmet`, `@types/react-helmet`                  | Replaced by `next/head`                   |
| `graphql`                                              | Gatsby data layer removed                 |
| `babel-preset-gatsby`                                  | Replaced by `next/jest`                   |
| `babel-plugin-styled-components`                       | Replaced by SWC compiler                  |
| `babel-jest`, `@babel/preset-typescript`               | Replaced by `next/jest` SWC transform     |
| `ts-jest`                                              | Unused in current config; remove          |
| `crypto-browserify`, `stream-browserify`               | Verify necessity; remove if not needed    |

### Add

| Package                       | Purpose                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `next`                        | Framework                                               |
| `next-export-optimize-images` | Build-time image optimization for static export         |
| `next-sitemap`                | Sitemap generation (replaces `gatsby-plugin-sitemap`)   |
| `sass`                        | SASS support (Next.js built-in, just needs the package) |

## Section 6: Scripts and pipeline

### `package.json` scripts

The current `build` script runs `npm run clean` (which reinstalls all packages) before every build. This is intentionally decoupled in the new scripts — `next build` supports incremental builds and does not require a clean slate. Run `npm run clean` manually when a full reset is needed.

```json
{
  "build": "next build",
  "postbuild": "next-sitemap",
  "clean": "rm -rf .next coverage out && npm ci",
  "start": "next dev",
  "serve": "next build && npx serve out",
  "test": "jest --colors",
  "lint": "prettier --write . && eslint --fix .",
  "prepare": "husky",
  "typecheck": "tsc --noEmit",
  "update": "npx update-browserslist-db@latest && ncu --doctor --target minor --upgrade && npm audit fix --audit-level=none && npm run test && npm dedupe"
}
```

### `scripts/copyToS3.sh`

One line change — line 13:

```bash
# Before
cd public
# After
cd out
```

The caching strategy (content-hashed assets get `max-age=31536000, immutable`; HTML/JSON/XML get `no-cache`) is unchanged and works identically with Next.js.

### `.github/workflows/pipeline.yaml`

Update three step names from "Build Gatsby site" to "Build Next.js site". The `run: npm run build` commands are unchanged since the script handles the difference.

### `template.yaml`

**No changes.** CloudFront error page routing (`/400.html`, `/403.html`, `/404.html`, `/500.html`), the URL rewrite function, S3 buckets, Route53, and certificates are all unaffected. Next.js static export generates these HTML files at the same paths.

## Verification checklist

- [ ] `next build` succeeds with no errors
- [ ] `out/` directory contains all expected HTML files including `400.html`, `403.html`, `404.html`, `500.html`
- [ ] `out/sitemap.xml` generated
- [ ] All pages render correctly at `http://localhost:3000` (`next dev`)
- [ ] Dark mode toggle works (minor flash acceptable)
- [ ] Headshot image in resume renders correctly with responsive srcset
- [ ] All Jest tests pass with coverage thresholds met
- [ ] `copyToS3.sh` uploads from `out/` successfully
- [ ] CloudFront error pages route correctly in test environment
- [ ] `crypto-browserify`/`stream-browserify` removed if confirmed unnecessary
