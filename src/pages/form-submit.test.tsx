import FormSubmitExample from '@components/form-submit'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import FormSubmit from './form-submit'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/form-submit')

describe('form-submit example', () => {
  beforeAll(() => {
    jest.mocked(FormSubmitExample).mockReturnValue(<></>)
  })

  it('should render FormSubmitExample', () => {
    render(<FormSubmit />)
    expect(FormSubmitExample).toHaveBeenCalledTimes(1)
  })
})
