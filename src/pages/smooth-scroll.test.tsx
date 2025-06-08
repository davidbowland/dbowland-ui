import SmoothScrollExample from '@components/smooth-scroll'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import SmoothScroll from './smooth-scroll'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/smooth-scroll')

describe('smooth-scroll example', () => {
  beforeAll(() => {
    jest.mocked(SmoothScrollExample).mockReturnValue(<></>)
  })

  it('should render SmoothScrollExample', () => {
    render(<SmoothScroll />)
    expect(SmoothScrollExample).toHaveBeenCalledTimes(1)
  })
})
