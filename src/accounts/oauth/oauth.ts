import { getBasicToken } from '@/lib/credentials'
import { getOAuthApiUrl } from '@/accounts'
import { log } from '@/lib/logging'
import { toCamelCase } from '@/lib/obj'

import type { TTokenResponse, TExchangeTokenParams } from './oauth.types'

export async function exchangeCodeForToken(params: TExchangeTokenParams): Promise<TTokenResponse> {
  const response = await fetch(`${getOAuthApiUrl()}/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: params.code,
      code_verifier: params.codeVerifier,
      redirect_uri: params.redirectUri || 'none',
    }),
  })
  const json = await response.json()
  log(exchangeCodeForToken.name, json)
  return toCamelCase(json) as TTokenResponse
}

export async function refreshToken(refreshTokenValue: string): Promise<TTokenResponse> {
  const response = await fetch(`${getOAuthApiUrl()}/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshTokenValue,
    }),
  })
  const json = await response.json()
  log(refreshToken.name, json)
  return toCamelCase(json) as TTokenResponse
}
