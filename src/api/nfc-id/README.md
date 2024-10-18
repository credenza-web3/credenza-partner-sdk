# @credenza3/partner-sdk/api/nfc-id

## USAGE

```
import { addNfcId, removeNfcId, updateNfcId, getNfcId } from '@credenza3/partner-sdk/api/nfc-id'

const result = await addNfcId({
  sub: string
  serialNumber: string
  text?: string
})

const result = await updateNfcId(sub: string, {
  serialNumber?: string
  text?: string
})

const result = await getNfcId(sub: string)

const result = await removeNfcId(sub: string)
```