import SmoothScrollExample from '@components/smooth-scroll'
import SmoothScroll from '@pages/smooth-scroll'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

jest.mock('@components/smooth-scroll')

describe('smooth-scroll example', () => {
  beforeAll(() => {
    jest.mocked(SmoothScrollExample).mockReturnValue(<></>)
  })

  it('should render SmoothScrollExample', () => {
    render(<SmoothScroll />)
    expect(SmoothScrollExample).toHaveBeenCalledTimes(1)
  })

  it('renders with correct title', () => {
    render(<SmoothScroll />)
    expect(document.title).toEqual('smooth-scroll example page | github.com/davidbowland/smooth-scroll')
  })
})
