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
        <section>
          <div className="mx-auto max-w-[900px] shadow-md">
            <PrivacyPolicy />
          </div>
        </section>
      </main>
    </>
  )
}

export default PrivacyPage
