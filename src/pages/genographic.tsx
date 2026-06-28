import GenographicInfographic from '@components/genographic-infographic'
import PrivacyLink from '@components/privacy-link'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'

const Genographic = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Genographic Information | dbowland.com</title>
      </Head>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <GenographicInfographic />
        <PrivacyLink />
      </main>
    </>
  )
}

export default Genographic
