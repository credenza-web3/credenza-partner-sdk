import { getBasicToken } from '@/lib/credentials'
import { getSuiApiUrl } from '@/sui'
import { log } from '@/lib/logging'

export async function getSuiZkAddress(sub: string): Promise<{ address: string }> {
  const response = await fetch(`${getSuiApiUrl()}/accounts/zk/${sub}/address`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getSuiZkAddress.name, json)
  return json
}
