import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import NotFound from './404'

describe('404 error page', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<NotFound />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure title is on the page', () => {
    const { getByText } = render(<NotFound />)
    expect(getByText('404: Not Found')).toBeInTheDocument()
  })
})
