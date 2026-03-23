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

Path aliases are configured in `tsconfig.json` `paths` — Next.js resolves them natively:

```json
{
  "compilerOptions": {
    "paths": {
      "@assets/*": ["./src/assets/*"],
      "@components/*": ["./src/components/*"],
      "@config/*": ["./src/config/*"],
      "@pages/*": ["./src/pages/$1"],
      "@test/*": ["./test/*"]
    }
  }
}
```

### `next-sitemap.config.js` (replaces `gatsby-plugin-sitemap`)

```js
module.exports = {
  siteUrl: 'https://dbowland.com',
}
```

Sitemap generation runs as a `postbuild` script after `next build`.

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

### Pages — two changes per page

**1. `Head` export → `next/head`**

All pages use Gatsby's `Head` export pattern. Replace with `<Head>` from `next/head` inside the component:

```tsx
// Before (Gatsby)
export const Head = () => <title>David Bowland | Software Developer</title>

// After (Next.js)
import Head from 'next/head'
// Inside JSX:
<Head><title>David Bowland | Software Developer</title></Head>
```

**2. Remove `react-helmet` imports** if present (not widely used in this codebase).

The `RedirectHead` component renders a `<meta>` refresh tag — it continues to work the same way, placed inside `<Head>` on pages that use it.

### Components — two need changes

**`TitleBar`** (`src/components/title-bar/index.tsx`):

- `import { Link } from 'gatsby'` → `import Link from 'next/link'`
- `<Link to="/">` → `<Link href="/">`
- Move inline `style` to a wrapping `<span>` or `<a>` (Next.js `<Link>` renders an `<a>` directly in v13+)

**`Resume`** (`src/components/resume/index.tsx`):

- `StaticImage` from `gatsby-plugin-image` → `Image` from `next-export-optimize-images/image`
- `src` changes from a relative string to an imported asset

```tsx
// Before
import { StaticImage } from 'gatsby-plugin-image'
<StaticImage alt="Picture of David Bowland" src="../../assets/images/David-2023-05-10.jpg" style={ResumeImageStyles} />

// After
import Image from 'next-export-optimize-images/image'
import headshot from '@assets/images/David-2023-05-10.jpg'
<Image alt="Picture of David Bowland" src={headshot} style={ResumeImageStyles} />
```

**`Themed`** (`src/components/themed/index.tsx`):

Remove `@fontsource/roboto` and `@assets/css/index.css` imports (moved to `_app.tsx`). Component logic is otherwise unchanged.

All other components need no changes.

## Section 4: Testing

### `jest.config.ts`

Replace the Gatsby-specific transform setup with `next/jest`:

```ts
import type { Config } from 'jest'

const nextJest = require('next/jest')
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
- `identity-obj-proxy` for CSS (handled automatically by `next/jest`)

## Section 5: Dependencies

### Remove

| Package                                                | Reason                                    |
| ------------------------------------------------------ | ----------------------------------------- |
| `gatsby` + all `gatsby-plugin-*`                       | Replaced by Next.js                       |
| `gatsby-transformer-sharp`, `gatsby-source-filesystem` | Replaced by `next-export-optimize-images` |
| `@mdx-js/mdx`, `@mdx-js/react`                         | No MDX files in project                   |
| `react-helmet`, `@types/react-helmet`                  | Replaced by `next/head`                   |
| `graphql`                                              | Gatsby data layer removed                 |
| `babel-preset-gatsby`                                  | Replaced by `next/jest`                   |
| `babel-plugin-styled-components`                       | Replaced by SWC compiler                  |
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

```json
{
  "build": "next build && next-sitemap",
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
