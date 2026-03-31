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
      <main>
        <section>
          <div className="mx-auto max-w-[900px] shadow-md">
            <MarriageStats />
            <PrivacyLink />
          </div>
        </section>
      </main>
    </>
  )
}

export default MarriagePage
