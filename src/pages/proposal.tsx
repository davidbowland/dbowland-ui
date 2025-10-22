import Redirect, { DriveFileRedirect, RedirectHead } from '@components/redirect'
import React from 'react'

const VIDEO_ID = '1_H9BnVXBdltPGgtgi_sUf-QZVvaFq4h1'

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
