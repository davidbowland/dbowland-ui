import PrivacyPolicy from '@components/privacy-policy'
import SeoHead from '@components/seo-head'
import TitleBar from '@components/title-bar'
import PrivacyPage from '@pages/privacy-policy'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

jest.mock('@components/privacy-policy')
jest.mock('@components/seo-head')
jest.mock('@components/title-bar')

describe('Privacy page', () => {
  beforeAll(() => {
    jest.mocked(PrivacyPolicy).mockReturnValue(<></>)
    jest.mocked(SeoHead).mockReturnValue(<></>)
    jest.mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render PrivacyPolicy', () => {
    render(<PrivacyPage />)
    expect(PrivacyPolicy).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<PrivacyPage />)
    expect(TitleBar).toHaveBeenCalledTimes(1)
  })

  it('renders SeoHead with correct title and path', () => {
    render(<PrivacyPage />)
    expect(SeoHead).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/privacy-policy/', title: 'Privacy Policy -- dbowland.com' }),
      undefined,
    )
  })
})
