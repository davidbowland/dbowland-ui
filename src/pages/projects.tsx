import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import ProjectsTable from '@components/projects-table'
import Themed from '@components/themed'
import TitleBar from '@components/title-bar'

const Projects = (): JSX.Element => {
  return (
    <Themed>
      <Helmet>
        <title>Projects | dbowland.com </title>
      </Helmet>
      <Paper elevation={3} sx={{ margin: 'auto', maxWidth: '900px', textAlign: 'center' }}>
        <main>
          <nav>
            <TitleBar />
          </nav>
          <section>
            <ProjectsTable />
          </section>
        </main>
      </Paper>
    </Themed>
  )
}

export default Projects
