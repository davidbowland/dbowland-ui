import React, { useEffect } from 'react'

import '@config/amplify'

export const DriveFileRedirect = 'drive-file' as const

export type RedirectType = typeof DriveFileRedirect

export interface RedirectProps {
  type: RedirectType
  id: string
}

const buildRedirectUrl = (type: RedirectType, id: string): string => {
  switch (type) {
  case DriveFileRedirect:
    return `https://drive.google.com/file/d/${id}/view?usp=sharing`
  default:
    throw new Error(`Unsupported redirect type: ${type}`)
  }
}

const Redirect = ({ type, id }: RedirectProps): JSX.Element => {
  useEffect(() => {
    const url = buildRedirectUrl(type, id)
    window.location.replace(url)
  }, [type, id])

  return <></>
}

export interface RedirectHeadProps {
  type: RedirectType
  id: string
}

export const RedirectHead = ({ type, id }: RedirectHeadProps) => {
  const url = buildRedirectUrl(type, id)

  return <meta content={`0;URL='${url}'`} httpEquiv="refresh" />
}

export default Redirect
