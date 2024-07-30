export type TNfcId = {
  sub: string
  serialNumber: string
  text?: string
}

export type TUpdateNfcId = {
  sub?: string
  text?: string
}
