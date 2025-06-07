import '@testing-library/jest-dom'
import { mocked } from 'jest-mock'
import React from 'react'
import { render } from '@testing-library/react'

import HomePage from './index'
import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/privacy-link')
jest.mock('@components/resume')
jest.mock('@components/title-bar')

describe('Home page (index)', () => {
  beforeAll(() => {
    mocked(PrivacyLink).mockReturnValue(<></>)
    mocked(Resume).mockReturnValue(<></>)
    mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render Resume', () => {
    render(<HomePage />)
    expect(mocked(Resume)).toHaveBeenCalledTimes(1)
  })

  it('should render PrivacyLink', () => {
    render(<HomePage />)
    expect(mocked(PrivacyLink)).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<HomePage />)
    expect(mocked(TitleBar)).toHaveBeenCalledTimes(1)
  })
})
