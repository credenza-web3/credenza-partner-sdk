import { getSdkEnv, SDK_ENV } from '@/lib/sdk-env'
import { Socket } from 'socket.io-client'
import { connectToWs } from '@/lib/ws'

let socket: Socket

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

export function getGeneralWsUrl(): string {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'wss://evm-prod-prod.up.railway.app'
    case SDK_ENV.STAGING:
      return 'wss://evm-staging-staging.up.railway.app'
    case SDK_ENV.LOCAL:
      return 'ws://localhost:8082'
  }
}
export async function getWsConnection(): Promise<Socket> {
  if (!socket?.connected) {
    socket = await connectToWs(getGeneralWsUrl())
  }
  return socket
}
