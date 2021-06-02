import React, { useEffect, useState } from 'react'

import JokeService, { JokeType } from '@services/jokes'

export interface JokeProps {
  initialize?: boolean
}

const Joke = ({ initialize = false }: JokeProps): JSX.Element => {
  const [joke, setJoke] = useState('')
  const [jokeList, setJokeList] = useState([] as JokeType[])
  const isLoading = jokeList.length == 0 || !joke

  const fetchJokeList = async (): Promise<void> => {
    setJokeList(await JokeService.getRandomJokes())
  }

  const getRandomJokeText = (): string => {
    const randomIndex = Math.floor(Math.random() * jokeList.length)
    const selectedJoke = jokeList[randomIndex]
    setJokeList(jokeList.filter((value) => value != selectedJoke))

    return selectedJoke.joke
  }

  const nextJoke = async (): Promise<void> => {
    setJoke(getRandomJokeText())
  }

  useEffect(() => {
    if (jokeList.length == 0 && initialize) {
      fetchJokeList()
    } else if (!joke && jokeList.length > 0) {
      nextJoke()
    }
  }, [jokeList])

  return (
    <>
      <h1>{joke}</h1>
      <button onClick={nextJoke} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Next joke'}
      </button>
    </>
  )
}

export default Joke
