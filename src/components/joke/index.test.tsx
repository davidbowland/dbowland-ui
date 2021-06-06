import React from 'react'
import '@testing-library/jest-dom'
import { act, screen, render } from '@testing-library/react'

import Joke from './index'
import JokeService from '@services/jokes'

jest.mock('@services/jokes')

describe('Joke component', () => {
  const joke1 = 'Ha'
  const joke2 = 'lol'
  const joke3 = '=)'
  const jokeList = [{ joke: joke1 }, { joke: joke2 }, { joke: joke3 }]
  const getRandomJokes = jest.fn()

  beforeAll(() => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0
    global.Math = mockMath

    JokeService.getRandomJokes = getRandomJokes
  })

  beforeEach(() => {
    getRandomJokes.mockReturnValue(Promise.resolve(jokeList))
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Rendering Joke renders no joke by default, for static rendering', () => {
    render(<Joke />)

    expect(screen.getByText(/Loading.../i)).toBeDisabled()
    expect(screen.getByRole('heading')).toHaveTextContent('')
  })

  test('Rendering Joke displays a joke', async () => {
    render(<Joke initialize={true} />)

    expect(await screen.findByText(/Next joke/i)).not.toBeDisabled()
    expect(screen.getByText(joke1)).toBeInTheDocument()
  })

  test('Clicking the Next Joke button changes the joke displayed', async () => {
    render(<Joke initialize={true} />)

    const nextJokeButton: HTMLButtonElement = (await screen.findByText(/Next joke/i)) as HTMLButtonElement
    expect(screen.queryAllByText(joke2).length).toBe(0)
    act(() => nextJokeButton.click())

    await screen.findByText(/Next joke/i)
    expect(nextJokeButton).not.toBeDisabled()
    expect(screen.getByText(joke2)).toBeInTheDocument()
  })

  test('Clicking the Next Joke button calls getRandomJokes when jokes run out', async () => {
    getRandomJokes.mockReturnValueOnce(Promise.resolve([{ joke: joke1 }]))
    render(<Joke initialize={true} />)

    const nextJokeButton: HTMLButtonElement = (await screen.findByText(/Next joke/i)) as HTMLButtonElement
    getRandomJokes.mockReturnValueOnce(Promise.resolve([{ joke: joke2 }, { joke: joke3 }]))
    act(() => nextJokeButton.click())

    expect(nextJokeButton).not.toBeDisabled()
    expect(getRandomJokes).toHaveBeenCalledTimes(2)
  })

  test('Ensure error on getRandomJokes reject', async () => {
    getRandomJokes.mockReturnValueOnce(Promise.reject('fake error'))
    render(<Joke initialize={true} />)

    const errorButton: HTMLButtonElement = (await screen.findByText(/Error! Try again./)) as HTMLButtonElement
    expect(errorButton).not.toBeDisabled()
    expect(getRandomJokes).toHaveBeenCalledTimes(1)
  })

  test('Ensure error button retries', async () => {
    getRandomJokes.mockReturnValueOnce(Promise.reject('another error'))
    render(<Joke initialize={true} />)

    const errorButton: HTMLButtonElement = (await screen.findByText(/Error! Try again./i)) as HTMLButtonElement
    act(() => errorButton.click())

    expect(await screen.findByText(/Next joke/i)).not.toBeDisabled()
    expect(screen.getByText(joke1)).toBeInTheDocument()
    expect(getRandomJokes).toHaveBeenCalledTimes(2)
  })
})
