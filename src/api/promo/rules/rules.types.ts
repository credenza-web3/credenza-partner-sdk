export type TUpdateRuleParams = {
  title: string
  description: string
  resourceId: string
  chainType: string
  chainId: number
  type: string
  value: unknown
}

export type TCreateRuleParams = Required<TUpdateRuleParams>

export type TRule = TCreateRuleParams & {
  id: string
  clientId: string
}
