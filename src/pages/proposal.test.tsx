import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import Proposal, { Head } from './proposal'

describe('proposal redirect', () => {
  const mockLocationReplace = jest.fn()

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { replace: mockLocationReplace },
    })
  })

  it('should render SmoothScrollExample', () => {
    render(<Proposal />)

    expect(mockLocationReplace).toHaveBeenCalledWith(expect.stringContaining('https://drive.google.com/file/'))
  })

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('Redirecting...')
  })
})
