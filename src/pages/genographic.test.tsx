import GenographicInfographic from '@components/genographic-infographic'
import PrivacyLink from '@components/privacy-link'
import TitleBar from '@components/title-bar'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import Genographic, { Head } from './genographic'

jest.mock('@components/genographic-infographic')
jest.mock('@components/privacy-link')
jest.mock('@components/title-bar')

describe('Genographic page', () => {
  beforeAll(() => {
    jest.mocked(GenographicInfographic).mockReturnValue(<></>)
    jest.mocked(PrivacyLink).mockReturnValue(<></>)
    jest.mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render GenographicInfographic', () => {
    render(<Genographic />)
    expect(GenographicInfographic).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<Genographic />)
    expect(TitleBar).toHaveBeenCalledTimes(1)
  })

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('Genographic Information | dbowland.com')
  })
})
