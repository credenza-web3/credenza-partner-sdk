export type TEvmContractRecord = {
  _id: string
  type: string
  name: string
  chain_id: number
  address: string
  tx_hash: string
  client_id: string
}

export type TDeployEvmContractData = {
  payload: {
    contract: TEvmContractRecord
    tx: {
      deployment: string
      trusted_forwarder: string
      add_owner: string
    }
  }
  error?: { message: string }
}

export type TSendMetaTxData = {
  payload: Record<string, unknown>
  error?: { message: string }
}
