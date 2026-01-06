import ServerErrorMessage from '@components/server-error-message'
import React from 'react'

const NotFound = (): JSX.Element => {
  const isValidPage = typeof window !== 'undefined' && window
  if (isValidPage) return <></>

  return (
    <ServerErrorMessage title="404: Not Found">
      The resource you requested is unavailable. If you feel you have reached this page in error, please contact the
      webmaster.
    </ServerErrorMessage>
  )
}

export const Head = () => <title>404: Not Found -- dbowland.com</title>

export default NotFound
