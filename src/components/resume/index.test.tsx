import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import Resume from './index'

describe('Resume component', () => {
  const emailAddress = 'david@dbowland.com'
  const pdfFilename = 'test-file-stub'

  test('Ensure snapshot match', () => {
    const { container } = render(<Resume />)
    expect(container).toMatchSnapshot()
  })

  test('Rendering Resume renders contact information', () => {
    render(<Resume />)

    expect(screen.getByText(/David Bowland/i)).toBeInTheDocument()
    expect(screen.getByText(/417\D894\D0079/i)).toBeInTheDocument()
    expect(screen.getByText(emailAddress)).toBeInTheDocument()
  })

  test('Rendering Resume has links to email and PDF', () => {
    render(<Resume />)

    const anchors = screen.getAllByRole('link') as HTMLAnchorElement[]
    expect(anchors.find((link) => link.href.indexOf(emailAddress) >= 0)).toBeDefined()
    expect(anchors.find((link) => new URL(link.href).pathname.indexOf(pdfFilename) >= 0)).toBeDefined()
  })
})
