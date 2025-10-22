import SmoothScrollExample from '@components/smooth-scroll'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import SmoothScroll, { Head } from './smooth-scroll'

jest.mock('@components/smooth-scroll')

describe('smooth-scroll example', () => {
  beforeAll(() => {
    jest.mocked(SmoothScrollExample).mockReturnValue(<></>)
  })

  it('should render SmoothScrollExample', () => {
    render(<SmoothScroll />)
    expect(SmoothScrollExample).toHaveBeenCalledTimes(1)
  })

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('smooth-scroll example page | github.com/davidbowland/smooth-scroll')
  })
})
