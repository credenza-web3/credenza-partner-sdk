# @credenza3/partner-sdk/evm

## USAGE

#### Account

```
import { getEvmAddress } from '@credenza3/partner-sdk/evm'

const { address } = await getEvmAddress(sub: string)
```

#### Contract

```
import { 
  getAvailableEvmContracts,
  findEvmContracts,
  deployEvmContract
} from '@credenza3/partner-sdk/evm'

const arr = await getAvailableEvmContracts()

const result = await deployEvmContract(name: string, chainId: number, ownerAddresses: string[])

const arr = await findEvmContracts({
  name?: string
  type?: string
  chainId?: string
})

```