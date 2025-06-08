import SmoothScrollExample from '@components/smooth-scroll'
import '@fontsource/fira-code'
import React from 'react'

import '@config/amplify'

const SmoothScroll = (): JSX.Element => {
  return (
    <main>
      <SmoothScrollExample />
    </main>
  )
}

export const Head = () => (
  <>
    <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
    <script defer src="/smooth-scroll.js"></script>
  </>
)

export default SmoothScroll
