import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import Resume from '@components/resume'
import Themed from '@components/themed'

const HomePage = (): JSX.Element => {
  return (
    <Themed>
      <Helmet>
        <title>David Bowland | Software Developer</title>
      </Helmet>
      <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px' }}>
        <main>
          <section>
            <Resume />
          </section>
        </main>
      </Paper>
    </Themed>
  )
}

export default HomePage
