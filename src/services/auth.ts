import axios, { AxiosResponse } from 'axios'

const appClientId = process.env.COGNITO_APP_CLIENT_ID
const appDomain = process.env.COGNITO_APP_DOMAIN
const baseURL = process.env.COGNITO_BASE_URL
const timeoutInSeconds = process.env.COGNITO_TIMEOUT_IN_SECONDS
const userPoolId = process.env.COGNITO_USER_POOL_ID

export interface TokenData {
  id_token: string
  access_token: string
  expires_in: string
  token_type: string
}

export interface Jwk {
  alg: string
  e: string
  kid: string
  kty: string
  n: string
  use: string
}

export interface JwkResponse {
  keys: Jwk[]
}

export enum TokenUse {
  ID = 'id',
  ACCESS = 'access'
}

const authClient = axios.create({
  baseURL,
  timeout: timeoutInSeconds * 1_000,
})

export class AuthService {
  static accessToken = ''
  static idToken = ''

  static getIssuer(): string {
    return `${baseURL}/${userPoolId}`
  }

  static async getJwks(): Promise<Jwk[]> {
    const response: AxiosResponse<JwkResponse> = await authClient.get(`/${userPoolId}/.well-known/jwks.json`)
    return response.data.keys ?? []
  }

  static getLoginUrl(redirectUri: string): string {
    return `${appDomain}/login?response_type=token&client_id=${encodeURIComponent(appClientId)}&redirect_uri=${encodeURIComponent(redirectUri)}`
  }

  static async loginFromHash(hash: string): Promise<void> {
    const hashPairs = AuthService.parseUrlHash(hash)
    await AuthService.loginFromToken(hashPairs)
  }

  static async loginFromToken(token: TokenData): Promise<void> {
    const keys = await AuthService.getJwks()
    try {
      AuthService.accessToken = token.access_token
      AuthService.idToken = token.id_token
    } catch (error) {
      console.error('Error validating token', error)
    }
  }

  static parseUrlHash(hash: string): TokenData {
    const hashKeyPairs = hash.match(/([^#&=]+)=([^#&]+)/g) ?? []
    return hashKeyPairs.reduce((result, match) => {
      const [key, value] = match.split('=')
      result[key] = value
      return result
    }, {} as { [key: string]: string}) as unknown as TokenData
  }
}

export default AuthService
