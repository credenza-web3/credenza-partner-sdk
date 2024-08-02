import { Buffer } from 'buffer'

import { TCredentials } from './credentials.types'

let credentials: TCredentials = null

export function setCredentials(credentialsInput: TCredentials): void {
  if (!credentialsInput.clientId) throw new Error('"clientId" is required')
  if (!credentialsInput.clientSecret) throw new Error('"clientSecret" is required')
  credentials = credentialsInput
}

export function getCredentials(): TCredentials {
  if (!credentials?.clientId || !credentials?.clientSecret) throw new Error('Credentials are not set')
  return credentials
}

export function getBasicToken(): string {
  const { clientId, clientSecret } = getCredentials()
  const basicCredentials = `${clientId}:${clientSecret}`
  return `Basic ${Buffer.from(basicCredentials).toString('base64')}`
}
