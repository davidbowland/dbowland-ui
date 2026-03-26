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
})
