import GenographicInfographic from '@components/genographic-infographic'
import PrivacyLink from '@components/privacy-link'
import TitleBar from '@components/title-bar'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { mocked } from 'jest-mock'
import React from 'react'

import Genographic from './genographic'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/genographic-infographic')
jest.mock('@components/privacy-link')
jest.mock('@components/title-bar')

describe('Genographic page', () => {
  beforeAll(() => {
    mocked(GenographicInfographic).mockReturnValue(<></>)
    mocked(PrivacyLink).mockReturnValue(<></>)
    mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render GenographicInfographic', () => {
    render(<Genographic />)
    expect(mocked(GenographicInfographic)).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<Genographic />)
    expect(mocked(TitleBar)).toHaveBeenCalledTimes(1)
  })
})
