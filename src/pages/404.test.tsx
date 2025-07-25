import ServerErrorMessage from '@components/server-error-message'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import NotFound, { Head } from './404'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/server-error-message')

describe('404 error page', () => {
  beforeAll(() => {
    jest.mocked(ServerErrorMessage).mockReturnValue(<></>)
  })

  it('should render ServerErrorMessage', () => {
    const expectedTitle = '404: Not Found'
    render(<NotFound />)
    expect(ServerErrorMessage).toHaveBeenCalledWith(
      expect.objectContaining({ title: expectedTitle }),
      expect.anything(),
    )
    expect(ServerErrorMessage).toHaveBeenCalledTimes(1)
  })

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('404: Not Found -- dbowland.com')
  })
})
