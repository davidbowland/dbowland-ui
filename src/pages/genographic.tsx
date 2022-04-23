import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import GenographicInfographic from '@components/genographic-infographic'
import Themed from '@components/themed'

const Genographic = (): JSX.Element => {
  return (
    <Themed>
      <Helmet>
        <title>Genographic Information | dbowland.com </title>
      </Helmet>
      <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px', textAlign: 'center' }}>
        <main>
          <section>
            <GenographicInfographic />
          </section>
        </main>
      </Paper>
    </Themed>
  )
}

export default Genographic
