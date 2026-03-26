import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'

import Paper from '@mui/material/Paper'

const PrivacyPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Privacy Policy -- dbowland.com</title>
      </Head>
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
