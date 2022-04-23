import { Helmet } from 'react-helmet'
import React from 'react'

import '@config/amplify'
import SmoothScrollExample from '@components/smooth-scroll'

import '@fontsource/fira-code'

const SmoothScroll = (): JSX.Element => {
  return (
    <main>
      <Helmet>
        <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
        <script defer src="/smooth-scroll.js"></script>
      </Helmet>
      <SmoothScrollExample />
    </main>
  )
}

export default SmoothScroll
