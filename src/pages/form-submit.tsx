import React from 'react'
import { Helmet } from 'react-helmet'

import '@config/amplify'
import FormSubmitExample from '@components/form-submit'
import '@fontsource/rokkitt'

const FormSubmit = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>form-submit example page | github.com/davidbowland/form-submit</title>
        <script src="/form-submit.js" defer></script>
      </Helmet>
      <FormSubmitExample />
    </>
  )
}

export default FormSubmit
