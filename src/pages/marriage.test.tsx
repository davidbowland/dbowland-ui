import MarriageStats from '@components/marriage-stats'
import PrivacyLink from '@components/privacy-link'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import MarriagePage, { Head } from './marriage'

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

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('Marriage Statistics | David & Tandi Bowland')
  })
})
