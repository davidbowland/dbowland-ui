import PrivacyLink from '@components/privacy-link'
import Resume from '@components/resume'
import TitleBar from '@components/title-bar'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import HomePage, { Head } from './index'

jest.mock('@components/privacy-link')
jest.mock('@components/resume')
jest.mock('@components/title-bar')

describe('Home page (index)', () => {
  beforeAll(() => {
    jest.mocked(PrivacyLink).mockReturnValue(<></>)
    jest.mocked(Resume).mockReturnValue(<></>)
    jest.mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render Resume', () => {
    render(<HomePage />)
    expect(Resume).toHaveBeenCalledTimes(1)
  })

  it('should render PrivacyLink', () => {
    render(<HomePage />)
    expect(PrivacyLink).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<HomePage />)
    expect(TitleBar).toHaveBeenCalledTimes(1)
  })

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('David Bowland | Software Developer')
  })
})
