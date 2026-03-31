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
        <section className="bg-slate-50 dark:bg-slate-950 min-h-screen">
          <div className="mx-auto max-w-5xl px-4 sm:px-8 py-6">
            <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden">
              <Resume />
              <PrivacyLink />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
