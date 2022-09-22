import '@testing-library/jest-dom'
import React from 'react'
import { mocked } from 'jest-mock'
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

  test('Rendering Index also renders Resume', () => {
    render(<HomePage />)
    expect(mocked(Resume)).toBeCalledTimes(1)
  })

  test('Rendering Index also renders PrivacyLink', () => {
    render(<HomePage />)
    expect(mocked(PrivacyLink)).toBeCalledTimes(1)
  })

  test('Rendering Index also renders TitleBar', () => {
    render(<HomePage />)
    expect(mocked(TitleBar)).toBeCalledTimes(1)
  })
})
