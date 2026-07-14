import MarriageStats from '@components/marriage-stats'
import PrivacyLink from '@components/privacy-link'
import Head from 'next/head'
import React from 'react'

import { siteUrl } from '@config/urls'

const title = 'Marriage Statistics | David & Tandi Bowland'
const description =
  "A living record of David & Tandi Bowland's marriage — days together, anniversaries, and milestones."
const ogImageUrl = `${siteUrl}/marriage-og-image.png`

const MarriagePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href="/marriage-favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/marriage-favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/marriage-apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <meta content="website" property="og:type" />
        <meta content="dbowland.com" property="og:site_name" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`${siteUrl}/marriage`} property="og:url" />
        <meta content={ogImageUrl} property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={ogImageUrl} name="twitter:image" />
      </Head>
      <main className="min-h-screen" style={{ backgroundColor: 'var(--romance-page-bg)' }}>
        <section>
          <div className="mx-auto max-w-[960px]">
            <MarriageStats />
            <PrivacyLink />
          </div>
        </section>
      </main>
    </>
  )
}

export default MarriagePage
