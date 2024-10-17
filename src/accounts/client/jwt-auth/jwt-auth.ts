import { log } from '@/lib/logging'
import { getGeneralApiUrl } from '@/api'
import { getBasicToken } from '@/lib/credentials'
import { TJwtAuthValidator, TJwtAuthValidatorParams, TJwtAuthUpdateValidatorParams } from './jwt-auth.types'
import { camelToSnakeCase, snakeToCamelCase } from '@/lib/obj'

export async function addJwtValidator(params: TJwtAuthValidatorParams): Promise<TJwtAuthValidator> {
  const response = await fetch(`${getGeneralApiUrl()}/clients/jwt-auth`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(camelToSnakeCase(params)),
  })
  const json = await response.json()
  log(addJwtValidator.name, json)
  return snakeToCamelCase(json) as TJwtAuthValidator
}

export async function updateJwtValidator(
  id: string,
  params: TJwtAuthUpdateValidatorParams,
): Promise<TJwtAuthValidator> {
  const response = await fetch(`${getGeneralApiUrl()}/clients/jwt-auth/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(camelToSnakeCase(params)),
  })
  const json = await response.json()
  log(updateJwtValidator.name, json)
  return snakeToCamelCase(json) as TJwtAuthValidator
}

export async function removeJwtValidator(id: string): Promise<boolean> {
  const response = await fetch(`${getGeneralApiUrl()}/clients/jwt-auth/${id}`, {
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
  const response = await fetch(`${getGeneralApiUrl()}/clients/jwt-auth`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getJwtValidators.name, json)
  return snakeToCamelCase(json) as TJwtAuthValidator[]
}
