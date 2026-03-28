import FormSubmitExample from '@components/form-submit'
import '@fontsource/fira-code'
import Head from 'next/head'
import React from 'react'

const FormSubmit = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>form-submit example page | github.com/davidbowland/form-submit</title>
        <link href="/form-submit-styles.css" rel="stylesheet" />
        <script defer src="/form-submit.js"></script>
      </Head>
      <main style={{ fontFamily: 'Fira Code' }}>
        <FormSubmitExample />
      </main>
    </>
  )
}

export default FormSubmit
