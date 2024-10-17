import { getBasicToken } from '@/lib/credentials'
import { getOAuthApiUrl } from '@/accounts'
import { log } from '@/lib/logging'
import { toCamelCase } from '@/lib/obj'

import type { TOAuthAccountInfo } from './user.types'

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
