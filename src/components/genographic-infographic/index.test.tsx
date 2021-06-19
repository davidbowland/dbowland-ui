import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import gatsyPluginImage from 'gatsby-plugin-image'

import GenographicInfographic from './index'

jest.mock('gatsby-plugin-image')

describe('Genographic infographic component', () => {
  const imageFilename = 'genographic-infographic.png'
  const pdfFilename = 'test-file-stub'

  beforeAll(() => {
    jest.spyOn(gatsyPluginImage, 'StaticImage').mockImplementation((props) => {
      return <img {...props} />
    })
  })

  test('Rendering GenographicInfographic renders genographics-infographic.png with alt text', () => {
    render(<GenographicInfographic />)

    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toContain(imageFilename)
    expect(img.alt).toBeDefined()
  })

  test('Rendering GenographicInfographic contains link to PDF results', () => {
    render(<GenographicInfographic />)

    const anchors = screen.getAllByRole('link') as HTMLAnchorElement[]
    expect(anchors.find((link) => link.href.indexOf(pdfFilename) >= 0)).toBeDefined()
  })
})
