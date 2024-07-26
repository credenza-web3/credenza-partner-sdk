import { getSdkEnv, SDK_ENV } from '../lib/sdk-env'
import { getBasicToken } from '../lib/credentials'

export function getEvmApiUrl() {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'https://evm.credenza3.com'
    case SDK_ENV.STAGING:
      return 'https://evm.staging.credenza.com'
    case SDK_ENV.LOCAL:
      return 'http://localhost:8082'
  }
}

export async function getEvmAddress(sub: string): Promise<{address: string}> {
  const response = await fetch(`${getEvmApiUrl()}/accounts/${sub}/address`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    }
  })
  const json = await response.json()
  return json
}
