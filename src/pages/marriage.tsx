import MarriageStats from '@components/marriage-stats'
import PrivacyLink from '@components/privacy-link'
import Head from 'next/head'
import React from 'react'

import Paper from '@mui/material/Paper'

const MarriagePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Marriage Statistics | David & Tandi Bowland</title>
      </Head>
      <main>
        <section>
          <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px' }}>
            <MarriageStats />
            <PrivacyLink />
          </Paper>
        </section>
      </main>
    </>
  )
}

export default MarriagePage
