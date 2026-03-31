import ResumePdfContent from '@components/resume-pdf'
import ResumePdfPage from '@pages/resume-pdf'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

jest.mock('@components/resume-pdf')

describe('ResumePdf page', () => {
  beforeAll(() => {
    jest.mocked(ResumePdfContent).mockReturnValue(<></>)
  })

  it('should render ResumePdfContent', () => {
    render(<ResumePdfPage />)
    expect(ResumePdfContent).toHaveBeenCalledTimes(1)
  })
})
