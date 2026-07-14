import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import SeoHead from '@components/seo-head'
import TitleBar from '@components/title-bar'
import { contact, profile } from '@data/resume'
import React from 'react'

const HomePage = (): JSX.Element => {
  return (
    <>
      <SeoHead
        description={`${contact.name}, ${contact.title}. ${profile[0]}`}
        path="/"
        title={`${contact.name} | ${contact.title}`}
      />
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
