# accounts/client/jwt-auth

## USAGE

```
import { accounts } from '@credenza3/partner-sdk'

const result = await accounts.client.jwtAuth.addJwtValidator({
  validationFields: string[]
  jwksUrl?: string
  userinfoRequestConfig?: {
    method?: string
    url?: string
    contentType?: string
    tokenParamName?: string
    tokenParamKind?: string
    tokenParamMask?: string
  }
  profileFieldsMapping?: {
    email?: string
    phone?: string
    picture?: string
    name?: string[]
  }
})

const result = await updateJwtValidator(id: string, {
  validationFields?: string[]
  jwksUrl?: string
  userinfoRequestConfig?: {
    method?: string
    url?: string
    contentType?: string
    tokenParamName?: string
    tokenParamKind?: string
    tokenParamMask?: string
  }
  profileFieldsMapping?: {
    email?: string
    phone?: string
    picture?: string
    name?: string[]
  }
})

const result = await getJwtValidators(id: string)

const result = await removeJwtValidator(id: string)
```