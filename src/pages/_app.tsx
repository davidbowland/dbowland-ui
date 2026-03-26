import Themed from '@components/themed'
import '@fontsource/roboto'
import type { AppProps } from 'next/app'
import React from 'react'

import '@assets/css/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Themed>
      <Component {...pageProps} />
    </Themed>
  )
}
