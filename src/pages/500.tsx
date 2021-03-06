import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import ServerErrorMessage from '@components/server-error-message'
import TitleBar from '@components/title-bar'

const InternalServerError = (): JSX.Element => {
  return (
    <Paper elevation={3} sx={{ margin: '1em auto', maxWidth: '900px' }}>
      <TitleBar />
      <ServerErrorMessage title="500: Internal Server Error">
        An internal server error has occurred trying to serve your request. If you continue to experience this error,
        please contact the webmaster.
      </ServerErrorMessage>
    </Paper>
  )
}

export default InternalServerError
