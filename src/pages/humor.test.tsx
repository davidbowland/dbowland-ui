import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Humor from './humor'

jest.mock('@fontsource/rokkitt')

jest.mock('@assets/jokes.yaml', () => ({
  jokes: ['Ha!', '=)'],
}))

describe('Humor page', () => {
  beforeAll(() => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0
    global.Math = mockMath
  })

  test('Ensure snapshot match', () => {
    const { container } = render(<Humor />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
