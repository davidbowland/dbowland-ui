# Gatsby to Next.js Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate dbowland-ui from Gatsby 5 to Next.js Pages Router with static export, preserving identical build output for S3/CloudFront deployment.

**Architecture:** Next.js `output: 'export'` generates a static `out/` directory replacing Gatsby's `public/`. Pages Router is used with `_app.tsx` for global providers and `_document.tsx` for the HTML shell. Image optimization uses `next-export-optimize-images` and sitemap generation uses `next-sitemap` via a `postbuild` script.

**Tech Stack:** Next.js (Pages Router), next-export-optimize-images, next-sitemap, sass, styled-components (SWC compiler), next/jest (replaces babel-jest + babel-preset-gatsby)

---

## File Map

**Created:**

- `next.config.js`
- `next-sitemap.config.js`
- `src/pages/_app.tsx`
- `src/pages/_document.tsx`

**Modified:**

- `package.json` — scripts, dependencies
- `jest.config.ts` — replace with next/jest config
- `src/components/themed/index.tsx` — remove font/CSS imports (moved to \_app.tsx)
- `src/components/title-bar/index.tsx` — gatsby Link → next/link
- `src/components/resume/elements.tsx` — gatsby Link → next/link
- `src/components/resume/index.tsx` — gatsby Link + StaticImage → next/link + Image
- `src/components/privacy-link/index.tsx` — gatsby Link → next/link
- `src/components/privacy-policy/index.tsx` — gatsby Link → next/link
- `src/components/server-error-message/index.tsx` — gatsby Link → next/link
- `src/components/projects-table/index.tsx` — gatsby Link + 3× StaticImage → next/link + Image
- `src/components/genographic-infographic/index.tsx` — gatsby Link + StaticImage → next/link + Image
- All 13 pages in `src/pages/` — Gatsby `Head` export → `next/head` inside component
- All 13 page test files — remove separate `Head` render; render page component to test title
- `scripts/copyToS3.sh` line 13 — `cd public` → `cd out`
- `.github/workflows/pipeline.yaml` — 3 step name strings

**Renamed:**

- `static/` → `public/`

**Deleted:**

- `gatsby-config.js`
- `gatsby-node.js`
- `jest.preprocess.js`
- `__mocks__/gatsby.js`

---

## Task 1: Add Next.js packages to package.json

**Files:**

- Modify: `package.json`

- [ ] **Step 1: Update package.json scripts and dependencies**

  Replace the `scripts` block:

  ```json
  "scripts": {
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

  In `dependencies`, remove these packages entirely:
  - `@mdx-js/mdx`
  - `@mdx-js/react`
  - `babel-plugin-styled-components`
  - `crypto-browserify`
  - `gatsby`
  - `gatsby-plugin-alias-imports`
  - `gatsby-plugin-image`
  - `gatsby-plugin-mdx`
  - `gatsby-plugin-sass`
  - `gatsby-plugin-sharp`
  - `gatsby-plugin-sitemap`
  - `gatsby-plugin-styled-components`
  - `gatsby-source-filesystem`
  - `gatsby-transformer-sharp`
  - `graphql`
  - `react-helmet`
  - `stream-browserify`
  - `ts-node`

  Add to `dependencies`:

  ```json
  "next": "^14.2.0",
  "next-export-optimize-images": "^4.0.0",
  "next-sitemap": "^4.2.3",
  "sass": "^1.77.0"
  ```

  In `devDependencies`, remove:
  - `@babel/preset-typescript`
  - `@types/react-helmet`
  - `babel-jest`
  - `babel-preset-gatsby`
  - `ts-jest`

  Remove the `overrides` block entirely (it only existed for Gatsby dependencies).

- [ ] **Step 2: Install packages**

  ```bash
  npm install --legacy-peer-deps
  ```

  Expected: installs successfully, no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add package.json package-lock.json
  git commit -m "chore: add next.js packages, remove gatsby packages"
  ```

---

## Task 2: Replace jest.config.ts

**Files:**

- Modify: `jest.config.ts`
- Delete: `jest.preprocess.js`

