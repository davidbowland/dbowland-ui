import PrivacyPolicy from '@components/privacy-policy'
import SeoHead from '@components/seo-head'
import TitleBar from '@components/title-bar'
import React from 'react'

const PrivacyPage = (): JSX.Element => {
  return (
    <>
      <SeoHead
        description="Privacy policy for dbowland.com."
        path="/privacy-policy/"
        title="Privacy Policy -- dbowland.com"
      />
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
