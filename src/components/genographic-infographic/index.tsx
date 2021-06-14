import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { GenocraphicCaption, GenographicFigure } from './elements'
import genographicPdf from '@assets/pdf/genographic-results.pdf'

const GenographicInfographic = (): JSX.Element => {
  return (
    <GenographicFigure>
      <Link to={genographicPdf}>
        <StaticImage
          src="../../assets/images/genographic-infographic.png"
          alt="41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal"
        />
      </Link>
      <GenocraphicCaption>Click or tap on the image for the full 18-page PDF report.</GenocraphicCaption>
    </GenographicFigure>
  )
}

export default GenographicInfographic
