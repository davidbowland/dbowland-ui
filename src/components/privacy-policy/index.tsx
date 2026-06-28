import React from 'react'

import { PolicyEyebrow, PolicyLayout, PolicySection, PolicySectionTitle, PolicyTitle } from './elements'

const PrivacyPolicy = (): React.JSX.Element => {
  return (
    <PolicyLayout>
      <PolicyEyebrow>Legal</PolicyEyebrow>
      <PolicyTitle>Privacy Policy</PolicyTitle>
      <p className="mb-2 text-sm leading-relaxed">
        This policy describes how <strong className="font-semibold text-[var(--ink)]">dbowland.com</strong> handles your
        data. The short version: we collect very little, we keep it briefly, and we never sell it.
      </p>

      <PolicySection>
        <PolicySectionTitle>What We Collect</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Our servers automatically log your IP address, browser type, and the pages you visit. We use these logs to
          detect abuse and keep the site running. That&apos;s everything we collect.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Why We Collect It</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          We process server log data under legitimate interests — operating a secure, functional website. We don&apos;t
          rely on your consent, and we don&apos;t use your data for advertising or profiling.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>What We Don&apos;t Do</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          We don&apos;t sell your data. We don&apos;t share it with advertisers. We don&apos;t build profiles. We
          intentionally don&apos;t collect contact information or anything personally identifying beyond what appears in
          a standard server log.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>When We Share Your Data</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          We share data only when legally required — for example, in response to a valid court order or law enforcement
          request.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Your Rights</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Depending on where you live, you may have legal rights over your personal data — such as the right to access,
          correct, or delete it. To exercise any such rights, contact us at{' '}
          <a className="text-[var(--accent)] underline underline-offset-2" href="mailto:privacy@dbowland.com">
            privacy@dbowland.com
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Data Retention</PolicySectionTitle>
        <p className="text-sm leading-relaxed">Server logs are kept for up to 90 days, then deleted.</p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Age</PolicySectionTitle>
        <p className="text-sm leading-relaxed">This site is intended for people 13 and older.</p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Changes</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          If we change how we handle data in a meaningful way, we&apos;ll update this page. The date at the bottom
          reflects the last revision.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Contact</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Questions about this policy? Email{' '}
          <a className="text-[var(--accent)] underline underline-offset-2" href="mailto:privacy@dbowland.com">
            privacy@dbowland.com
          </a>{' '}
          or write to:
        </p>
        <p className="text-sm leading-relaxed mt-3">
          dbowland.com Privacy
          <br />
          P.O. Box 81226, Seattle, WA 98108–1226
        </p>
      </PolicySection>

      <div className="pt-4 border-t border-[var(--rule)] text-xs text-[var(--ink-whisper)]">Last updated June 2026</div>
    </PolicyLayout>
  )
}

export default PrivacyPolicy
