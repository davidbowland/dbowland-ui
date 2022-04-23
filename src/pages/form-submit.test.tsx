import '@testing-library/jest-dom'
import React from 'react'
import { mocked } from 'jest-mock'
import { render } from '@testing-library/react'

import FormSubmit from './form-submit'
import FormSubmitExample from '@components/form-submit'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/form-submit')

describe('form-submit example', () => {
  beforeAll(() => {
    mocked(FormSubmitExample).mockReturnValue(<></>)
  })

  test('expect FormSubmit renders FormSubmitExample', () => {
    render(<FormSubmit />)
    expect(mocked(FormSubmitExample)).toBeCalledTimes(1)
  })
})
