import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { mocked } from 'jest-mock'
import React from 'react'

import PrivacyPage from './privacy-policy'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/privacy-policy')
jest.mock('@components/title-bar')

describe('Privacy page', () => {
  beforeAll(() => {
    mocked(PrivacyPolicy).mockReturnValue(<></>)
    mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render PrivacyPolicy', () => {
    render(<PrivacyPage />)
    expect(mocked(PrivacyPolicy)).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<PrivacyPage />)
    expect(mocked(TitleBar)).toHaveBeenCalledTimes(1)
  })
})
