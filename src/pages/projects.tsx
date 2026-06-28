import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import TitleBar from '@components/title-bar'
import Head from 'next/head'
import React, { useEffect } from 'react'

const Projects = (): JSX.Element => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <>
      <Head>
        <title>Projects | dbowland.com</title>
      </Head>
      <main>
        <nav>
          <TitleBar />
        </nav>
        <section className="min-h-[100dvh]">
          <div className="mx-auto max-w-5xl px-4 sm:px-8">
            <ProjectsTable />
            <PrivacyLink />
          </div>
        </section>
      </main>
    </>
  )
}

export default Projects
