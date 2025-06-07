import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import Resume from './index'

describe('Resume component', () => {
  const consoleWarn = console.warn
  const emailAddress = 'david@dbowland.com'
  const pdfFilename = 'test-file-stub'

  beforeAll(() => {
    console.warn = jest.fn()
  })

  afterAll(() => {
    console.warn = consoleWarn
  })

  it('should render contact information', () => {
    render(<Resume />)

    expect(screen.getByText(/David Bowland/i)).toBeInTheDocument()
    expect(screen.getByText(/417\D894\D0079/i)).toBeInTheDocument()
    expect(screen.getByText(emailAddress)).toBeInTheDocument()
  })

  it('should have links to email and PDF', () => {
    render(<Resume />)

    const anchors = screen.getAllByRole('link') as HTMLAnchorElement[]
    expect(anchors.find((link) => link.href.indexOf(emailAddress) >= 0)).toBeDefined()
    expect(anchors.find((link) => new URL(link.href).pathname.indexOf(pdfFilename) >= 0)).toBeDefined()
  })
})
