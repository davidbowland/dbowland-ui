import React from 'react'

import Joke from '@components/joke'

import '@fontsource/rokkitt'
import 'normalize.css'

const Humor = (): JSX.Element => {
  return (
    <main>
      <title>Humor | dbowland.com</title>
      <Joke />
    </main>
  )
}

export default Humor