- [ ] **Step 1: Replace jest.config.ts**

  Overwrite `jest.config.ts` with:

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

  Key changes from old config:
  - Removed: `gatsby-page-utils` moduleNameMapper workaround
  - Removed: `globals: { __PATH_PREFIX__: '' }`
  - Removed: `transform` block
  - Removed: `transformIgnorePatterns` with gatsby special case
  - Changed: `testPathIgnorePatterns` replaces `public` with `out`
  - Added: `import nextJest from 'next/jest'` + `createJestConfig` wrapper

- [ ] **Step 2: Delete jest.preprocess.js**

  ```bash
  rm jest.preprocess.js
  ```

- [ ] **Step 3: Commit**

  ```bash
  git add jest.config.ts jest.preprocess.js
  git commit -m "chore: replace jest config with next/jest"
  ```

---

## Task 3: Create next.config.js

**Files:**

- Create: `next.config.js`

- [ ] **Step 1: Create next.config.js**

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
  })
  ```

  Note: The webpack crypto/stream fallback from `gatsby-node.js` is omitted. If `next build` fails with crypto/stream errors, add back:

  ```js
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    }
    return config
  },
  ```

  and re-add `crypto-browserify` and `stream-browserify` to `package.json` dependencies.

- [ ] **Step 2: Commit**

  ```bash
  git add next.config.js
  git commit -m "chore: add next.config.js"
  ```

---

## Task 4: Create next-sitemap.config.js

**Files:**

- Create: `next-sitemap.config.js`

- [ ] **Step 1: Create next-sitemap.config.js**

  ```js
  module.exports = {
    siteUrl: 'https://dbowland.com',
  }
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add next-sitemap.config.js
  git commit -m "chore: add next-sitemap config"
  ```

---

## Task 5: Rename static/ to public/

**Files:**

- Rename: `static/` → `public/`

The `static/` directory contains `form-submit.js` and `smooth-scroll.js` which are referenced by `<script src="/form-submit.js">` and `<script src="/smooth-scroll.js">` in page Head sections. Next.js serves files from `public/` at the root URL, matching the current Gatsby `static/` behavior.

- [ ] **Step 1: Rename the directory**

  ```bash
  git mv static public
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add -A
  git commit -m "chore: rename static/ to public/ for next.js"
  ```

---

## Task 6: Create src/pages/\_document.tsx

**Files:**

- Create: `src/pages/_document.tsx`

- [ ] **Step 1: Create \_document.tsx**

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

- [ ] **Step 2: Commit**

  ```bash
  git add src/pages/_document.tsx
  git commit -m "feat: add next.js _document.tsx"
  ```

---

## Task 7: Create src/pages/\_app.tsx and update Themed

**Files:**

- Create: `src/pages/_app.tsx`
- Modify: `src/components/themed/index.tsx`
- Test: `src/components/themed/index.test.tsx`

`_app.tsx` owns the global font and CSS imports that currently live in `Themed`. `Themed` keeps the MUI theme provider logic.

- [ ] **Step 1: Write a failing test for Themed**

  In `src/components/themed/index.test.tsx`, verify the test still passes after the imports are removed. Run it first to confirm it passes currently:

  ```bash
  npx jest src/components/themed/index.test.tsx --colors
  ```

  Expected: PASS (baseline).

- [ ] **Step 2: Update src/components/themed/index.tsx**

  Remove the two import lines at the top:

  ```tsx
  // Remove these two lines:
  import '@fontsource/roboto'

  import '@assets/css/index.css'
  ```

  The rest of the file is unchanged.

- [ ] **Step 3: Run the Themed test**

  ```bash
  npx jest src/components/themed/index.test.tsx --colors
  ```

  Expected: PASS (the component behavior is unchanged).

- [ ] **Step 4: Create src/pages/\_app.tsx**

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

- [ ] **Step 5: Commit**

  ```bash
  git add src/pages/_app.tsx src/components/themed/index.tsx
  git commit -m "feat: add _app.tsx, move font/css imports from Themed"
  ```

---

## Task 8: Update src/components/title-bar/index.tsx

**Files:**

- Modify: `src/components/title-bar/index.tsx`
- Test: `src/components/title-bar/index.test.tsx`

- [ ] **Step 1: Run the current test as a baseline**

  ```bash
  npx jest src/components/title-bar/index.test.tsx --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update title-bar/index.tsx**

  Change line 1:

  ```tsx
  // Before
  import { Link } from 'gatsby'

  // After
  import Link from 'next/link'
  ```

  Change both `<Link to="/">` usages (lines 67 and 120) to `<Link href="/">`:

  ```tsx
  // Before (line 67)
  <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">

  // After
  <Link style={{ color: '#fff', textDecoration: 'none' }} href="/">
  ```

  ```tsx
  // Before (line 120)
  <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">

  // After
  <Link style={{ color: '#fff', textDecoration: 'none' }} href="/">
  ```

