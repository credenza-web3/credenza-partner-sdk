export type TExchangeTokenParams = {
  code: string
  codeVerifier: string
  redirectUri: string | null
}

export type TTokenResponse = {
  accessToken: string
  idToken?: string | null
  refreshToken?: string | null
}
