import { Helmet } from 'react-helmet'
import React from 'react'

import '@config/amplify'
import FormSubmitExample from '@components/form-submit'

import '@fontsource/rokkitt'

const FormSubmit = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>form-submit example page | github.com/davidbowland/form-submit</title>
        <script defer src="/form-submit.js"></script>
      </Helmet>
      <FormSubmitExample />
    </>
  )
}

export default FormSubmit
