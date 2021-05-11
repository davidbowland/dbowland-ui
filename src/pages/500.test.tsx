import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import InternalServerError from './500'

describe('500 error page', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<InternalServerError />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure title is on the page', () => {
    const { getByText } = render(<InternalServerError />)
    expect(getByText('500: Internal Server Error')).toBeInTheDocument()
  })
})
