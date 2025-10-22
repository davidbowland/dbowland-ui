import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import Redirect, { DriveFileRedirect, RedirectHead } from './index'

jest.mock('@aws-amplify/analytics')

describe('Redirect component', () => {
  const mockLocationReplace = jest.fn()
  const testId = '1PMbL4GwiNlkN-aqjuun3ytOMTelFL-3w'

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { replace: mockLocationReplace },
    })
  })

  beforeEach(() => {
    mockLocationReplace.mockClear()
  })

  it('should redirect to drive file URL', () => {
    render(<Redirect id={testId} type={DriveFileRedirect} />)

    expect(mockLocationReplace).toHaveBeenCalledWith(`https://drive.google.com/file/d/${testId}/view?usp=sharing`)
  })

  it('renders RedirectHead with correct meta tag', () => {
    render(<RedirectHead id={testId} type={DriveFileRedirect} />)

    const metaTag = document.querySelector('meta[http-equiv="refresh"]')
    expect(metaTag).toHaveAttribute('content', `0;URL='https://drive.google.com/file/d/${testId}/view?usp=sharing'`)
  })

  it('throws error for unsupported redirect type', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(<Redirect id={testId} type={'unsupported' as any} />)
    }).toThrow('Unsupported redirect type: unsupported')

    consoleSpy.mockRestore()
  })
})
