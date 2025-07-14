declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GATSBY_IDENTITY_POOL_ID: string
    }
  }
}

export {}
