import { getSdkEnv, SDK_ENV } from '@/lib/sdk-env'

export function getOAuthApiUrl() {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'https://accounts.credenza3.com'
    case SDK_ENV.STAGING:
      return 'https://accounts.staging.credenza3.com'
    case SDK_ENV.LOCAL:
      return 'http://localhost:8081'
  }
}
