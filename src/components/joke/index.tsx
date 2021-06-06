import React, { useEffect, useState } from 'react'

import JokeService, { JokeType } from '@services/jokes'

export interface JokeProps {
  initialize?: boolean
}

const Joke = ({ initialize = false }: JokeProps): JSX.Element => {
  const [joke, setJoke] = useState('')
  const [jokeList, setJokeList] = useState([] as JokeType[])
  const [isError, setIsError] = useState(false)
  const isLoading = jokeList?.length == 0 || !joke

  const fetchJokeList = async (): Promise<void> => {
    try {
      setIsError(false)
      setJokeList(await JokeService.getRandomJokes())
    } catch (error) {
      setIsError(true)
      console.error(error)
    }
  }

  const getRandomJokeText = (): string => {
    const randomIndex = Math.floor(Math.random() * jokeList.length)
    const selectedJoke = jokeList[randomIndex]
    setJokeList((tempList) => tempList.filter((value) => value != selectedJoke))

    return selectedJoke.joke
  }

  const nextJoke = async (): Promise<void> => {
    if (jokeList?.length == 0) {
      fetchJokeList()
      setJoke('')
    } else {
      setJoke(getRandomJokeText())
    }
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
    if (jokeList?.length == 0 && (initialize || joke)) {
      fetchJokeList()
    } else if (!joke && jokeList?.length > 0) {
      nextJoke()
    }
  }, [jokeList])

  return (
    <>
      <h1>{joke}</h1>
      <button onClick={nextJoke} disabled={isLoading && !isError}>
        {getButtonText()}
      </button>
    </>
  )
}

export default Joke
