import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import Wedding, { Head } from './wedding'

describe('wedding redirect', () => {
  const mockLocationReplace = jest.fn()

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { replace: mockLocationReplace },
    })
  })

  it('should render SmoothScrollExample', () => {
    render(<Wedding />)

    expect(mockLocationReplace).toHaveBeenCalledWith(expect.stringContaining('https://drive.google.com/file/'))
  })

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('Redirecting...')
  })
})
