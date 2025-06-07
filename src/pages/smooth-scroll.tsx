import SmoothScrollExample from '@components/smooth-scroll'
import '@fontsource/fira-code'
import React from 'react'
import { Helmet } from 'react-helmet'

import '@config/amplify'

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
