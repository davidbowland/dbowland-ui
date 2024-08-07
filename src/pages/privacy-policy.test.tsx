import '@testing-library/jest-dom'
import { mocked } from 'jest-mock'
import React from 'react'
import { render } from '@testing-library/react'

import PrivacyPage from './privacy-policy'
import PrivacyPolicy from '@components/privacy-policy'
import TitleBar from '@components/title-bar'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/privacy-policy')
jest.mock('@components/title-bar')

describe('Privacy page', () => {
  beforeAll(() => {
    mocked(PrivacyPolicy).mockReturnValue(<></>)
    mocked(TitleBar).mockReturnValue(<></>)
  })

  test('Rendering PrivacyPage also renders PrivacyPolicy', () => {
    render(<PrivacyPage />)
    expect(mocked(PrivacyPolicy)).toHaveBeenCalledTimes(1)
  })

  test('Rendering PrivacyPage also renders TitleBar', () => {
    render(<PrivacyPage />)
    expect(mocked(TitleBar)).toHaveBeenCalledTimes(1)
  })
})
