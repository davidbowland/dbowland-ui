import React from 'react'

import { PolicyEyebrow, PolicyLayout, PolicySection, PolicySectionTitle, PolicyTitle } from './elements'

const PrivacyPolicy = (): React.JSX.Element => {
  return (
    <PolicyLayout>
      <PolicyEyebrow>Legal</PolicyEyebrow>
      <PolicyTitle>Privacy Policy</PolicyTitle>
      <p className="mb-2 text-sm leading-relaxed">
        This policy explains what <strong className="font-semibold text-[var(--ink)]">dbowland.com</strong> does with
        your data. Short version: we don&apos;t track you, and we have nothing to sell.
      </p>

      <PolicySection>
        <PolicySectionTitle>What We Collect</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Nothing. There&apos;s no sign-in, no account, and no contact form. We run no analytics, and we keep no access
          log — so we have no record that you were here, not your IP address, not your browser, not the pages you
          opened.
        </p>
        <p className="text-sm leading-relaxed mt-3">
          We set no cookies and store nothing in your browser. The form on the <em>form-submit</em> page is a demo of a
          JavaScript library: fill it in and nothing is sent anywhere, and what you typed is gone when you close the
          tab.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>What We Don&apos;t Do</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          We don&apos;t sell your data. We don&apos;t share it with advertisers. We don&apos;t build profiles. There are
          no tracking scripts and no advertising anywhere on this site.
        </p>
      </PolicySection>

      <PolicySection>
        <PolicySectionTitle>Who Else Is Involved</PolicySectionTitle>
        <p className="text-sm leading-relaxed">
          Amazon Web Services hosts the site, so your browser connects to Amazon to load any page. What Amazon records
          about that connection is governed by its privacy policy rather than this one.
        </p>
        <p className="text-sm leading-relaxed mt-3">
          A few unlisted pages embed video that&apos;s hosted elsewhere. If you open one, your browser fetches the video
          from its host, which sees that request and may set its own cookies, the way any video site does. We send it
          nothing about you. Nothing else on dbowland.com loads content from anyone.
        </p>
        <p className="text-sm leading-relaxed mt-3">
          We share data beyond this only when the law requires it — for example, a valid court order.
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
        <p className="text-sm leading-relaxed">We keep no logs and no records of your visit, so nothing accumulates.</p>
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
          </a>
          .
        </p>
      </PolicySection>

      <div className="pt-4 border-t border-[var(--rule)] text-xs text-[var(--ink-whisper)]">
        Effective August 5, 2026
      </div>
    </PolicyLayout>
  )
}

export default PrivacyPolicy
