import { getBasicToken } from '@/lib/credentials'
import { getEvmApiUrl } from '@/evm'
import { log } from '@/lib/logging'
import { getWsConnection } from '@/evm'

export async function getAvailableEvmContracts(): Promise<string[]> {
  const response = await fetch(`${getEvmApiUrl()}/contracts/available`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getAvailableEvmContracts.name, json)
  if (!response.ok) throw new Error(json.message)
  return json
}

export async function findEvmContracts(
  params: { name?: string; type?: string; chain_id?: number } = {},
): Promise<string[]> {
  const url = new URL(`${getEvmApiUrl()}/contracts`)
  for (const [key, val] of Object.entries(params)) {
    url.searchParams.append(key, String(val))
  }
  const response = await fetch(url.toString(), {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(findEvmContracts.name, json)
  if (!response.ok) throw new Error(json.message)
  return json.map((contract) => {
    return {
      id: contract._id,
      type: contract.type,
      name: contract.name,
      chainId: contract.chain_id,
      address: contract.address,
      txHash: contract.tx_hash,
      clientId: contract.client_id,
    }
  })
}

export async function deployEvmContract(name: string, chainId: number, ownerAddresses: string[]) {
  if (!name) throw new Error('"name is required"')
  if (!chainId) throw new Error('"chainId" is required')
  if (ownerAddresses?.length === 0) throw new Error('"ownerAddresses" can not be empty')

  const socket = await getWsConnection()
  return new Promise((resolve, reject) => {
    socket.emit(
      'contracts/deploy',
      {
        payload: { name, chain_id: chainId, owner_addresses: ownerAddresses },
      },
      (data) => {
        if (data.error) {
          return reject(new Error(data.error.message))
        }
        log(deployEvmContract.name, `${name} contract deployed`, data)
        resolve({
          id: data.payload.contract._id,
          type: data.payload.contract.type,
          name: data.payload.contract.name,
          chainId,
          address: data.payload.contract.address,
          tx: {
            deployment: data.payload.tx.deployment,
            trustedForwarder: data.payload.tx.trusted_forwarder,
            addOwner: data.payload.tx.add_owner,
          },
        })
      },
    )
  })
}

export async function sendEvmMetaTransaction(unsignedSerializedMetaTx: string, accountAddress: string) {
  const socket = await getWsConnection()
  return new Promise((resolve, reject) => {
    socket.emit(
      'contracts/forward_transaction/client',
      {
        payload: {
          account_address: accountAddress,
          unsigned_serialized_meta_tx: unsignedSerializedMetaTx,
        },
      },
      (data) => {
        if (data.error) {
          return reject(new Error(data.error.message))
        }
        log(sendEvmMetaTransaction.name, `meta tx sent`, data)
        resolve(data.payload)
      },
    )
  })
}
