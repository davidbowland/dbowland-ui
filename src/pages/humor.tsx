import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Joke from '@components/joke'
import AuthService from '@services/auth'

import '@fontsource/rokkitt'
import 'normalize.css'

const Humor = (): JSX.Element => {
  const [authToken, setAuthToken] = useState('')

  const getLoginLink = (): JSX.Element | null => {
    return authToken.length === 0 ? (<div>
      <Link to={AuthService.getLoginUrl(window?.location?.href ?? 'https://dbowland.com/humor/')}>Admin login</Link>
    </div>) : null
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AuthService.loginFromHash(window.location.hash)
    }
  }, [])

  return (
    <main>
      <Helmet>
        <title>Humor | dbowland.com</title>
      </Helmet>
      <Joke initialize={typeof window !== 'undefined'} />
      {getLoginLink()}
    </main>
  )
}

export default Humor
