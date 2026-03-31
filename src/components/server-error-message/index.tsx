import PrivacyLink from '@components/privacy-link'
import Link from 'next/link'
import React from 'react'

import { ErrorPageContent, ErrorPageLayout, ErrorPageTitle } from './elements'

export interface ServerErrorProps {
  children: React.ReactNode
  title: string
}

const ServerErrorMessage = ({ children, title }: ServerErrorProps): React.JSX.Element => {
  return (
    <ErrorPageLayout>
      <ErrorPageContent>
        <ErrorPageTitle>{title}</ErrorPageTitle>
        <div>{children}</div>
        <div>
          <Link href="/">Go home</Link>
          <PrivacyLink />
        </div>
      </ErrorPageContent>
    </ErrorPageLayout>
  )
}

export default ServerErrorMessage
