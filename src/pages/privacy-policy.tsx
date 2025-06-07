import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'
import React from 'react'
import { Helmet } from 'react-helmet'

import Paper from '@mui/material/Paper'

import '@config/amplify'

const PrivacyPage = (): JSX.Element => {
  return (
    <>
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
    </>
  )
}

export default PrivacyPage
