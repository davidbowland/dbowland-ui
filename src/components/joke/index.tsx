import React, { useState } from 'react'

import JokeData from '@assets/jokes.yaml'

export interface JokeProps {
  initialize?: boolean
}

const Joke = ({ initialize = false }: JokeProps): JSX.Element => {
  const jokeList: string[] = Array.from(JokeData.jokes)
  let jokeCount = jokeList.length

  const resetJokeList = (): void => {
    jokeCount = jokeList.length
  }

  const getRandomJoke = (): string => {
    const index = Math.floor(Math.random() * jokeCount)
    const selection = jokeList[index]
    jokeList[index] = jokeList[--jokeCount]
    jokeList[jokeCount] = selection

    if (jokeCount <= 0) {
      resetJokeList()
    }

    return selection
  }

  const nextJoke = (): void => {
    setJoke(getRandomJoke())
  }

  const [joke, setJoke] = useState(initialize ? getRandomJoke() : '')

  return (
    <>
      <h1>{joke}</h1>
      <button onClick={nextJoke}>Next joke</button>
    </>
  )
}

export default Joke
