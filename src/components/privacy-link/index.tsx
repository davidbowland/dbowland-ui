import Link from 'next/link'
import React from 'react'

import Typography from '@mui/material/Typography'

const PrivacyLink = (): JSX.Element => {
  return (
    <Typography component="div" sx={{ p: 2, textAlign: 'center' }} variant="caption">
      <Link href="/privacy-policy">Privacy policy</Link>
    </Typography>
  )
}

export default PrivacyLink
