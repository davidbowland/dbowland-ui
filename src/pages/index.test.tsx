import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import HomePage from './index'

jest.mock('@fontsource/rokkitt')

describe('Home page (index)', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<HomePage />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
