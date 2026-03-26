import FormSubmitExample from '@components/form-submit'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import FormSubmit from './form-submit'

jest.mock('@components/form-submit')

describe('form-submit example', () => {
  beforeAll(() => {
    jest.mocked(FormSubmitExample).mockReturnValue(<></>)
  })

  it('should render FormSubmitExample', () => {
    render(<FormSubmit />)
    expect(FormSubmitExample).toHaveBeenCalledTimes(1)
  })

  it('renders with correct title', () => {
    render(<FormSubmit />)
    expect(document.title).toEqual('form-submit example page | github.com/davidbowland/form-submit')
  })
})
