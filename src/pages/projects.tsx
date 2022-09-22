import { Helmet } from 'react-helmet'
import Paper from '@mui/material/Paper'
import React from 'react'

import '@config/amplify'
import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'

const Projects = (): JSX.Element => {
  return (
    <Paper elevation={3}>
      <Helmet>
        <title>Projects | dbowland.com </title>
      </Helmet>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section style={{ margin: 'auto', maxWidth: '900px' }}>
          <ProjectsTable />
          <PrivacyLink />
        </section>
      </main>
    </Paper>
  )
}

export default Projects
