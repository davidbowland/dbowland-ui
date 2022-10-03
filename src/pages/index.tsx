import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>David Bowland | Software Developer</title>
      </Helmet>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section>
          <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px' }}>
            <Resume />
            <PrivacyLink />
          </Paper>
        </section>
      </main>
    </>
  )
}

export default HomePage
