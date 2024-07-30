import { getBasicToken } from '@/lib/credentials'
import { getOAuthApiUrl } from '@/accounts'
import { log } from '@/lib/logging'

export async function getAccountInfo(sub: string): Promise<{
  id: string
  name: string
  login_type: string
  picture?: string
  email?: string
  phone?: string
}> {
  const response = await fetch(`${getOAuthApiUrl()}/accounts/${sub}`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getAccountInfo.name, json)
  return json
}
