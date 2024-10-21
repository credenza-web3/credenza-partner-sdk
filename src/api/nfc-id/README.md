# api/nfc-id

## USAGE

```
import { api } from '@credenza3/partner-sdk'

const result = await api.addNfcId({
  sub: string
  serialNumber: string
  text?: string
})

const result = await api.updateNfcId(sub: string, {
  serialNumber?: string
  text?: string
})

const result = await api.getNfcId(sub: string)

const result = await api.removeNfcId(sub: string)
```