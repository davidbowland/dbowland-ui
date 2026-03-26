import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'

import Paper from '@mui/material/Paper'

const Projects = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Projects | dbowland.com</title>
      </Head>
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

export default Projects
