import Amplify, { Auth } from 'aws-amplify'
import { AmplifyAuthContainer, AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'

import JokeService, { JokeResponse, JokeType } from '@services/jokes'

const appClientId = process.env.COGNITO_APP_CLIENT_ID
const userPoolId = process.env.COGNITO_USER_POOL_ID
const baseUrl = process.env.JOKE_API_BASE_URL

Amplify.configure({
  Auth: {
    region: userPoolId.split('_')[0],
    userPoolId,
    userPoolWebClientId: appClientId,
    mandatorySignIn: false,
  },
  API: {
    endpoints: [
      {
        name: 'JokesAPIGateway',
        endpoint: baseUrl,
      },
    ],
  },
})

export interface JokeProps {
  initialize?: boolean
}

export interface Client {
  endpoint: string
  fetchOptions: Record<string, unknown>
}

export interface Token {
  getExpiration: () => number
  getIssuedAt: () => number
  getJwtToken: () => string
}

export interface User {
  username: string
  attributes: Record<string, unknown>
  email: string
  email_verified: boolean
  sub: string
  authenticationFlowType: string
  client: Client
  keyPrefix: string
  pool: {
    advancedSecurityDataCollectionFlag: boolean
    client: Client
    clientId: string
    userPoolId: string
  }
  preferredMFA: string
  signInUserSession: {
    accessToken: {
      jwtToken: string
    }
    clockDrift: number
    idToken: {
      jwtToken: string
    }
    refreshToken: {
      token: string
    }
    calculateClockDrift: () => number
    getAccessToken: () => Token
    getClockDrift: () => number
    getIdToken: () => Token
    getRefreshToken: () => {
      getToken: () => string
    }
    isValid: () => boolean
  }
  storage: { [key: string]: string }
}

export enum AdminView {
  ADD_JOKE = 'add',
  EDIT_JOKE = 'edit'
}

export enum AuthState {
  SignedIn = 'signedin',
  SignedOut = 'signedout'
}

export interface DisplayedJoke extends JokeType {
  index: number
}

const Joke = ({ initialize = false }: JokeProps): JSX.Element => {
  const [joke, setJoke] = useState({} as DisplayedJoke)
  const [availableJokes, setAvailableJokes] = useState({} as JokeResponse)
  const [isError, setIsError] = useState(false)
  const jokeList = Object.keys(availableJokes) as unknown as number[]
  const isLoading = jokeList.length == 0 || !joke

  const [authState, setAuthState] = useState('' as AuthState)
  const [adminView, setAdminView] = useState(AdminView.ADD_JOKE)
  const [adminNotice, setAdminNotice] = useState('')
  const [user, setUser] = useState<User>()
  const [addJokeText, setAddJokeText] = useState('')

  const fetchJokeList = async (): Promise<void> => {
    try {
      setIsError(false)
      setAvailableJokes(await JokeService.getRandomJokes())
    } catch (error) {
      setIsError(true)
      console.error(error)
    }
  }

  const getRandomJoke = (): DisplayedJoke => {
    const randomIndex = jokeList[Math.floor(Math.random() * jokeList.length)]
    const selectedJoke = availableJokes[randomIndex]
    delete availableJokes[randomIndex]
    setAvailableJokes(availableJokes)

    return { ...selectedJoke, index: randomIndex }
  }

  const nextJoke = async (): Promise<void> => {
    if (jokeList.length == 0) {
      fetchJokeList()
      setJoke({} as DisplayedJoke)
    } else {
      setJoke(getRandomJoke())
    }
  }

  const addJoke = async(): Promise<void> => {
    if (user) {
      const statusText = await JokeService.postJoke({ joke: addJokeText }, user.signInUserSession.getAccessToken().getJwtToken())
      setAdminNotice(statusText)
    } else {
      setAdminNotice('User not logged in')
    }
  }

  const updateJoke = async(): Promise<void> => {
    if (user) {
      const statusText = await JokeService.putJoke(joke.index, { joke: joke.joke }, user.signInUserSession.getAccessToken().getJwtToken())
      setAdminNotice(statusText)
    } else {
      setAdminNotice('User not logged in')
    }
  }

  const updateAdminView = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdminNotice('')
    setAdminView(event.target.value as AdminView)
  }

  const getButtonText = (): string => {
    if (isError) {
      return 'Error! Try again.'
    } else if (isLoading) {
      return 'Loading...'
    }
    return 'Next joke'
  }

  useEffect(() => {
    if (jokeList.length == 0 && (initialize || joke?.joke)) {
      fetchJokeList()
    } else if (!joke?.joke && jokeList.length > 0) {
      nextJoke()
    }
  }, [availableJokes, joke])

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user: User) => {
      setAuthState(AuthState.SignedIn)
      setUser(user)
    })
  }, [])

  const handleAuthStateChange = ((state: AuthState, data?: User): void => {
    if (state === AuthState.SignedIn || state === AuthState.SignedOut) {
      setAuthState(state)
      setUser(data)
    }
  }) as any

  return (
    <>
      <h1>{joke.joke}</h1>
      <button onClick={nextJoke} disabled={isLoading && !isError}>
        {getButtonText()}
      </button>
      {authState !== AuthState.SignedIn ? (
        <AmplifyAuthContainer>
          <AmplifyAuthenticator>
            <AmplifySignIn handleAuthStateChange={handleAuthStateChange} slot="sign-in"></AmplifySignIn>
          </AmplifyAuthenticator>
        </AmplifyAuthContainer>
      ) : (
        <div>
          <p>{adminNotice}</p>
          <div>
            <label><input type="radio" onChange={updateAdminView} name="admin-view" value={AdminView.ADD_JOKE} checked={adminView == AdminView.ADD_JOKE} />
              Add joke
            </label><br />
            <label>
              <input type="radio" onChange={updateAdminView} name="admin-view" value={AdminView.EDIT_JOKE} checked={adminView == AdminView.EDIT_JOKE} />
              Edit joke
            </label>
          </div>
          {adminView == AdminView.ADD_JOKE ? <div>
            <input type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAddJokeText(event.target.value)} value={addJokeText} />
            <button onClick={addJoke}>Add joke</button>
          </div> : <div>
            <p>Joke #{joke.index}</p>
            <input type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJoke({ ...joke, joke: event.target.value })} value={joke.joke} />
            <button onClick={updateJoke}>Update joke</button>
          </div>}
          <div>
            <AmplifySignOut handleAuthStateChange={handleAuthStateChange} slot="sign-out" />
          </div>
        </div>
      )}
    </>
  )
}

export default Joke
