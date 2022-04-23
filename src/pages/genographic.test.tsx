import '@testing-library/jest-dom'
import React from 'react'
import { mocked } from 'jest-mock'
import { render } from '@testing-library/react'

import Genographic from './genographic'
import GenographicInfographic from '@components/genographic-infographic'
import TitleBar from '@components/title-bar'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/genographic-infographic')
jest.mock('@components/title-bar')

describe('Genographic page', () => {
  beforeAll(() => {
    mocked(GenographicInfographic).mockReturnValue(<></>)
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
