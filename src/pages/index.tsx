import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'
import React from 'react'

import Paper from '@mui/material/Paper'

const HomePage = (): JSX.Element => {
  return (
    <>
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

export const Head = () => <title>David Bowland | Software Developer</title>

export default HomePage
