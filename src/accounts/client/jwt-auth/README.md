# @credenza3/partner-sdk/accounts/client/jwt-auth

## USAGE

```
import { 
  addJwtValidator, 
  updateJwtValidator, 
  removeJwtValidator, 
  getJwtValidators
} from '@credenza3/partner-sdk/accounts/client/jwt-auth'

const result = await addJwtValidator({
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