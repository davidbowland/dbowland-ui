import Head from 'next/head'
import React from 'react'

import ResumePdfContent from '@components/resume-pdf'

const ResumePdf = (): React.JSX.Element => (
  <>
    <Head>
      <meta content="noindex, nofollow" name="robots" />
    </Head>
    <div style={{ background: 'white', padding: '0.4in' }}>
      <ResumePdfContent />
    </div>
  </>
)

export default ResumePdf
