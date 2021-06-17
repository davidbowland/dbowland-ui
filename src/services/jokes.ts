import axios, { AxiosResponse } from 'axios'

const baseURL = process.env.JOKE_API_BASE_URL
const fetchCount = process.env.JOKE_API_FETCH_COUNT
const timeoutInSeconds = process.env.JOKE_API_TIMEOUT_IN_SECONDS

export interface JokeType {
  joke: string
}

export interface JokeResponse {
  [key: number]: JokeType
}

const jokeClient = axios.create({
  baseURL,
  timeout: timeoutInSeconds * 1_000,
})

export class JokeService {
  static recentIndexes: number[] = []

  static async getJoke(index: number, token: string): Promise<JokeType> {
    const response: AxiosResponse<JokeType> = await jokeClient.get(`/v1/jokes/${index}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }

  static async postJoke(joke: JokeType, token: string): Promise<string> {
    const response: AxiosResponse = await jokeClient.post('/v1/jokes', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.statusText
  }

  static async putJoke(index: number, joke: JokeType, token: string): Promise<string> {
    const response: AxiosResponse = await jokeClient.put(`/v1/jokes/${index}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.statusText
  }

  static async getRandomJokes(): Promise<JokeResponse> {
    const response: AxiosResponse<JokeResponse> = await jokeClient.get('/v1/jokes/random', {
      params: {
        count: fetchCount,
        avoid: JokeService.recentIndexes.join(','),
      },
    })
    JokeService.recentIndexes = Object.keys(response.data) as unknown as number[]
    return response.data
  }
}

export default JokeService
