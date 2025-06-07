import FormSubmitExample from '@components/form-submit'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { mocked } from 'jest-mock'
import React from 'react'

import FormSubmit from './form-submit'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/form-submit')

describe('form-submit example', () => {
  beforeAll(() => {
    mocked(FormSubmitExample).mockReturnValue(<></>)
  })

  it('should render FormSubmitExample', () => {
    render(<FormSubmit />)
    expect(mocked(FormSubmitExample)).toHaveBeenCalledTimes(1)
  })
})
