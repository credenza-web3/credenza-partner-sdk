import { getBasicToken } from '@/lib/credentials'
import { getOAuthApiUrl } from '@/accounts'
import { log } from '@/lib/logging'
import { toCamelCase } from '@/lib/obj'

import type { TOAuthAccountInfo, TGetAccountInfoByContactParams } from './user.types'

export async function getAccountInfo(sub: string): Promise<TOAuthAccountInfo> {
  const response = await fetch(`${getOAuthApiUrl()}/accounts/${sub}`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getAccountInfo.name, json)
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
  return toCamelCase(json) as TOAuthAccountInfo
}
