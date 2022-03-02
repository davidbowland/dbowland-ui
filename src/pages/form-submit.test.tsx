import { mocked } from 'jest-mock'
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import FormSubmit from './form-submit'
import FormSubmitExample from '@components/form-submit'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/form-submit')
jest.mock('@fontsource/rokkitt')

describe('form-submit example', () => {
  beforeAll(() => {
    mocked(FormSubmitExample).mockReturnValue(<></>)
  })

  test('expect FormSubmit renders FormSubmitExample', () => {
    render(<FormSubmit />)
    expect(mocked(FormSubmitExample)).toBeCalledTimes(1)
  })
})
