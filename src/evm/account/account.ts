import { getBasicToken } from '@/lib/credentials'
import { getEvmApiUrl } from '@/evm'
import { log } from '@/lib/logging'

export async function getEvmAddress(sub: string): Promise<{ address: string }> {
  const response = await fetch(`${getEvmApiUrl()}/accounts/${sub}/address`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getEvmAddress.name, json)
  return json
}
