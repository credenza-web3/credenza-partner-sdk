import { log } from '@/lib/logging'
import { getGeneralApiUrl } from '@/api'
import { getBasicToken } from '@/lib/credentials'
import { TCreateRuleParams, TUpdateRuleParams, TRule } from './rules.types'
import { camelToSnakeCase, snakeToCamelCase } from '@/lib/obj'

export async function addPromoRule(params: TCreateRuleParams): Promise<TRule> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/rules`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(camelToSnakeCase(params)),
  })
  const json = await response.json()
  log(addPromoRule.name, json)
  return snakeToCamelCase(json) as TRule
}

export async function updatePromoRule(id: string, params: TUpdateRuleParams): Promise<TRule> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/rules/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(camelToSnakeCase(params)),
  })
  const json = await response.json()
  log(updatePromoRule.name, json)
  return snakeToCamelCase(json) as TRule
}

export async function removePromoRule(id: string): Promise<boolean> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/rules/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(removePromoRule.name, json)
  return response.ok
}

export async function getPromoRules(): Promise<TRule[]> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/rules`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getPromoRules.name, json)
  return snakeToCamelCase(json) as TRule[]
}
