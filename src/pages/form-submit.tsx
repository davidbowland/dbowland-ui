import { Helmet } from 'react-helmet'
import React from 'react'

import '@config/amplify'
import FormSubmitExample from '@components/form-submit'

import '@fontsource/fira-code'

const FormSubmit = (): JSX.Element => {
  return (
    <main style={{ fontFamily: 'Fira Code' }}>
      <Helmet>
        <title>form-submit example page | github.com/davidbowland/form-submit</title>
        <script defer src="/form-submit.js"></script>
      </Helmet>
      <FormSubmitExample />
    </main>
  )
}

export default FormSubmit
