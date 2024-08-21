import { getCredentials } from '@/lib/credentials'
import { io, Socket } from 'socket.io-client'

export async function connectToWs(url: string): Promise<Socket> {
  const credentials = getCredentials()
  const socket = io(url, {
    auth: {
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
    },
  })
  await new Promise((resolve, reject) => {
    socket.once('connect_error', (err) => reject(err))
    socket.once('connect', () => resolve(socket))
    setTimeout(() => reject(new Error('Cannot connect to websocket server')), 5000)
  })
  return socket
}
