import { log } from '@/lib/logging'
import { getGeneralApiUrl } from '@/api'
import { getBasicToken } from '@/lib/credentials'
import { TNfcId, TUpdateNfcId } from './nfc-id.types'

export async function addNfcId(params: TNfcId): Promise<TNfcId> {
  const response = await fetch(`${getGeneralApiUrl()}/nfc-id`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      serial_number: params.serialNumber,
      sub: params.sub,
      ...(params.text ? { text: params.text } : {}),
    }),
  })
  const json = await response.json()
  log(addNfcId.name, json)
  return {
    sub: json.sub,
    serialNumber: json.serial_number,
    text: json.text ?? null,
  }
}

export async function updateNfcId(serialNumber: string, params: TUpdateNfcId): Promise<boolean> {
  const response = await fetch(`${getGeneralApiUrl()}/nfc-id/${serialNumber}`, {
    method: 'PATCH',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...(params.text ? { text: params.text } : {}),
      ...(params.sub ? { sub: params.sub } : {}),
    }),
  })
  const json = await response.json()
  log(updateNfcId.name, json)
  return json
}

export async function removeNfcId(serialNumber: string): Promise<boolean> {
  const response = await fetch(`${getGeneralApiUrl()}/nfc-id/${serialNumber}`, {
    method: 'DELETE',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(removeNfcId.name, json)
  return json
}

export async function getNfcId(serialNumber: string): Promise<Omit<TNfcId, 'serialNumber'>> {
  const response = await fetch(`${getGeneralApiUrl()}/nfc-id/${serialNumber}`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getNfcId.name, json)
  return { sub: json.sub, text: json.text ?? null }
}
