import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import SeoHead from '@components/seo-head'
import TitleBar from '@components/title-bar'
import Projects from '@pages/projects'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

jest.mock('@components/privacy-link')
jest.mock('@components/projects-table')
jest.mock('@components/seo-head')
jest.mock('@components/title-bar')

describe('Projects page', () => {
  beforeAll(() => {
    jest.mocked(PrivacyLink).mockReturnValue(<></>)
    jest.mocked(ProjectsTable).mockReturnValue(<></>)
    jest.mocked(SeoHead).mockReturnValue(<></>)
    jest.mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render ProjectsTable', () => {
    render(<Projects />)
    expect(ProjectsTable).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<Projects />)
    expect(TitleBar).toHaveBeenCalledTimes(1)
  })

  it('renders SeoHead with correct title and path', () => {
    render(<Projects />)
    expect(SeoHead).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/projects/', title: 'Projects | dbowland.com' }),
      undefined,
    )
  })
})
