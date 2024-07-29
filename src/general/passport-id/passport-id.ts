import { getWsConnection } from '@/general'

export async function requestPassportIdSignature(sub: string) {
  const socket = await getWsConnection()
  return new Promise((resolve, reject) => {
    socket.once(`passport_id/signed/${sub}`, (data) =>
      resolve(data)
    )
    socket.emit('passport_id/request_signature', {
      payload: { sub }
    }, (data) => {
      if (data.error) {
        reject(new Error(data.error.message))
      }
    })
  })
}