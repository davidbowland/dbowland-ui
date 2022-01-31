import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import FormSubmit from './form-submit'
import FormSubmitExample from '@components/form-submit'

jest.mock('@components/form-submit', () => ({
  __esModule: true,
  default: jest.fn(),
}))
jest.mock('@fontsource/rokkitt')

describe('form-submit example', () => {
  beforeAll(() => {
    ;(FormSubmitExample as jest.Mock).mockReturnValue(<></>)
  })

  test('expect FormSubmit renders FormSubmitExample', () => {
    render(<FormSubmit />)
    expect(FormSubmitExample).toBeCalledTimes(1)
  })
})
