import { getWsConnection } from '@/api'
import { log } from '@/lib/logging'

export async function requestPassportIdSignature(sub: string, message: string): Promise<{ signature: string }> {
  if (!sub) throw new Error('"Sub is required"')
  if (!message) throw new Error('"Message is required"')

  const socket = await getWsConnection()
  return new Promise((resolve, reject) => {
    socket.once(`passport_id/signed/${sub}`, (data) => {
      log(requestPassportIdSignature.name, 'Received', data)
      resolve(data.payload)
    })
    socket.emit(
      'passport_id/request_signature',
      {
        payload: { sub, message },
      },
      (data) => {
        if (!data.payload.ok) {
          reject(new Error('Failed to sign message'))
        }
        if (data.error) {
          reject(new Error(data.error.message))
        }
        log(requestPassportIdSignature.name, 'Requested', data)
      },
    )
  })
}
