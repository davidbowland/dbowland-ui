import JokeService from './jokes'

import { rest, server } from '@test/setup-server'

describe('Joke service', () => {
  const randomJokeResult = { '3': { joke: 'Ha' }, '74': { joke: 'Ha!' } }

  beforeAll(() => {
    server.use(
      rest.get('/v1/jokes/random', async (req, res, ctx) => {
        return res(ctx.json(randomJokeResult))
      })
    )
  })

  test('getRandomJokes returns results from client endpoint', async () => {
    const result = await JokeService.getRandomJokes()

    expect(JokeService.recentIndexes).toEqual(Object.keys(randomJokeResult))
    expect(result).toEqual(Object.values(randomJokeResult))
  })
})
