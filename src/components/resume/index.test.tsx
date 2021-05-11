import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Resume from './index'

describe('Resume component', () => {
  test('Ensure snapshot match', () => {
    const { container } = render(<Resume />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
