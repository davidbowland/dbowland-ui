import SmoothScrollExample from '@components/smooth-scroll'
import '@fontsource/fira-code'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const SmoothScroll = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>smooth-scroll example page | github.com/davidbowland/smooth-scroll</title>
      </Head>
      <Script src="/smooth-scroll.js" strategy="afterInteractive" />
      <main>
        <SmoothScrollExample />
      </main>
    </>
  )
}

export default SmoothScroll
