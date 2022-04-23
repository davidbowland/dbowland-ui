import { Link } from 'gatsby'
import React from 'react'
import Stack from '@mui/material/Stack'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '@mui/material/Typography'

import genographicPdf from '@assets/pdf/genographic-results.pdf'

const GenographicInfographic = (): JSX.Element => {
  return (
    <Stack margin="auto" padding={4} spacing={2}>
      <Typography>
        In 2016, I sent my DNA to the now-defunct National Geographic Genographic project to both help drive research
        and to learn something about the immense journey that brought me here. Below are the results from my
        participation in that project. People who know me will not be surprised to learn that my ancestors were
        &quot;[h]unters of megafauna such as the woolly mammoth.&quot; &#x1F606;
      </Typography>
      <Link to={genographicPdf}>
        <StaticImage
          alt="41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal"
          src="../../assets/images/genographic-infographic.png"
        />
      </Link>
      <Typography sx={{ fontSize: 'smaller', fontStyle: 'italic' }}>
        Click or tap on the image for the full 18-page PDF report.
      </Typography>
    </Stack>
  )
}

export default GenographicInfographic
