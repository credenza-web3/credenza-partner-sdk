import { getBasicToken } from '../../lib/credentials'
import { getSuiApiUrl } from '../sui'

export async function getSuiZkAddress(sub: string): Promise<{ address: string }> {
  const response = await fetch(`${getSuiApiUrl()}/accounts/zk/${sub}/address`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  return json
}
