import { Link } from '@heroui/react'
import React from 'react'

import { PrivacyLinkWrapper } from './elements'

const PrivacyLink = (): React.JSX.Element => {
  return (
    <PrivacyLinkWrapper>
      <Link href="/privacy-policy">Privacy policy</Link>
    </PrivacyLinkWrapper>
  )
}

export default PrivacyLink
