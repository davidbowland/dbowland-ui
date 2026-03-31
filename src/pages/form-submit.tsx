import FormSubmitExample from '@components/form-submit'
import '@fontsource/fira-code'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect } from 'react'

const FormSubmit = (): JSX.Element => {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/form-submit-styles.css'
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <>
      <Head>
        <title>form-submit example page | github.com/davidbowland/form-submit</title>
      </Head>
      <Script src="/form-submit.js" strategy="afterInteractive" />
      <main style={{ fontFamily: 'Fira Code' }} suppressHydrationWarning>
        <FormSubmitExample />
      </main>
    </>
  )
}

export default FormSubmit
