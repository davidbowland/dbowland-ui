import GenographicInfographic from '@components/genographic-infographic'
import PrivacyLink from '@components/privacy-link'
import TitleBar from '@components/title-bar'
import React from 'react'

const Genographic = (): JSX.Element => {
  return (
    <>
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

export const Head = () => <title>Genographic Information | dbowland.com</title>

export default Genographic
