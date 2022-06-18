import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import ServerErrorMessage from '@components/server-error-message'
import TitleBar from '@components/title-bar'

const BadRequest = (): JSX.Element => {
  return (
    <Paper elevation={3} sx={{ margin: '1em auto', maxWidth: '900px' }}>
      <TitleBar />
      <ServerErrorMessage title="400: Bad Request">
        Your request was malformed or otherwise could not be understood by the server. Please modify your request before
        retrying.
      </ServerErrorMessage>
    </Paper>
  )
}

export default BadRequest
