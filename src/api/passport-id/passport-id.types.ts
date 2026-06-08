export type TPassportIdSignedData = {
  payload: { signature: string }
}

export type TPassportIdRequestData = {
  payload: { ok: boolean }
  error?: { message: string }
}
