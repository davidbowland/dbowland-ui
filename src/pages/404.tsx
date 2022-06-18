import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import ServerErrorMessage from '@components/server-error-message'
import TitleBar from '@components/title-bar'

const NotFound = (): JSX.Element => {
  const display404 = typeof window !== 'undefined' && window.location.pathname.match(/^\/s\/[^/]+$/) === null
  return (
    <Paper elevation={3} sx={{ margin: '1em auto', maxWidth: '900px' }}>
      {display404 && (
        <>
          <TitleBar />
          <ServerErrorMessage title="404: Not Found">
            The resource you requested is unavailable. If you feel you have reached this page in error, please contact
            the webmaster.
          </ServerErrorMessage>
        </>
      )}
    </Paper>
  )
}

export default NotFound
