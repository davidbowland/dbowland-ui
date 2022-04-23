import '@testing-library/jest-dom'
import React from 'react'
import { mocked } from 'jest-mock'
import { render } from '@testing-library/react'

import InternalServerError from './500'
import ServerErrorMessage from '@components/server-error-message'
import Themed from '@components/themed'
import TitleBar from '@components/title-bar'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/server-error-message')
jest.mock('@components/themed')
jest.mock('@components/title-bar')

describe('500 error page', () => {
  beforeAll(() => {
    mocked(ServerErrorMessage).mockReturnValue(<></>)
    mocked(Themed).mockImplementation(({ children }) => <>{children}</>)
    mocked(TitleBar).mockReturnValue(<></>)
  })

  test('expect rendering InternalServerError renders ServerErrorMessage', () => {
    const expectedTitle = '500: Internal Server Error'
    render(<InternalServerError />)
    expect(mocked(ServerErrorMessage)).toHaveBeenCalledWith(
      expect.objectContaining({ title: expectedTitle }),
      expect.anything()
    )
    expect(mocked(ServerErrorMessage)).toHaveBeenCalledTimes(1)
  })

  test('expect rendering InternalServerError renders TitleBar', () => {
    render(<InternalServerError />)
    expect(mocked(TitleBar)).toHaveBeenCalledTimes(1)
  })
})
