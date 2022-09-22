import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'

const PrivacyPage = (): JSX.Element => {
  return (
    <Paper elevation={1}>
      <Helmet>
        <title>Privacy Policy -- dbowland.com</title>
      </Helmet>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section>
          <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px' }}>
            <PrivacyPolicy />
          </Paper>
        </section>
      </main>
    </Paper>
  )
}

export default PrivacyPage
