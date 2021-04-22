import React from 'react'

import Resume from '@components/resume'

import '@fontsource/rokkitt'
import '@scss/new-style.scss'
import 'normalize.css'

const HomePage = (): JSX.Element => {
  return (
    <main>
      <title>David Bowland | Software Developer</title>
      <Resume />
    </main>
  )
}

export default HomePage
