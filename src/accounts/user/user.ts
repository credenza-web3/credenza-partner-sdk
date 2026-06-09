import { getBasicToken } from '@/lib/credentials'
import { getOAuthApiUrl } from '@/accounts'
import { log } from '@/lib/logging'
import { toCamelCase } from '@/lib/obj'

import type { TOAuthAccountInfo, TGetAccountInfoByContactParams } from './user.types'

export async function setAccountClientMetadata(
  sub: string,
  metadata: Record<string, unknown>,
): Promise<TOAuthAccountInfo> {
  const response = await fetch(`${getOAuthApiUrl()}/accounts/${sub}`, {
    method: 'PATCH',
    body: JSON.stringify({ client_metadata: metadata }),
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getAccountInfo.name, json)
  if (!response.ok) throw new Error(json.message)
  return toCamelCase(json) as TOAuthAccountInfo
}

export async function getAccountInfo(sub: string): Promise<TOAuthAccountInfo> {
  const response = await fetch(`${getOAuthApiUrl()}/accounts/${sub}`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getAccountInfo.name, json)
  if (!response.ok) throw new Error(json.message)
  return toCamelCase(json) as TOAuthAccountInfo
}

export async function getAccountInfoByContact(args: TGetAccountInfoByContactParams): Promise<TOAuthAccountInfo> {
  const url = new URL(`${getOAuthApiUrl()}/accounts/info`)
  if (args.email) url.searchParams.set('email', args.email)
  if (args.phone) url.searchParams.set('phone', args.phone)
  const response = await fetch(url.toString(), {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getAccountInfoByContact.name, json)
  if (!response.ok) throw new Error(json.message)
  return toCamelCase(json) as TOAuthAccountInfo
}
