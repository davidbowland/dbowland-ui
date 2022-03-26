import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mocked } from 'jest-mock'

import Genographic from './genographic'
import GenographicInfographic from '@components/genographic-infographic'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/genographic-infographic')
jest.mock('@fontsource/rokkitt')

describe('Genographic page', () => {
  beforeAll(() => {
    mocked(GenographicInfographic).mockReturnValue(<></>)
  })

  test('Rendering Genographic renders GenographicInfographic', () => {
    render(<Genographic />)
    expect(mocked(GenographicInfographic)).toHaveBeenCalledTimes(1)
  })

  test('Genographic includes text "National Geographic Genographic project"', () => {
    render(<Genographic />)
    expect(screen.getByText(/National Geographic Genographic project/i)).toBeInTheDocument()
  })
})
