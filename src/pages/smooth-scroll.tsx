import { Helmet } from 'react-helmet'
import React from 'react'

import '@config/amplify'
import SmoothScrollExample from '@components/smooth-scroll'

import '@fontsource/rokkitt'

const SmoothScroll = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
        <script defer src="/smooth-scroll.js"></script>
      </Helmet>
      <SmoothScrollExample />
    </>
  )
}

export default SmoothScroll
