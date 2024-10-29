import { getCredentials, TCredentials } from '@/lib/credentials'
import { io, Socket } from 'socket.io-client'

const socketPromises = new Map<string, Promise<{ socket: Socket; auth: TCredentials }>>()

export async function disconnectWs(url: string = null) {
  const socketUrls = url ? [url] : Array.from(socketPromises.keys())
  for (const url of socketUrls) {
    if (!socketPromises.has(url)) continue
    const { socket } = await socketPromises.get(url)
    socket?.disconnect()
    socketPromises.delete(url)
  }
}
export async function connectToWs(url: string): Promise<Socket> {
  const credentials = getCredentials()

  if (!socketPromises.has(url)) {
    const promise = new Promise<{ socket: Socket; auth: TCredentials }>((resolve, reject) => {
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
    socketPromises.set(url, promise)
  }

  const { socket, auth } = await socketPromises.get(url)
  if (!socket?.connected || auth.clientId !== credentials.clientId || auth.clientSecret !== credentials.clientSecret) {
    await disconnectWs(url)
    return connectToWs(url)
  }

  return socket
}
