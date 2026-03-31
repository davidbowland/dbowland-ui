import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import ResumePdfContent from './index'

describe('ResumePdfContent component', () => {
  const consoleWarn = console.warn

  beforeAll(() => {
    console.warn = jest.fn()
  })

  afterAll(() => {
    console.warn = consoleWarn
  })

  it('should render contact information', () => {
    render(<ResumePdfContent />)

    expect(screen.getByText(/David Bowland/i)).toBeInTheDocument()
    expect(screen.getByText(/417\D894\D0079/i)).toBeInTheDocument()
    expect(screen.getByText('david@dbowland.com')).toBeInTheDocument()
  })

  it('should render all four jobs', () => {
    render(<ResumePdfContent />)

    expect(screen.getByText(/ProductPlan/i)).toBeInTheDocument()
    expect(screen.getByText(/TalentReef/i)).toBeInTheDocument()
    expect(screen.getByText(/Carfax/i)).toBeInTheDocument()
    expect(screen.getByText(/Boone County/i)).toBeInTheDocument()
  })

  it('should render skills and education', () => {
    render(<ResumePdfContent />)

    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText(/Columbia College/i)).toBeInTheDocument()
  })
})