- [ ] **Step 3: Run the test**

  ```bash
  npx jest src/components/title-bar/index.test.tsx --colors
  ```

  Expected: PASS.

- [ ] **Step 4: Commit**

  ```bash
  git add src/components/title-bar/index.tsx
  git commit -m "feat: migrate title-bar to next/link"
  ```

---

## Task 9: Update src/components/resume/elements.tsx and index.tsx

**Files:**

- Modify: `src/components/resume/elements.tsx`
- Modify: `src/components/resume/index.tsx`
- Test: `src/components/resume/index.test.tsx`

- [ ] **Step 1: Run the current test as a baseline**

  ```bash
  npx jest src/components/resume/index.test.tsx --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update resume/elements.tsx**

  Change line 1:

  ```tsx
  // Before
  import { Link } from 'gatsby'

  // After
  import Link from 'next/link'
  ```

  The `ResumeLink = styled(Link)` definition is unchanged — `styled(Link)` works identically with `next/link`.

- [ ] **Step 3: Update resume/index.tsx — Link and StaticImage**

  Change line 1:

  ```tsx
  // Before
  import { StaticImage } from 'gatsby-plugin-image'
  // After
  import Image from 'next-export-optimize-images/image'

  import headshot from '@assets/images/David-2023-05-10.jpg'
  ```

  Change the `<StaticImage>` usage (around line 55):

  ```tsx
  // Before
  <StaticImage
    alt="Picture of David Bowland"
    src="../../assets/images/David-2023-05-10.jpg"
    style={ResumeImageStyles}
  />

  // After
  <Image alt="Picture of David Bowland" src={headshot} style={ResumeImageStyles} />
  ```

  Change the `<ResumeLink to={resumePdf}>` usage (around line 66):

  ```tsx
  // Before
  <ResumeLink to={resumePdf}>Download Resume</ResumeLink>

  // After
  <ResumeLink href={resumePdf}>Download Resume</ResumeLink>
  ```

- [ ] **Step 4: Run the test**

  ```bash
  npx jest src/components/resume/index.test.tsx --colors
  ```

  Expected: PASS. The test checks `getAllByRole('link')` — `ResumeLink` (styled next/link) still renders as `<a>`, so href attributes are accessible.

- [ ] **Step 5: Commit**

  ```bash
  git add src/components/resume/elements.tsx src/components/resume/index.tsx
  git commit -m "feat: migrate resume to next/link and next-export-optimize-images"
  ```

---

## Task 10: Update privacy-link, privacy-policy, server-error-message

**Files:**

- Modify: `src/components/privacy-link/index.tsx`
- Modify: `src/components/privacy-policy/index.tsx`
- Modify: `src/components/server-error-message/index.tsx`
- Tests: `src/components/privacy-link/index.test.tsx`, `src/components/privacy-policy/index.test.tsx`, `src/components/server-error-message/index.test.tsx`

All three files make the same change: `import { Link } from 'gatsby'` → `import Link from 'next/link'`, and every `<Link to="...">` → `<Link href="...">`.

- [ ] **Step 1: Run baseline tests**

  ```bash
  npx jest src/components/privacy-link src/components/privacy-policy src/components/server-error-message --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update privacy-link/index.tsx**

  ```tsx
  // Before line 1
  import { Link } from 'gatsby'

  // After
  import Link from 'next/link'
  ```

  ```tsx
  // Before
  <Link to="/privacy-policy">Privacy policy</Link>

  // After
  <Link href="/privacy-policy">Privacy policy</Link>
  ```

