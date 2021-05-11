import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Joke from './index'

jest.mock('@assets/jokes.yaml', () => ({
  jokes: ['Ha!', '=)'],
}))

describe('Joke component', () => {
  beforeAll(() => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0
    global.Math = mockMath
  })

  test('Ensure node snapshot match', () => {
    const { container } = render(<Joke />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure snapshot match', () => {
    const { container } = render(<Joke initialize={true} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Ensure button works to change joke displayed', () => {
    const { container, getByText } = render(<Joke initialize={true} />)
    const nextJokeButton: HTMLButtonElement = getByText('Next joke') as HTMLButtonElement
    nextJokeButton.click()
    expect(container.firstChild).toMatchSnapshot()
  })
})
