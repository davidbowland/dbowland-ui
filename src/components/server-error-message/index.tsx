import PrivacyLink from '@components/privacy-link'
import Link from 'next/link'
import React from 'react'

export interface ServerErrorProps {
  children: React.ReactNode
  title: string
}

const ServerErrorMessage = ({ children, title }: ServerErrorProps): React.JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 p-8 w-full max-w-[900px]">
        <h1 className="text-5xl font-light">{title}</h1>
        <div>{children}</div>
        <div>
          <Link href="/">Go home</Link>
          <PrivacyLink />
        </div>
      </div>
    </div>
  )
}

export default ServerErrorMessage