- [ ] **Step 3: Update privacy-policy/index.tsx**

  ```tsx
  // Before line 1
  import { Link } from 'gatsby'

  // After
  import Link from 'next/link'
  ```

  Change all three `<Link to="...">` usages to `<Link href="...">`:
  - `<Link to="https://dbowland.com/">` → `<Link href="https://dbowland.com/">`
  - `<Link to="http://www.allaboutcookies.org">` → `<Link href="http://www.allaboutcookies.org">`
  - `<Link to="mailto:privacy@dbowland.com">` → `<Link href="mailto:privacy@dbowland.com">`

- [ ] **Step 4: Update server-error-message/index.tsx**

  ```tsx
  // Before line 2 (after privacy-link import)
  import { Link } from 'gatsby'

  // After
  import Link from 'next/link'
  ```

  ```tsx
  // Before
  <Link to="/">Go home</Link>

  // After
  <Link href="/">Go home</Link>
  ```

- [ ] **Step 5: Run the tests**

  ```bash
  npx jest src/components/privacy-link src/components/privacy-policy src/components/server-error-message --colors
  ```

  Expected: PASS.

- [ ] **Step 6: Commit**

  ```bash
  git add src/components/privacy-link/index.tsx src/components/privacy-policy/index.tsx src/components/server-error-message/index.tsx
  git commit -m "feat: migrate privacy-link, privacy-policy, server-error-message to next/link"
  ```

---

## Task 11: Update src/components/projects-table/index.tsx

**Files:**

- Modify: `src/components/projects-table/index.tsx`
- Test: `src/components/projects-table/index.test.tsx`

This file uses both gatsby `Link` (~20 usages, all `<Link to="...">`) and `StaticImage` (3 instances).

