import Link from 'next/link'
import React from 'react'

import { PrivacyLinkWrapper } from './elements'

const PrivacyLink = (): React.JSX.Element => {
  return (
    <PrivacyLinkWrapper>
      <Link
        className="text-[var(--ink-whisper)] hover:text-[var(--accent)] no-underline border-b border-transparent hover:border-[var(--accent)] transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
        href="/privacy-policy"
      >
        Privacy policy
      </Link>
    </PrivacyLinkWrapper>
  )
}

export default PrivacyLink
