import { log } from '@/lib/logging'
import { getOAuthApiUrl } from '@/accounts'
import { getBasicToken } from '@/lib/credentials'
import { toCamelCase, toSnakeCase } from '@/lib/obj'
import type { TJwtAuthValidator, TJwtAuthValidatorParams, TJwtAuthUpdateValidatorParams } from './jwt-auth.types'

export async function addJwtValidator(params: TJwtAuthValidatorParams): Promise<TJwtAuthValidator> {
  const response = await fetch(`${getOAuthApiUrl()}/clients/jwt-auth`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toSnakeCase(params)),
  })
  const json = await response.json()
  log(addJwtValidator.name, json)
  return toCamelCase(json) as TJwtAuthValidator
}

export async function updateJwtValidator(
  id: string,
  params: TJwtAuthUpdateValidatorParams,
): Promise<TJwtAuthValidator> {
  const response = await fetch(`${getOAuthApiUrl()}/clients/jwt-auth/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toSnakeCase(params)),
  })
  const json = await response.json()
  log(updateJwtValidator.name, json)
  return toCamelCase(json) as TJwtAuthValidator
}

export async function removeJwtValidator(id: string): Promise<boolean> {
  const response = await fetch(`${getOAuthApiUrl()}/clients/jwt-auth/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(removeJwtValidator.name, json)
  return json
}

export async function getJwtValidators(): Promise<TJwtAuthValidator[]> {
  const response = await fetch(`${getOAuthApiUrl()}/clients/jwt-auth`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getJwtValidators.name, json)
  return toCamelCase(json) as TJwtAuthValidator[]
}
