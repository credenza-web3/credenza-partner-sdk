import { setCredentials, TCredentials } from './lib/credentials'
import { setSdkEnv, TSdkEnv } from './lib/sdk-env'

export function auth(credentials: TCredentials): void {
  setCredentials(credentials)
}

export function useEnv(sdkEnv: TSdkEnv): void {
  setSdkEnv(sdkEnv)
}