import Link from 'next/link'
import React from 'react'

const PrivacyLink = (): React.JSX.Element => {
  return (
    <div className="p-2 text-center text-xs">
      <Link href="/privacy-policy">Privacy policy</Link>
    </div>
  )
}

export default PrivacyLink
