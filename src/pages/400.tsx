import ServerErrorMessage from '@components/server-error-message'
import Head from 'next/head'
import React from 'react'

const BadRequest = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>400: Bad Request -- dbowland.com</title>
      </Head>
      <ServerErrorMessage title="400: Bad Request">
        Your request was malformed or otherwise could not be understood by the server. Please modify your request before
        retrying.
      </ServerErrorMessage>
    </>
  )
}

export default BadRequest
