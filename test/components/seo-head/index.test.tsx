import SeoHead from '@components/seo-head'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

const getMetaContent = (selector: string): string | null =>
  document.querySelector(selector)?.getAttribute('content') ?? null

describe('SeoHead', () => {
  it('renders the page title', () => {
    render(<SeoHead description="A description" path="/example/" title="Example | dbowland.com" />)
    expect(document.title).toEqual('Example | dbowland.com')
  })

  it('renders the meta description', () => {
    render(<SeoHead description="A description" path="/example/" title="Example | dbowland.com" />)
    expect(getMetaContent('meta[name="description"]')).toEqual('A description')
  })

  it('renders Open Graph tags with an absolute url and image', () => {
    render(<SeoHead description="A description" path="/example/" title="Example | dbowland.com" />)
    expect(getMetaContent('meta[property="og:title"]')).toEqual('Example | dbowland.com')
    expect(getMetaContent('meta[property="og:description"]')).toEqual('A description')
    expect(getMetaContent('meta[property="og:url"]')).toEqual('https://dbowland.com/example/')
    expect(getMetaContent('meta[property="og:image"]')).toEqual('https://dbowland.com/og-image.jpg')
  })

  it('renders Twitter card tags', () => {
    render(<SeoHead description="A description" path="/example/" title="Example | dbowland.com" />)
    expect(getMetaContent('meta[name="twitter:card"]')).toEqual('summary_large_image')
    expect(getMetaContent('meta[name="twitter:title"]')).toEqual('Example | dbowland.com')
    expect(getMetaContent('meta[name="twitter:image"]')).toEqual('https://dbowland.com/og-image.jpg')
  })
})
