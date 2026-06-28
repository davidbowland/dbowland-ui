import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>David Bowland | Software Developer</title>
      </Head>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section className="min-h-[100dvh]">
          <div className="mx-auto max-w-5xl">
            <Resume />
            <PrivacyLink />
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
