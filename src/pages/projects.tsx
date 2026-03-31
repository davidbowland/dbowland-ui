import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React from 'react'

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
        <section className="bg-slate-50 dark:bg-slate-950 min-h-screen">
          <div className="mx-auto max-w-5xl px-4 sm:px-8 py-6">
            <ProjectsTable />
            <PrivacyLink />
          </div>
        </section>
      </main>
    </>
  )
}

export default Projects
