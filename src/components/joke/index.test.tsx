import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Joke from './index'
import JokeService from '@services/jokes'

jest.mock('@services/jokes')

describe('Joke component', () => {
  const jokes = [{ joke: 'Ha' }, { joke: 'Ha!' }]
  const getRandomJokes = jest.fn().mockResolvedValue(jokes)

  beforeAll(() => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0
    global.Math = mockMath

    JokeService.getRandomJokes = getRandomJokes
  })

  test('Ensure node snapshot match', () => {
    const { container } = render(<Joke />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure snapshot match', async () => {
    const { container, findByText } = render(<Joke initialize={true} />)
    await findByText('Next joke')
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure button works to change joke displayed', async () => {
    const { container, findByText } = render(<Joke initialize={true} />)
    const nextJokeButton: HTMLButtonElement = await findByText('Next joke') as HTMLButtonElement
    nextJokeButton.click()
    expect(container.firstChild).toMatchSnapshot()
  })
})
