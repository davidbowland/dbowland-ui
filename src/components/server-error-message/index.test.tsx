import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock'
import React from 'react'

import PrivacyLink from '@components/privacy-link'
import ServerErrorMessage from './index'

jest.mock('@components/privacy-link')

describe('Server error message component', () => {
  const title = 'server-error-message'
  const children = 'Nothing to see here'

  beforeAll(() => {
    mocked(PrivacyLink).mockReturnValue(<></>)
  })

  it('should render title in output', () => {
    render(<ServerErrorMessage title={title}> </ServerErrorMessage>)

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should contain passed children in output', () => {
    render(<ServerErrorMessage title={title}>{children}</ServerErrorMessage>)

    expect(screen.getByText(children, { exact: false })).toBeInTheDocument()
  })

  it('should have link to home', () => {
    render(<ServerErrorMessage title={title}> </ServerErrorMessage>)

    const anchors = screen.getAllByRole('link') as HTMLAnchorElement[]
    expect(anchors.filter((link) => new URL(link.href).pathname === '/').length).toBe(1)
  })

  it('should have privacy link', () => {
    render(<ServerErrorMessage title={title}> </ServerErrorMessage>)

    expect(mocked(PrivacyLink)).toHaveBeenCalledTimes(1)
  })
})
