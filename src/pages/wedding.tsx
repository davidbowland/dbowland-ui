import Redirect, { DriveFileRedirect, RedirectHead } from '@components/redirect'
import React from 'react'

const VIDEO_ID = '1PMbL4GwiNlkN-aqjuun3ytOMTelFL-3w'

const Wedding = (): JSX.Element => {
  return <Redirect id={VIDEO_ID} type={DriveFileRedirect} />
}

export const Head = () => (
  <>
    <title>Redirecting...</title>
    <RedirectHead id={VIDEO_ID} type={DriveFileRedirect} />
  </>
)

export default Wedding
