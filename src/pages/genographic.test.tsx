import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Genographic from './genographic'

jest.mock('@fontsource/rokkitt')

describe('Genographic page', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<Genographic />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
