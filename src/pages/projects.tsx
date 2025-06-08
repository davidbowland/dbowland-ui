import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'
import React from 'react'

import Paper from '@mui/material/Paper'

import '@config/amplify'

const Projects = (): JSX.Element => {
  return (
    <>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section>
          <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px' }}>
            <ProjectsTable />
            <PrivacyLink />
          </Paper>
        </section>
      </main>
    </>
  )
}

export const Head = () => <title>Projects | dbowland.com</title>

export default Projects
