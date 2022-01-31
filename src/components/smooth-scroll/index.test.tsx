import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import SmoothScrollExample from './index'

describe('smooth-scroll example component', () => {
  test('expect SmoothScrollExample to render nine cells', () => {
    render(<SmoothScrollExample />)

    expect(screen.getAllByText(/1/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/2/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/3/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/4/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/5/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/6/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/7/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/8/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/9/i)[0]).toBeInTheDocument()
  })

  test('Rendering SmoothScrollExample to have scroll links', () => {
    render(<SmoothScrollExample />)

    const anchors = screen.getAllByRole('link') as HTMLAnchorElement[]
    expect(anchors.find((link) => link.href.indexOf('#cell1') >= 0)).toBeDefined()
    expect(screen.getByText(/Down 1, 3 sec/i)).toBeInTheDocument()
  })
})
