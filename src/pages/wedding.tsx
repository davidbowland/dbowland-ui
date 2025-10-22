import React, { useEffect } from 'react'

import '@config/amplify'

const VIDEO_ID = '1PMbL4GwiNlkN-aqjuun3ytOMTelFL-3w'

const Wedding = (): JSX.Element => {
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

export default Wedding
