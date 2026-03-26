import Image from 'next-export-optimize-images/image'
import Link from 'next/link'
import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import genographicInfographic from '@assets/images/genographic-infographic.png'

const genographicPdf = '/assets/pdf/genographic-results.pdf'

const GenographicInfographic = (): JSX.Element => {
  return (
    <Stack margin="auto" padding={4} spacing={2}>
      <Typography>
        In 2016, I sent my DNA to the now-defunct National Geographic Genographic project to both help drive research
        and to learn something about the immense journey that brought me here. Below are the results from my
        participation in that project. People who know me will not be surprised to learn that my ancestors were
        &quot;[h]unters of megafauna such as the woolly mammoth.&quot; &#x1F606;
      </Typography>
      <Link href={genographicPdf}>
        <Image
          alt="41% Eastern Europe; 22% Western and Central Europe; 20% Scandinavin; 14% Great Britain and Ireland; 2% Asia Minor; 1.1% Neanderthal"
          src={genographicInfographic}
        />
      </Link>
      <Typography sx={{ fontSize: 'smaller', fontStyle: 'italic' }}>
        Click or tap on the image for the full 18-page PDF report.
      </Typography>
    </Stack>
  )
}

export default GenographicInfographic
