import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import HomePage from './index'
import Resume from '@components/resume'

jest.mock('@components/resume', () => ({
  __esModule: true,
  default: jest.fn(),
}))
jest.mock('@fontsource/rokkitt')

describe('Home page (index)', () => {
  beforeAll(() => {
    ;(Resume as jest.Mock).mockReturnValue(<></>)
  })

  test('Rendering Index also renders Resume', () => {
    render(<HomePage />)
    expect(Resume).toBeCalledTimes(1)
  })
})
