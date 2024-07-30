import { getSdkEnv, SDK_ENV } from '@/lib/sdk-env'
import { getBasicToken } from '@/lib/credentials'

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
