export type TJwtAuthUpdateValidatorParams = {
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
  profile_fields_mapping?: {
    email?: string
    phone?: string
    picture?: string
    name?: string[]
  }
}

export type TJwtAuthValidatorParams = TJwtAuthUpdateValidatorParams & {
  validationFields: string[]
  userinfoRequestConfig?: {
    method: string
    url: string
    contentType: string
    tokenParamName: string
    tokenParamKind: string
    tokenParamMask?: string
  }
}

export type TJwtAuthValidator = TJwtAuthValidatorParams & {
  id: string
  clientId: string
}
