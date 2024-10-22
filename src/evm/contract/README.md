# evm/contract

## USAGE

```
import { 
  evm
} from '@credenza3/partner-sdk'

const arr = await evm.contract.getAvailableEvmContracts()

const result = await evm.contract.deployEvmContract(name: string, chainId: number, ownerAddresses: string[])

const arr = await evm.contract.findEvmContracts({
  name?: string
  type?: string
  chainId?: string
})

const tx = await evm.contract.sendEvmMetaTransaction(unsignedSerializedMetaTx: string, senderAddress: string)

```