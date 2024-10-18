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
  profileFieldsMapping?: {
    email?: string
    phone?: string
    picture?: string
    name?: string[]
  }
}

export type TJwtAuthValidatorParams = TJwtAuthUpdateValidatorParams & {
  validationFields: string[]
}

export type TJwtAuthValidator = TJwtAuthValidatorParams & {
  id: string
  clientId: string
}
