import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { CSSProperties } from 'react'

import genographicPdf from '@assets/pdf/genographic-results.pdf'

const figureStyles: CSSProperties = {
  borderColor: '#c0c0c0',
  borderStyle: 'solid',
  borderWidth: 'thin',
  display: 'flex',
  flexFlow: 'column',
  padding: 5,
  margin: 'auto',
  maxWidth: 650,
}

const captionStyles: CSSProperties = {
  fontStyle: 'italic',
  fontSize: 'smaller',
  padding: 3,
  textAlign: 'center',
}

const GenographicInfographic = ({ withCaption = true }: { withCaption?: boolean }): JSX.Element => {
  return (
    <figure style={figureStyles}>
      <Link to={genographicPdf}>
        <StaticImage
          src='../../assets/images/genographic-infographic.png'
          alt="41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal"
        />
      </Link>
      {withCaption && (
        <figcaption style={captionStyles}>
          Click or tap on the image for the full 18-page PDF report.
        </figcaption>
      )}
    </figure>
  )
}

export default GenographicInfographic
