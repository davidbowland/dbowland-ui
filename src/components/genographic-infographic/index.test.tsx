import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import GenographicInfographic from './index'

jest.mock('next-export-optimize-images/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('Genographic infographic component', () => {
  const pdfFilename = 'genographic-results.pdf'

  it('should include text "National Geographic Genographic project"', () => {
    render(<GenographicInfographic />)
    expect(screen.queryByText(/National Geographic Genographic project/i)).toBeInTheDocument()
  })

  it('should render genographics-infographic.png with alt text', () => {
    render(<GenographicInfographic />)

    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.alt).toBe(
      '41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal',
    )
  })

  it('should contain link to PDF results', () => {
    render(<GenographicInfographic />)

    const anchors = screen.getAllByRole('link') as HTMLAnchorElement[]
    expect(anchors.find((link) => link.href.indexOf(pdfFilename) >= 0)).toBeDefined()
  })
})
