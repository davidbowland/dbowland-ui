import { Helmet } from 'react-helmet'
import React from 'react'

import '@config/amplify'
import FormSubmitExample from '@components/form-submit'
import Themed from '@components/themed'

import '@fontsource/fira-code'

const FormSubmit = (): JSX.Element => {
  return (
    <Themed>
      <Helmet>
        <title>form-submit example page | github.com/davidbowland/form-submit</title>
        <script defer src="/form-submit.js"></script>
      </Helmet>
      <main style={{ fontFamily: 'Fira Code' }}>
        <FormSubmitExample />
      </main>
    </Themed>
  )
}

export default FormSubmit
