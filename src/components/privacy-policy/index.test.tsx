import React from 'react'

import PrivacyPolicy from './index'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('privacy-policy component', () => {
  it('should render privacy policy', async () => {
    render(<PrivacyPolicy />)

    expect(screen.queryAllByText(/privacy policy/i).length).toBeGreaterThan(0)
  })

  it('should disclose that the form-submit demo sends what you type', () => {
    render(<PrivacyPolicy />)

    expect(screen.getByText(/really does send what you typed/i)).toBeInTheDocument()
  })

  it('should disclose the third parties that see visitors', () => {
    render(<PrivacyPolicy />)

    expect(screen.getByText(/Google Drive/i)).toBeInTheDocument()
    expect(screen.getByText(/Google Fonts/i)).toBeInTheDocument()
  })
})
