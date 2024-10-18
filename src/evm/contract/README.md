# @credenza3/partner-sdk/evm/contract

## USAGE

```
import { 
  getAvailableEvmContracts,
  findEvmContracts,
  deployEvmContract,
  sendEvmMetaTransaction
} from '@credenza3/partner-sdk/evm'

const arr = await getAvailableEvmContracts()

const result = await deployEvmContract(name: string, chainId: number, ownerAddresses: string[])

const arr = await findEvmContracts({
  name?: string
  type?: string
  chainId?: string
})

const tx = await sendEvmMetaTransaction(unsignedSerializedMetaTx: string)

```