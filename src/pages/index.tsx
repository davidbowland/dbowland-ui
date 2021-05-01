import React from 'react'
import { Helmet } from 'react-helmet'

import Resume from '@components/resume'
import { PrimaryMain } from '@components/common/elements'

import '@fontsource/rokkitt'
import 'normalize.css'

const HomePage = (): JSX.Element => {
  return (
    <PrimaryMain>
      <Helmet>
        <title>David Bowland | Software Developer</title>
      </Helmet>
      <Resume />
    </PrimaryMain>
  )
}

export default HomePage
