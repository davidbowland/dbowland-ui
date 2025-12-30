import MarriageStats from '@components/marriage-stats'
import PrivacyLink from '@components/privacy-link'
import React from 'react'

import Paper from '@mui/material/Paper'

const MarriagePage = (): JSX.Element => {
  return (
    <>
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

export const Head = () => <title>Marriage Statistics | David & Tandi Bowland</title>

export default MarriagePage
