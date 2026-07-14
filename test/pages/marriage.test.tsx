import MarriageStats from '@components/marriage-stats'
import PrivacyLink from '@components/privacy-link'
import MarriagePage from '@pages/marriage'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

jest.mock('@components/marriage-stats')
jest.mock('@components/privacy-link')

describe('Marriage page', () => {
  beforeAll(() => {
    jest.mocked(MarriageStats).mockReturnValue(<></>)
    jest.mocked(PrivacyLink).mockReturnValue(<></>)
  })

  it('should render MarriageStats component', () => {
    render(<MarriagePage />)
    expect(MarriageStats).toHaveBeenCalledTimes(1)
  })

  it('should render PrivacyLink', () => {
    render(<MarriagePage />)
    expect(PrivacyLink).toHaveBeenCalledTimes(1)
  })

  it('should not render TitleBar', () => {
    const { container } = render(<MarriagePage />)
    expect(container.querySelector('nav')).toBeNull()
  })

  it('renders with correct title', () => {
    render(<MarriagePage />)
    expect(document.title).toEqual('Marriage Statistics | David & Tandi Bowland')
  })

  it('renders marriage-specific favicon links', () => {
    render(<MarriagePage />)
    expect(document.querySelector('link[rel="icon"][sizes="32x32"]')).toHaveAttribute(
      'href',
      '/marriage-favicon-32x32.png',
    )
    expect(document.querySelector('link[rel="icon"][sizes="16x16"]')).toHaveAttribute(
      'href',
      '/marriage-favicon-16x16.png',
    )
    expect(document.querySelector('link[rel="apple-touch-icon"]')).toHaveAttribute(
      'href',
      '/marriage-apple-touch-icon.png',
    )
  })

  it('renders marriage-specific Open Graph image', () => {
    render(<MarriagePage />)
    expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://dbowland.com/marriage-og-image.png',
    )
    expect(document.querySelector('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      'https://dbowland.com/marriage-og-image.png',
    )
  })
})
