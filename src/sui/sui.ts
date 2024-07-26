import { getSdkEnv, SDK_ENV } from '../lib/sdk-env'
import { getBasicToken } from '../lib/credentials'

export function getSuiApiUrl() {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'https://sui.credenza3.com'
    case SDK_ENV.STAGING:
      return 'https://sui.staging.credenza.com'
    case SDK_ENV.LOCAL:
      return 'http://localhost:8083'
  }
}

export async function getSuiAddress(sub: string): Promise<{address: string}> {
  const response = await fetch(`${getSuiApiUrl()}/accounts/${sub}/address`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    }
  })
  const json = await response.json()
  return json
}