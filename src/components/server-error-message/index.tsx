import PrivacyLink from '@components/privacy-link'
import NextLink from 'next/link'
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
        <div className="text-[var(--ink-soft)]">{children}</div>
        <div>
          <NextLink
            className="text-[var(--accent)] no-underline border-b border-transparent hover:border-[var(--accent)] transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
            href="/"
          >
            Go home
          </NextLink>
          <PrivacyLink />
        </div>
      </ErrorPageContent>
    </ErrorPageLayout>
  )
}

export default ServerErrorMessage
