import { getBasicToken } from '@/lib/credentials'
import { getOAuthApiUrl } from '@/accounts'
import { log } from '@/lib/logging'

export async function getCurrentClientInfo(): Promise<{
  id: string
  name: string
  callbackUris: string[]
  confidential: boolean
  ownerId: string
  accessTokenTTLMinutes: number
  availableLoginTypes: string[]
  admins: string[]
  apiPermissions: string[]
  logoUri?: string
}> {
  const response = await fetch(`${getOAuthApiUrl()}/clients/current`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getCurrentClientInfo.name, json)
  return {
    id: json._id,
    name: json.name,
    callbackUris: json.callback_uris,
    confidential: json.confidential,
    ownerId: json.owner_id,
    accessTokenTTLMinutes: json.access_token_ttl_minutes,
    availableLoginTypes: json.available_login_types,
    admins: json.admins,
    apiPermissions: json.api_permissions,
    logoUri: json.logo_uri ?? null,
  }
}
