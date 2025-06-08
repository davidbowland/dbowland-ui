import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import PrivacyPage from './privacy-policy'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/privacy-policy')
jest.mock('@components/title-bar')

describe('Privacy page', () => {
  beforeAll(() => {
    jest.mocked(PrivacyPolicy).mockReturnValue(<></>)
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
})