- [ ] **Step 1: Run the baseline test**

  ```bash
  npx jest src/components/projects-table/index.test.tsx --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update imports in projects-table/index.tsx**

  ```tsx
  // Before lines 1-2
  import { Link } from 'gatsby'
  import { StaticImage } from 'gatsby-plugin-image'

  // After
  import Link from 'next/link'
  import Image from 'next-export-optimize-images/image'
  import emailsDiagram from '@assets/images/emails-diagram.png'
  import jokesDiagram from '@assets/images/jokes-diagram.png'
  import chooseeDiagram from '@assets/images/choosee-diagram.png'
  ```

- [ ] **Step 3: Replace all `to=` with `href=` on Link**

  Every `<Link to="...">` in the file becomes `<Link href="...">`. There are approximately 20 usages — all of them follow the same pattern. Use find-and-replace: `to={` inside `<Link` → `href={`, and `to="` inside `<Link` → `href="`.

  The dynamic link usages follow this pattern:

  ```tsx
  // Before
  <Link to="https://reactjs.org/">React</Link>

  // After
  <Link href="https://reactjs.org/">React</Link>
  ```

  The dynamic `hostname` usages:

  ```tsx
  // Before
  <Link to={`https://jokes.${hostname}`}>{`https://jokes.${hostname}`}</Link>

  // After
  <Link href={`https://jokes.${hostname}`}>{`https://jokes.${hostname}`}</Link>
  ```

- [ ] **Step 4: Replace 3 StaticImage usages**

  **Emails diagram** (around line 158):

  ```tsx
  // Before
  <StaticImage
    alt="Diagram of emails project"
    imgStyle={{ objectFit: 'contain' }}
    src="../../assets/images/emails-diagram.png"
    style={ProjectImageStyles}
  />

  // After
  <Image alt="Diagram of emails project" src={emailsDiagram} style={{ ...ProjectImageStyles, objectFit: 'contain' }} />
  ```

  **Jokes diagram** (around line 226):

  ```tsx
  // Before
  <StaticImage
    alt="Diagram of jokes project"
    imgStyle={{ objectFit: 'contain' }}
    src="../../assets/images/jokes-diagram.png"
    style={ProjectImageStyles}
  />

  // After
  <Image alt="Diagram of jokes project" src={jokesDiagram} style={{ ...ProjectImageStyles, objectFit: 'contain' }} />
  ```

  **Choosee diagram** (around line 280):

  ```tsx
  // Before
  <StaticImage
    alt="Diagram of choosee project"
    imgStyle={{ objectFit: 'contain' }}
    src="../../assets/images/choosee-diagram.png"
    style={ProjectImageStyles}
  />

  // After
  <Image alt="Diagram of choosee project" src={chooseeDiagram} style={{ ...ProjectImageStyles, objectFit: 'contain' }} />
  ```

- [ ] **Step 5: Run the test**

  ```bash
  npx jest src/components/projects-table/index.test.tsx --colors
  ```

  Expected: PASS.

- [ ] **Step 6: Commit**

  ```bash
  git add src/components/projects-table/index.tsx
  git commit -m "feat: migrate projects-table to next/link and next-export-optimize-images"
  ```

---

## Task 12: Update src/components/genographic-infographic/index.tsx

**Files:**

- Modify: `src/components/genographic-infographic/index.tsx`
- Test: `src/components/genographic-infographic/index.test.tsx`

- [ ] **Step 1: Run the baseline test**

  ```bash
  npx jest src/components/genographic-infographic/index.test.tsx --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update genographic-infographic/index.tsx**

  ```tsx
  // Before lines 1-2
  import { Link } from 'gatsby'
  import { StaticImage } from 'gatsby-plugin-image'

  // After
  import Link from 'next/link'
  import Image from 'next-export-optimize-images/image'
  import genographicInfographic from '@assets/images/genographic-infographic.png'
  ```

  Replace the `<Link>` + `<StaticImage>` block:

  ```tsx
  // Before
  <Link to={genographicPdf}>
    <StaticImage
      alt="41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal"
      src="../../assets/images/genographic-infographic.png"
    />
  </Link>

  // After
  <Link href={genographicPdf}>
    <Image
      alt="41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal"
      src={genographicInfographic}
    />
  </Link>
  ```

- [ ] **Step 3: Run the test**

  ```bash
  npx jest src/components/genographic-infographic/index.test.tsx --colors
  ```

  Expected: PASS.

- [ ] **Step 4: Commit**

  ```bash
  git add src/components/genographic-infographic/index.tsx
  git commit -m "feat: migrate genographic-infographic to next/link and next-export-optimize-images"
  ```

---

## Task 13: Update pages — simple Head exports (9 pages)

**Files:**

- Modify: `src/pages/index.tsx`, `src/pages/projects.tsx`, `src/pages/marriage.tsx`, `src/pages/genographic.tsx`, `src/pages/privacy-policy.tsx`, `src/pages/404.tsx`, `src/pages/400.tsx`, `src/pages/403.tsx`, `src/pages/500.tsx`
- Tests: all 9 corresponding `.test.tsx` files

These 9 pages all have a simple `export const Head = () => <title>...</title>` at the bottom. The pattern is the same for all of them.

**Pattern for each page:**

1. Add `import Head from 'next/head'` at the top
2. Inside the page component's JSX, add `<Head><title>...</title></Head>` as the first child
3. Delete the `export const Head = () => ...` export at the bottom

**Example — index.tsx:**

```tsx
// Before
import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'
import React from 'react'
import Paper from '@mui/material/Paper'

const HomePage = (): JSX.Element => {
  return (
    <>
      <main>...</main>
    </>
  )
}

export const Head = () => <title>David Bowland | Software Developer</title>
export default HomePage

// After
import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'
import Paper from '@mui/material/Paper'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head><title>David Bowland | Software Developer</title></Head>
      <main>...</main>
    </>
  )
}

export default HomePage
```

- [ ] **Step 1: Run baseline tests for all 9 pages**

  ```bash
  npx jest src/pages/index src/pages/projects src/pages/marriage src/pages/genographic src/pages/privacy-policy "src/pages/404" "src/pages/400" "src/pages/403" "src/pages/500" --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update src/pages/index.tsx**

  Add `import Head from 'next/head'`. Move the title into the component JSX as `<Head><title>David Bowland | Software Developer</title></Head>`. Delete `export const Head = () => <title>David Bowland | Software Developer</title>`.

- [ ] **Step 3: Update src/pages/projects.tsx**

  Same pattern. Title: `Projects | dbowland.com`

- [ ] **Step 4: Update src/pages/marriage.tsx**

  Same pattern. Title: `Marriage Statistics | David & Tandi Bowland`

- [ ] **Step 5: Update src/pages/genographic.tsx**

  Same pattern. Title: `Genographic Information | dbowland.com`

- [ ] **Step 6: Update src/pages/privacy-policy.tsx**

  Same pattern. Title: `Privacy Policy -- dbowland.com`

- [ ] **Step 7: Update src/pages/404.tsx**

  Same pattern. Title: `404: Not Found -- dbowland.com`

- [ ] **Step 8: Update src/pages/400.tsx**

  Same pattern. Title: `400: Bad Request -- dbowland.com`

- [ ] **Step 9: Update src/pages/403.tsx**

  Same pattern. Title: `403: Forbidden -- dbowland.com`

- [ ] **Step 10: Update src/pages/500.tsx**

  Same pattern. Title: `500: Internal Server Error -- dbowland.com`

- [ ] **Step 11: Commit**

  ```bash
  git add src/pages/index.tsx src/pages/projects.tsx src/pages/marriage.tsx src/pages/genographic.tsx src/pages/privacy-policy.tsx src/pages/404.tsx src/pages/400.tsx src/pages/403.tsx src/pages/500.tsx
  git commit -m "feat: migrate 9 pages to next/head (simple title)"
  ```

---

## Task 14: Update pages — fragment Head exports (smooth-scroll, form-submit)

**Files:**

- Modify: `src/pages/smooth-scroll.tsx`
- Modify: `src/pages/form-submit.tsx`
- Tests: `src/pages/smooth-scroll.test.tsx`, `src/pages/form-submit.test.tsx`

These two pages have `export const Head = () => (<><title>...</title><script ...></script></>)`.

**Pattern:** Replace the fragment `<>...</>` with `<Head>...</Head>` from `next/head` inside the component JSX. The `<title>` and `<script>` become direct children of `<Head>`.

Both pages also contain `import '@fontsource/fira-code'` — **this import stays in place**. Do not remove it.

- [ ] **Step 1: Run baseline tests**

  ```bash
  npx jest src/pages/smooth-scroll src/pages/form-submit --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update src/pages/smooth-scroll.tsx**

  Add `import Head from 'next/head'`. Move the Head content into the component JSX:

  ```tsx
  // Before
  const SmoothScroll = (): JSX.Element => {
    return (
      <main>
        <SmoothScrollExample />
      </main>
    )
  }

  export const Head = () => (
    <>
      <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
      <script defer src="/smooth-scroll.js"></script>
    </>
  )

  // After
  const SmoothScroll = (): JSX.Element => {
    return (
      <>
        <Head>
          <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
          <script defer src="/smooth-scroll.js"></script>
        </Head>
        <main>
          <SmoothScrollExample />
        </main>
      </>
    )
  }
  ```

- [ ] **Step 3: Update src/pages/form-submit.tsx**

  Same pattern. The `import '@fontsource/fira-code'` line stays:

  ```tsx
  // After
  const FormSubmit = (): JSX.Element => {
    return (
      <>
        <Head>
          <title>form-submit example page | github.com/davidbowland/form-submit</title>
          <script defer src="/form-submit.js"></script>
        </Head>
        <main style={{ fontFamily: 'Fira Code' }}>
          <FormSubmitExample />
        </main>
      </>
    )
  }
  ```

- [ ] **Step 4: Commit**

  ```bash
  git add src/pages/smooth-scroll.tsx src/pages/form-submit.tsx
  git commit -m "feat: migrate smooth-scroll and form-submit pages to next/head"
  ```

---

## Task 15: Update pages — fragment Head with RedirectHead (proposal, wedding)

**Files:**

- Modify: `src/pages/proposal.tsx`
- Modify: `src/pages/wedding.tsx`
- Tests: `src/pages/proposal.test.tsx`, `src/pages/wedding.test.tsx`

These pages have `export const Head = () => (<><title>Redirecting...</title><RedirectHead .../></>)`. The `RedirectHead` component renders a `<meta http-equiv="refresh">` tag and continues to work identically inside `<Head>` from `next/head`.

- [ ] **Step 1: Run baseline tests**

  ```bash
  npx jest src/pages/proposal src/pages/wedding --colors
  ```

  Expected: PASS.

- [ ] **Step 2: Update src/pages/proposal.tsx**

  Add `import Head from 'next/head'`. Move Head content into component JSX:

  ```tsx
  // After
  const Proposal = (): JSX.Element => {
    return (
      <>
        <Head>
          <title>Redirecting...</title>
          <RedirectHead id={VIDEO_ID} type={DriveFileRedirect} />
        </Head>
        <Redirect id={VIDEO_ID} type={DriveFileRedirect} />
      </>
    )
  }
  ```

  Delete the `export const Head = () => (...)` export.

- [ ] **Step 3: Update src/pages/wedding.tsx**

  Same pattern with `VIDEO_ID = '1PMbL4GwiNlkN-aqjuun3ytOMTelFL-3w'`.

- [ ] **Step 4: Commit**

  ```bash
  git add src/pages/proposal.tsx src/pages/wedding.tsx
  git commit -m "feat: migrate proposal and wedding pages to next/head"
  ```

- [ ] **Step 5: Run tests**

  ```bash
  npx jest src/pages/proposal src/pages/wedding --colors
  ```

  Expected: PASS (tests may fail until Task 16 updates them — that is expected at this stage).

---

## Task 16: Update page test files

**Files:**

- Modify: all 13 page test files in `src/pages/`

**Current pattern** (pages with simple title):

```tsx
import HomePage, { Head } from './index'

it('renders Head', () => {
  render(<Head />)
  expect(document.title).toEqual('David Bowland | Software Developer')
})
```

**New pattern** (render the page component, which includes `<Head>` via next/head):

```tsx
import HomePage from './index'

it('renders with correct title', () => {
  render(<HomePage />)
  expect(document.title).toEqual('David Bowland | Software Developer')
})
```

The page component renders `<Head><title>...</title></Head>`, which next/jest handles correctly — `document.title` is set in jsdom.

- [ ] **Step 1: Update src/pages/index.test.tsx**
  - Remove `{ Head }` from the import: `import HomePage from './index'`
  - Change the `'renders Head'` test to render `<HomePage />` instead of `<Head />`:
    ```tsx
    it('renders with correct title', () => {
      render(<HomePage />)
      expect(document.title).toEqual('David Bowland | Software Developer')
    })
    ```

- [ ] **Step 2: Update src/pages/projects.test.tsx**

  Same pattern. Expected title: `Projects | dbowland.com`

- [ ] **Step 3: Update src/pages/marriage.test.tsx**

  Same pattern. Expected title: `Marriage Statistics | David & Tandi Bowland`

- [ ] **Step 4: Update src/pages/genographic.test.tsx**

  Same pattern. Expected title: `Genographic Information | dbowland.com`

- [ ] **Step 5: Update src/pages/privacy-policy.test.tsx**

  Same pattern. Expected title: `Privacy Policy -- dbowland.com`

- [ ] **Step 6: Update src/pages/404.test.tsx**

  Same pattern. Expected title: `404: Not Found -- dbowland.com`

- [ ] **Step 7: Update src/pages/400.test.tsx**

  Same pattern. Expected title: `400: Bad Request -- dbowland.com`

- [ ] **Step 8: Update src/pages/403.test.tsx**

  Same pattern. Expected title: `403: Forbidden -- dbowland.com`

- [ ] **Step 9: Update src/pages/500.test.tsx**

  Same pattern. Expected title: `500: Internal Server Error -- dbowland.com`

- [ ] **Step 10: Update src/pages/smooth-scroll.test.tsx**

  Remove `{ Head }` from import. Change the Head test to render `<SmoothScroll />` and check `document.title`:

  ```tsx
  it('renders with correct title', () => {
    render(<SmoothScroll />)
    expect(document.title).toEqual('smooth-scroll example page | github.com/davidbowland/smooth-scroll')
  })
  ```

- [ ] **Step 11: Update src/pages/form-submit.test.tsx**

  Same. Expected title: `form-submit example page | github.com/davidbowland/form-submit`

- [ ] **Step 12: Update src/pages/proposal.test.tsx**

  Remove `{ Head }` from import. Change Head test to render `<Proposal />` and check `document.title`:

  ```tsx
  it('renders with correct title', () => {
    render(<Proposal />)
    expect(document.title).toEqual('Redirecting...')
  })
  ```

- [ ] **Step 13: Update src/pages/wedding.test.tsx**

  Same pattern. Expected title: `Redirecting...`

- [ ] **Step 14: Run all page tests**

  ```bash
  npx jest src/pages --colors
  ```

  Expected: PASS for all 13 page test files.

- [ ] **Step 15: Commit**

  ```bash
  git add src/pages/*.test.tsx
  git commit -m "test: update page tests for next/head (remove Head export pattern)"
  ```

---

## Task 17: Run full test suite

- [ ] **Step 1: Run all tests**

  ```bash
  npm run test
  ```

  Expected: All tests PASS with coverage thresholds met (branches ≥90%, functions ≥90%, lines ≥80%).

  If tests fail, diagnose per the error. Common issues:
  - `Module not found: gatsby` — a file still imports from gatsby; find it with `grep -r "from 'gatsby'" src/`
  - `Module not found: gatsby-plugin-image` — a file still imports StaticImage; find with `grep -r "gatsby-plugin-image" src/`
  - Coverage threshold failure — check which file dropped below threshold and add/fix a test

- [ ] **Step 2: Commit if any fixes were needed**

  ```bash
  git add -A
  git commit -m "fix: resolve any remaining test issues"
  ```

---

## Task 18: Delete Gatsby files

- [ ] **Step 1: Delete Gatsby-specific files**

  ```bash
  git rm gatsby-config.js gatsby-node.js __mocks__/gatsby.js
  ```

- [ ] **Step 2: Run tests to confirm nothing depended on those files**

  ```bash
  npm run test
  ```

  Expected: PASS.

- [ ] **Step 3: Commit**

  ```bash
  git add -A
  git commit -m "chore: delete gatsby-config.js, gatsby-node.js, __mocks__/gatsby.js"
  ```

---

## Task 19: Update scripts and CI pipeline

**Files:**

- Modify: `scripts/copyToS3.sh` line 13
- Modify: `.github/workflows/pipeline.yaml` (3 step names)

- [ ] **Step 1: Update scripts/copyToS3.sh**

  Change line 13:

  ```bash
  # Before
  cd public

  # After
  cd out
  ```

- [ ] **Step 2: Update .github/workflows/pipeline.yaml**

  Three step names say "Build Gatsby site" — change each to "Build Next.js site":
  - Line 58: `name: Build Gatsby site` → `name: Build Next.js site` (feature branch job)
  - Line 107: `name: Build Gatsby site` → `name: Build Next.js site` (deploy-testing job)
  - Line 156: `name: Build Gatsby site` → `name: Build Next.js site` (deploy-production job)

- [ ] **Step 3: Commit**

  ```bash
  git add scripts/copyToS3.sh .github/workflows/pipeline.yaml
  git commit -m "chore: update deploy script and CI for next.js (out/ dir, step names)"
  ```

---

## Task 20: Verify the build

- [ ] **Step 1: Run next build**

  ```bash
  npm run build
  ```

  Expected: builds successfully, outputs to `out/`, runs `next-sitemap` via `postbuild`.

  If build fails with crypto/stream errors, see the note in Task 3 Step 1 about re-adding webpack fallbacks and packages.

- [ ] **Step 2: Verify output directory contents**

  ```bash
  ls out/*.html
  ```

  Expected: `400.html`, `403.html`, `404.html`, `500.html`, `index.html`, `projects.html`, `genographic.html`, `marriage.html`, `privacy-policy.html`, `smooth-scroll.html`, `form-submit.html`, `proposal.html`, `wedding.html`

  ```bash
  ls out/sitemap.xml
  ```

  Expected: `sitemap.xml` present.

- [ ] **Step 3: Spot-check with dev server (optional)**

  ```bash
  npm start
  ```

  Open `http://localhost:3000` and verify:
  - Home page renders with headshot image
  - Projects page renders with diagrams
  - Dark mode toggle works (minor flash acceptable)
  - `/smooth-scroll` page loads
  - `/form-submit` page loads

- [ ] **Step 4: Final commit**

  If any build-time fixes were needed (e.g., webpack fallback, package additions), commit them:

  ```bash
  git add -A
  git commit -m "fix: resolve next build issues"
  ```

---

## Verification Checklist (from spec)

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
