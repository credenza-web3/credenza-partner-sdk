import { getSdkEnv, SDK_ENV } from '@/lib/sdk-env'
import { io, Socket } from 'socket.io-client'
import { getCredentials } from '@/lib/credentials'

let socket: Socket

export function getGeneralApiUrl(): string {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'https://api.credenza3.com'
    case SDK_ENV.STAGING:
      return 'https://api.staging.credenza.com'
    case SDK_ENV.LOCAL:
      return 'http://localhost:8084'
  }
}

export function getGeneralWsUrl(): string {
  switch (getSdkEnv()) {
    case SDK_ENV.PROD:
      return 'wss://api.credenza3.com'
    case SDK_ENV.STAGING:
      return 'wss://api.staging.credenza.com'
    case SDK_ENV.LOCAL:
      return 'ws://localhost:8084'
  }
}
export async function getWsConnection(): Promise<Socket> {
  const credentials = getCredentials()
  if (!socket?.connected) {
    socket = io(getGeneralWsUrl(), {
      auth: {
        client_id: credentials.clientId,
        client_secret: credentials.clientSecret,
      },
    })
    await new Promise((resolve, reject) => {
      socket.once('connect', () => resolve(socket))
      setTimeout(() => reject(new Error('Cannot connect to websocket server')), 5000)
    })
  }
  return socket
}
