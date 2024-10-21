import { setCredentials, TCredentials } from './lib/credentials'
import { setSdkEnv, TSdkEnv } from './lib/sdk-env'
import { enableSdkDebug } from './lib/logging'

export function useAuth(credentials: TCredentials): void {
  setCredentials(credentials)
}

export function useEnv(sdkEnv: TSdkEnv): void {
  setSdkEnv(sdkEnv)
}

export function useDebug(enableDebug: boolean) {
  enableSdkDebug(enableDebug)
}

export * as accounts from './accounts'
export * as api from './api'
export * as evm from './evm'
export * as sui from './sui'
