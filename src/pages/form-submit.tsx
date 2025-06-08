import FormSubmitExample from '@components/form-submit'
import '@fontsource/fira-code'
import React from 'react'

import '@config/amplify'

const FormSubmit = (): JSX.Element => {
  return (
    <main style={{ fontFamily: 'Fira Code' }}>
      <FormSubmitExample />
    </main>
  )
}

export const Head = () => (
  <>
    <title>form-submit example page | github.com/davidbowland/form-submit</title>
    <script defer src="/form-submit.js"></script>
  </>
)

export default FormSubmit
