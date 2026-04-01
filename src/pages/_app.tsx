import '@fontsource/outfit'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import React, { useEffect } from 'react'

import '@assets/css/index.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => document.documentElement.classList.toggle('dark', e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const resetScroll = () => {
      document.documentElement.style.scrollBehavior = ''
    }
    Router.events.on('routeChangeStart', resetScroll)
    return () => Router.events.off('routeChangeStart', resetScroll)
  }, [])

  return <Component {...pageProps} />
}
