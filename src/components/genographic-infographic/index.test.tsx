import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import gatsyPluginImage from 'gatsby-plugin-image'
import React from 'react'

import GenographicInfographic from './index'

jest.mock('gatsby-plugin-image')

describe('Genographic infographic component', () => {
  const imageFilename = 'genographic-infographic.png'
  const pdfFilename = 'test-file-stub'

  beforeAll(() => {
    jest.spyOn(gatsyPluginImage, 'StaticImage').mockImplementation((props) => {
      return <img src={props.src} />
    })
  })

  it('should include text "National Geographic Genographic project"', () => {
    render(<GenographicInfographic />)
    expect(screen.queryByText(/National Geographic Genographic project/i)).toBeInTheDocument()
  })

  it('should render genographics-infographic.png with alt text', () => {
    render(<GenographicInfographic />)

    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toContain(imageFilename)
    expect(img.alt).toBeDefined()
  })

  it('should contain link to PDF results', () => {
    render(<GenographicInfographic />)

    const anchors = screen.getAllByRole('link') as HTMLAnchorElement[]
    expect(anchors.find((link) => link.href.indexOf(pdfFilename) >= 0)).toBeDefined()
  })
})
