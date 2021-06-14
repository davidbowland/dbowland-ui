import JokeService from './jokes'

import { rest, server } from '@test/setup-server'

const baseUrl = process.env.JOKE_API_BASE_URL || 'http://localhost'

describe('Joke service', () => {
  const randomJokeResult = { '3': { joke: 'rofl' }, '74': { joke: 'lol' } }

  beforeEach(() => {
    server.use(
      rest.get(`${baseUrl}/v1/jokes/random`, async (req, res, ctx) => {
        if (JokeService.recentIndexes.join(',') !== req.url.searchParams.get('avoid')) {
          return res(ctx.status(400))
        }
        return res(ctx.json(randomJokeResult))
      })
    )
  })

  test('getRandomJokes returns results from client endpoint', async () => {
    const result = await JokeService.getRandomJokes()

    expect(JokeService.recentIndexes).toEqual(Object.keys(randomJokeResult))
    expect(result).toEqual(Object.values(randomJokeResult))
  })

  test('getRandomJokes returns results using recentIndexes', async () => {
    JokeService.recentIndexes = ['32', '45', '79']
    const result = await JokeService.getRandomJokes()

    expect(JokeService.recentIndexes).toEqual(Object.keys(randomJokeResult))
    expect(result).toEqual(Object.values(randomJokeResult))
  })
})
