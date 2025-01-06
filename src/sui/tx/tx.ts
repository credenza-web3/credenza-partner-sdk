import { Buffer } from 'buffer'
import { getBasicToken } from '@/lib/credentials'
import { getSuiApiUrl } from '@/sui'
import { log } from '@/lib/logging'

export async function signSponsoredTransaction(txBytes: Uint8Array): Promise<{
  signature: string[]
  bytes: string
}> {
  const response = await fetch(`${getSuiApiUrl()}/accounts/sign/sponsored/client`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      param: Buffer.from(txBytes).toString('base64'),
    }),
  })
  const json = await response.json()
  if (!Array.isArray(json.signature)) {
    json.signature = [json.signature]
  }
  log(signSponsoredTransaction.name, json)
  return json
}
