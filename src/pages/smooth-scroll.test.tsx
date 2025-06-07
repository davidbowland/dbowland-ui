import SmoothScrollExample from '@components/smooth-scroll'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { mocked } from 'jest-mock'
import React from 'react'

import SmoothScroll from './smooth-scroll'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/smooth-scroll')

describe('smooth-scroll example', () => {
  beforeAll(() => {
    mocked(SmoothScrollExample).mockReturnValue(<></>)
  })

  it('should render SmoothScrollExample', () => {
    render(<SmoothScroll />)
    expect(mocked(SmoothScrollExample)).toHaveBeenCalledTimes(1)
  })
})
