declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JOKE_API_BASE_URL: string
      JOKE_API_FETCH_COUNT: number
      JOKE_API_TIMEOUT_IN_SECONDS: number
    }
  }
}

export {}
