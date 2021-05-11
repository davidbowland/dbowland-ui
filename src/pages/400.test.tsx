import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import BadRequest from './400'

describe('400 error page', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<BadRequest />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure title is on the page', () => {
    const { getByText } = render(<BadRequest />)
    expect(getByText('400: Bad Request')).toBeInTheDocument()
  })
})
