import '@testing-library/jest-dom'
import { mocked } from 'jest-mock'
import React from 'react'
import { render } from '@testing-library/react'

import Genographic from './genographic'
import GenographicInfographic from '@components/genographic-infographic'
import PrivacyLink from '@components/privacy-link'
import TitleBar from '@components/title-bar'

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

  test('Rendering Genographic renders GenographicInfographic', () => {
    render(<Genographic />)
    expect(mocked(GenographicInfographic)).toHaveBeenCalledTimes(1)
  })

  test('Rendering Genographic renders TitleBar', () => {
    render(<Genographic />)
    expect(mocked(TitleBar)).toHaveBeenCalledTimes(1)
  })
})
