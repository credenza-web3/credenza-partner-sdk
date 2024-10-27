import { getGeneralApiUrl } from '@/api'
import { getBasicToken } from '@/lib/credentials'
import { log } from '@/lib/logging'

export async function uploadFile(file: File): Promise<{
  location: string
  bucket: string
  key: string
}> {
  const formData = new FormData()
  formData.append('file', file, file.name)
  const response = await fetch(`${getGeneralApiUrl()}/files/upload`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      Accept: '*/*',
    },
    body: formData,
  })
  const json = await response.json()
  log(uploadFile.name, json)
  return json
}
