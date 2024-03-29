import { Helmet } from 'react-helmet'
import React from 'react'

import '@config/amplify'
import GenographicInfographic from '@components/genographic-infographic'
import PrivacyLink from '@components/privacy-link'
import TitleBar from '@components/title-bar'

const Genographic = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Genographic Information | dbowland.com </title>
      </Helmet>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section style={{ margin: 'auto', maxWidth: '900px', textAlign: 'center' }}>
          <GenographicInfographic />
          <PrivacyLink />
        </section>
      </main>
    </>
  )
}

export default Genographic
