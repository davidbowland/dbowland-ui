import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import ServerErrorMessage from './index'

describe('Server error message component', () => {
  const title = 'server-error-message'
  const children = <span>Nothing to see here</span>

  test('Ensure snapshot match', () => {
    const { container } = render(<ServerErrorMessage title={title}>{children}</ServerErrorMessage>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure title in output', () => {
    const { getByText } = render(<ServerErrorMessage title={title}>{children}</ServerErrorMessage>)
    expect(getByText(title)).toBeInTheDocument()
  })

  test('Ensure link to home', () => {
    const { container } = render(<ServerErrorMessage title={title}>{children}</ServerErrorMessage>)
    const anchorArray: HTMLAnchorElement[] = Array.from(container.querySelectorAll('a'))
    expect(anchorArray.filter((anchor) => new URL(anchor.href).pathname === '/').length).toBe(1)
  })
})
