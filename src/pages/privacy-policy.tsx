import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'

const PrivacyPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Privacy Policy -- dbowland.com</title>
      </Head>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section className="py-8">
          <div className="mx-auto max-w-[900px] px-4">
            <div className="bg-[var(--surface)] border border-[var(--rule)] rounded-2xl">
              <PrivacyPolicy />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PrivacyPage
