import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'

import Paper from '@mui/material/Paper'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>David Bowland | Software Developer</title>
      </Head>
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
