import React from 'react'

import { PolicyEyebrow, PolicyLayout, PolicySection, PolicySectionTitle, PolicyTitle } from './elements'

const PrivacyPolicy = (): React.JSX.Element => {
  return (
    <PolicyLayout>
      <PolicyEyebrow>Legal</PolicyEyebrow>
      <PolicyTitle>Privacy Policy</PolicyTitle>
      <p className="mb-2 text-sm leading-relaxed">
        <strong className="font-semibold text-[var(--ink)]">dbowland.com</strong> is one person&apos;s website — a
        resume, notes on old projects, a few odds and ends.
      </p>

      <PolicySection>
        <PolicySectionTitle>What We Know About You</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Nothing. No accounts, no analytics, no cookies, no log of your visit. There is nothing here to sell, share, or
          hand over.
        </p>
        <p className="text-sm leading-relaxed mt-3">
          One exception: the <em>form-submit</em> page demonstrates a form-checking tool, and pressing Submit there
          really does send what you typed — the first form puts it right in the address bar. Nothing on our end reads or
          keeps it, but don&apos;t type anything you would mind sending.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Who Else Sees You</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Two pages load content from Google: the marriage page plays videos from Google Drive, and the Devil&apos;s
          Dictionary loads its lettering from Google Fonts. Open either and Google sees your IP address and which page
          you were reading. Every other page loads only from dbowland.com.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Questions</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Email{' '}
          <a className="text-[var(--accent)] underline underline-offset-2" href="mailto:privacy@dbowland.com">
            privacy@dbowland.com
          </a>
          . That is also the address to write to if you want to see or erase the personal data we hold about you, though
          the answer is that we hold none.
        </p>
      </PolicySection>

      <div className="pt-4 border-t border-[var(--rule)] text-xs text-[var(--ink-whisper)]">
        Last updated August 10, 2026
      </div>
    </PolicyLayout>
  )
}

export default PrivacyPolicy
