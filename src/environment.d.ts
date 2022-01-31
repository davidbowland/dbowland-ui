declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COGNITO_APP_CLIENT_ID: string
      COGNITO_USER_POOL_ID: string
    }
  }
}

export {}
