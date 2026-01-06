import ServerErrorMessage from '@components/server-error-message'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import NotFound, { Head } from './404'

jest.mock('@components/server-error-message')

describe('404 error page', () => {
  beforeAll(() => {
    jest.mocked(ServerErrorMessage).mockReturnValue(<></>)
  })

  it('should render empty component when window exists (client-side)', () => {
    render(<NotFound />)
    expect(ServerErrorMessage).not.toHaveBeenCalled()
  })

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('404: Not Found -- dbowland.com')
  })
})
