import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { mocked } from 'jest-mock'
import React from 'react'

import Projects from './projects'

jest.mock('@aws-amplify/analytics')
jest.mock('@components/privacy-link')
jest.mock('@components/projects-table')
jest.mock('@components/title-bar')

describe('Projects page', () => {
  beforeAll(() => {
    mocked(PrivacyLink).mockReturnValue(<></>)
    mocked(ProjectsTable).mockReturnValue(<></>)
    mocked(TitleBar).mockReturnValue(<></>)
  })

  it('should render ProjectsTable', () => {
    render(<Projects />)
    expect(mocked(ProjectsTable)).toHaveBeenCalledTimes(1)
  })

  it('should render TitleBar', () => {
    render(<Projects />)
    expect(mocked(TitleBar)).toHaveBeenCalledTimes(1)
  })
})
