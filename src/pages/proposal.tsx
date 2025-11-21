import Redirect, { DriveFileRedirect, RedirectHead } from '@components/redirect'
import React from 'react'

const VIDEO_ID = '1QjF6bZjeD2k4OKReS_Okm7xX0W_l9n52'

const Proposal = (): JSX.Element => {
  return <Redirect id={VIDEO_ID} type={DriveFileRedirect} />
}

export const Head = () => (
  <>
    <title>Redirecting...</title>
    <RedirectHead id={VIDEO_ID} type={DriveFileRedirect} />
  </>
)

export default Proposal
