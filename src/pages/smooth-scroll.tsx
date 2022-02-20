import React from 'react'
import { Helmet } from 'react-helmet'

import '@config/amplify'
import SmoothScrollExample from '@components/smooth-scroll'
import '@fontsource/rokkitt'

const SmoothScroll = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
        <script src="/smooth-scroll.js" defer></script>
      </Helmet>
      <SmoothScrollExample />
    </>
  )
}

export default SmoothScroll
