import PrivacyLink from '@components/privacy-link'
import ProjectsTable from '@components/projects-table'
import SeoHead from '@components/seo-head'
import TitleBar from '@components/title-bar'
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
      <SeoHead
        description="A collection of software projects built by David Bowland."
        path="/projects/"
        title="Projects | dbowland.com"
      />
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
