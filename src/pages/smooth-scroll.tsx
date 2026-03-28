import SmoothScrollExample from '@components/smooth-scroll'
import '@fontsource/fira-code'
import Head from 'next/head'
import React from 'react'

const SmoothScroll = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
        <script defer src="/smooth-scroll.js"></script>
      </Head>
      <main>
        <SmoothScrollExample />
      </main>
    </>
  )
}

export default SmoothScroll
