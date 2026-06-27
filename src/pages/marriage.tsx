import MarriageStats from '@components/marriage-stats'
import PrivacyLink from '@components/privacy-link'
import Head from 'next/head'
import React from 'react'

const MarriagePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Marriage Statistics | David & Tandi Bowland</title>
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
