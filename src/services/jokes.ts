import axios, { AxiosResponse } from 'axios'

const baseURL = process.env.JOKE_API_BASE_URL
const fetchCount = process.env.JOKE_API_FETCH_COUNT
const timeoutInSeconds = process.env.JOKE_API_TIMEOUT_IN_SECONDS

export interface JokeType {
  joke: string
}

export interface JokeResponse {
  [key: string]: JokeType
}

const jokeClient = axios.create({
  baseURL,
  timeout: timeoutInSeconds * 1_000,
})

class JokeService {
  static recentIndexes: string[] = []

  static async getRandomJokes(): Promise<JokeType[]> {
    const response: AxiosResponse<JokeResponse> = await jokeClient.get('/v1/jokes/random', {
      params: {
        count: fetchCount,
        avoid: JokeService.recentIndexes.join(','),
      },
    })
    JokeService.recentIndexes = Object.keys(response.data)
    return Object.values(response.data)
  }
}

export default JokeService
