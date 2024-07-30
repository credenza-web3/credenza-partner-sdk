import { SDK_ENV } from './sdk-env.constants'
import { TSdkEnv } from './sdk-env.types'

let sdkEnv: TSdkEnv = SDK_ENV.PROD
export function getSdkEnv(): TSdkEnv {
  return sdkEnv
}

export function setSdkEnv(sdkEnvironment: TSdkEnv): void {
  sdkEnv = sdkEnvironment
}
