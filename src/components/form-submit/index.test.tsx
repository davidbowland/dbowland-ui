import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import FormSubmitExample from './index'

describe('form-submit example component', () => {
  test('expect FormSubmitExample to render nine forms', () => {
    render(<FormSubmitExample />)

    expect(screen.getByText(/Form 1 - Numbers/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 2 - Contact/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 3 - Time\/date/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 4 - Text areas/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 5 - Radio buttons and check boxes/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 6 - Web addresses/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 7 - Sensitive data/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 8 - Fanciness/i)).toBeInTheDocument()
    expect(screen.getByText(/Form 9 - All optional/i)).toBeInTheDocument()
  })
})
