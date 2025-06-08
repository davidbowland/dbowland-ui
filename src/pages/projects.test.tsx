import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import Projects, { Head } from './projects'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/privacy-link')
jest.mock('@components/projects-table')
jest.mock('@components/title-bar')

describe('Projects page', () => {
  beforeAll(() => {
    jest.mocked(PrivacyLink).mockReturnValue(<></>)
    jest.mocked(ProjectsTable).mockReturnValue(<></>)
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

  it('renders Head', () => {
    render(<Head />)
    expect(document.title).toEqual('Projects | dbowland.com')
  })
})
