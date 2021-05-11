import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import gatsyPluginImage from 'gatsby-plugin-image'

import GenographicInfographic from './index'

jest.mock('gatsby-plugin-image')

describe('Genographic infographic component', () => {
  beforeAll(() => {
    jest.spyOn(gatsyPluginImage, 'StaticImage').mockImplementation((props) => {
      return <img {...props} />
    })
  })

  test('Ensure snapshot match', () => {
    const { container } = render(<GenographicInfographic />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure image is on page', () => {
    const { getByRole } = render(<GenographicInfographic />)

    const img = getByRole('img') as HTMLImageElement
    expect(img.src).toContain('genographic-infographic.png')
  })
})
