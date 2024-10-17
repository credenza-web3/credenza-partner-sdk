import { createHash } from 'crypto'
import { getOAuthApiUrl } from '@/accounts'
import { getBasicToken } from '@/lib/credentials'
import { addJwtValidator, removeJwtValidator } from '@/accounts/client/jwt-auth'

import { exchangeCodeForToken, refreshToken } from './'

const codeVerifier = 'crd-partner-sdk'

let authCode: string
let refreshTokenValue: string

beforeAll(async () => {
  const authResponse = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhJaZtjSw6EVvhr2Vr3dZ8QJJq-P27UkE`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@test.com',
        password: 'securepwd',
        returnSecureToken: true,
      }),
    },
  )
  const idToken = (await authResponse.json()).idToken
  expect(idToken).toBeTruthy()

  const validator = await addJwtValidator({
    validationFields: ['sub', 'aud', 'iss'],
    jwksUrl: 'https://www.googleapis.com/service_accounts/v1/metadata/x509/securetoken@system.gserviceaccount.com',
  })
  expect(validator.id).toBeDefined()

  const codeChallenge = createHash('sha256')
    .update(codeVerifier)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  const url = new URL(`${getOAuthApiUrl()}/oauth2/authorize/jwt`)
  url.searchParams.append('client_id', process.env.CLIENT_ID)
  url.searchParams.append('response_type', 'code')
  url.searchParams.append('scope', 'openid profile offline.access')
  url.searchParams.append('state', 'state')
  url.searchParams.append('nonce', 'nonce')
  url.searchParams.append('redirect_uri', 'none')
  url.searchParams.append('code_challenge', codeChallenge)
  url.searchParams.append('code_challenge_method', 'S256')

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      validator_id: validator.id,
      id_token: idToken,
    }),
  })
  const json = await response.json()
  authCode = json.code
  expect(json.code).toBeTruthy()

  await removeJwtValidator(validator.id)
})

test('Exchanges Auth code for token', async () => {
  const result = await exchangeCodeForToken({
    code: authCode,
    codeVerifier,
    redirectUri: null,
  })
  expect(result.idToken).toBeTruthy()
  expect(result.refreshToken).toBeTruthy()
  expect(result.accessToken).toBeTruthy()
  refreshTokenValue = result.refreshToken
})

test('Exchanges Refresh token', async () => {
  const result = await refreshToken(refreshTokenValue)
  expect(result.idToken).toBeTruthy()
  expect(result.refreshToken).toBeTruthy()
  expect(result.accessToken).toBeTruthy()
})
