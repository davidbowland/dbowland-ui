import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import SmoothScroll from './smooth-scroll'
import SmoothScrollExample from '@components/smooth-scroll'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/smooth-scroll', () => ({
  __esModule: true,
  default: jest.fn(),
}))
jest.mock('@fontsource/rokkitt')

describe('smooth-scroll example', () => {
  beforeAll(() => {
    ;(SmoothScrollExample as jest.Mock).mockReturnValue(<></>)
  })

  test('expect SmoothScroll renders SmoothScrollExample', () => {
    render(<SmoothScroll />)
    expect(SmoothScrollExample).toBeCalledTimes(1)
  })
})
