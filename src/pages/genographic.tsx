import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import GenographicInfographic from '@components/genographic-infographic'
import TitleBar from '@components/title-bar'

const Genographic = (): JSX.Element => {
  return (
    <Paper elevation={3}>
      <Helmet>
        <title>Genographic Information | dbowland.com </title>
      </Helmet>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section style={{ margin: 'auto', maxWidth: '900px', textAlign: 'center' }}>
          <GenographicInfographic />
        </section>
      </main>
    </Paper>
  )
}

export default Genographic
