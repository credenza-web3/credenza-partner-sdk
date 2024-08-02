import { getSdkEnv, SDK_ENV } from '@/lib/sdk-env'

export function getEvmApiUrl() {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'https://evm.credenza3.com'
    case SDK_ENV.STAGING:
      return 'https://evm.staging.credenza3.com'
    case SDK_ENV.LOCAL:
      return 'http://localhost:8082'
  }
}
