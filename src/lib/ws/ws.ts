import { getCredentials, TCredentials } from '@/lib/credentials'
import { io, Socket } from 'socket.io-client'

let socketPromise: Promise<{ socket: Socket; auth: TCredentials }> | null = null

export async function disconnectWs() {
  if (!socketPromise) return
  const { socket } = await socketPromise
  socket?.disconnect()
  socketPromise = null
}
export async function connectToWs(url: string): Promise<Socket> {
  const credentials = getCredentials()

  if (!socketPromise) {
    socketPromise = new Promise((resolve, reject) => {
      const socket = io(url, {
        auth: {
          client_id: credentials.clientId,
          client_secret: credentials.clientSecret,
        },
      })
      socket.once('connect_error', (err) => reject(err))
      socket.once('connect', () => resolve({ socket, auth: credentials }))
      setTimeout(() => reject(new Error('Cannot connect to websocket server')), 5000)
    })
  }

  const { socket, auth } = await socketPromise
  if (!socket?.connected || auth.clientId !== credentials.clientId || auth.clientSecret !== credentials.clientSecret) {
    await disconnectWs()
    return connectToWs(url)
  }

  return socket
}
