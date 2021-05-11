import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import AuthorizationRequired from './401'

describe('401 error page', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<AuthorizationRequired />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure title is on the page', () => {
    const { getByText } = render(<AuthorizationRequired />)
    expect(getByText('401: Authorization Required')).toBeInTheDocument()
  })
})
