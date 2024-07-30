import { getBasicToken } from '@/lib/credentials'
import { getSuiApiUrl } from '@/sui'
import { log } from '@/lib/logging'

export async function getSuiAddress(sub: string): Promise<{ address: string }> {
  const response = await fetch(`${getSuiApiUrl()}/accounts/${sub}/address`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getSuiAddress.name, json)
  return json
}
