import React from 'react'
import { Helmet } from 'react-helmet'

import GenographicInfographic from '@components/genographic-infographic'

import '@fontsource/rokkitt'
import 'normalize.css'

const Genographic = (): JSX.Element => {
  return (
    <main>
      <Helmet>
        <title>Genographic Information | dbowland.com </title>
      </Helmet>
      <p>
        In 2016, I sent my DNA to the now-defunct National Geographic Genographic project to both help drive research
        and to learn something about the immense journey that brought me here. Below are the results from my
        participation in that project. People who know me will not be surprised to learn that my ancestors were
        &quot;[h]unters of megafauna such as the woolly mammoth.&quot; &#x1F606;
      </p>
      <GenographicInfographic />
    </main>
  )
}

export default Genographic
