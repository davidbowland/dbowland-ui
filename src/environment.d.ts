declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_IDENTITY_POOL_ID: string
    }
  }
}

export {}
