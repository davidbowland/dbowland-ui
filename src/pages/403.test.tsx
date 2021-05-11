import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Forbidden from './403'

describe('403 error page', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<Forbidden />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure title is on the page', () => {
    const { getByText } = render(<Forbidden />)
    expect(getByText('403: Forbidden')).toBeInTheDocument()
  })
})
