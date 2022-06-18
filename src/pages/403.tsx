import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import ServerErrorMessage from '@components/server-error-message'
import TitleBar from '@components/title-bar'

const Forbidden = (): JSX.Element => {
  return (
    <Paper elevation={3} sx={{ margin: '1em auto', maxWidth: '900px' }}>
      <TitleBar />
      <ServerErrorMessage title="403: Forbidden">
        You are not allowed to access the resource you requested. If you feel you have reached this page in error,
        please contact the webmaster.
      </ServerErrorMessage>
    </Paper>
  )
}

export default Forbidden
