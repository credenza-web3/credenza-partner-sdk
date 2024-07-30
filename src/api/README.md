# @credenza3/partner-sdk/api

## USAGE

#### PassportId

```
import { requestPassportIdSignature } from '@credenza3/partner-sdk/api'

const { signature } = await requestPassportIdSignature(sub: string, message: string)
```

#### NfcId

```
import { addNfcId, removeNfcId, updateNfcId, getNfcId } from '@credenza3/partner-sdk/api'

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
