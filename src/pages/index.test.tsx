import { mocked } from 'jest-mock'
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import HomePage from './index'
import Resume from '@components/resume'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/resume')
jest.mock('@fontsource/rokkitt')

describe('Home page (index)', () => {
  beforeAll(() => {
    mocked(Resume).mockReturnValue(<></>)
  })

  test('Rendering Index also renders Resume', () => {
    render(<HomePage />)
    expect(mocked(Resume)).toBeCalledTimes(1)
  })
})
