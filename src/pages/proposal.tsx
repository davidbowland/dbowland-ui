import React, { useEffect } from 'react'

import '@config/amplify'

const VIDEO_ID = '1_H9BnVXBdltPGgtgi_sUf-QZVvaFq4h1'

const Proposal = (): JSX.Element => {
  // Redirect to the video

  useEffect(() => {
    window.location.replace(`https://drive.google.com/file/d/${VIDEO_ID}/view?usp=sharing`)
  }, [])

  return <></>
}

export const Head = () => (
  <>
    <title>Redirecting...</title>
    <meta content={`0;URL='https://drive.google.com/file/d/${VIDEO_ID}/view?usp=sharing'`} httpEquiv="refresh" />
  </>
)

export default Proposal
