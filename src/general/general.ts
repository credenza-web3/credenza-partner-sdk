import { getSdkEnv, SDK_ENV } from '@/lib/sdk-env'

export function getGeneralApiUrl() {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'https://api.credenza3.com'
    case SDK_ENV.STAGING:
      return 'https://api.staging.credenza.com'
    case SDK_ENV.LOCAL:
      return 'http://localhost:8084'
  }
}
