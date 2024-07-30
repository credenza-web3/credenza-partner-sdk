import { setCredentials, TCredentials } from './lib/credentials'
import { setSdkEnv, TSdkEnv } from './lib/sdk-env'
import { enableSdkDebug } from './lib/logging'

export function useAuth(credentials: TCredentials): void {
  setCredentials(credentials)
}

export function useEnv(sdkEnv: TSdkEnv): void {
  setSdkEnv(sdkEnv)
}

export function debug(enableDebug: boolean) {
  enableSdkDebug(enableDebug)
}
