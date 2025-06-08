import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'
import React from 'react'

import Paper from '@mui/material/Paper'

import '@config/amplify'

const PrivacyPage = (): JSX.Element => {
  return (
    <>
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

export const Head = () => <title>Privacy Policy -- dbowland.com</title>

export default PrivacyPage
