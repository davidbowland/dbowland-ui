import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'

const Projects = (): JSX.Element => {
  return (
    <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px', textAlign: 'center' }}>
      <Helmet>
        <title>Projects | dbowland.com </title>
      </Helmet>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section>
          <ProjectsTable />
        </section>
      </main>
    </Paper>
  )
}

export default Projects
