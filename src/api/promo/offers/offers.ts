import { log } from '@/lib/logging'
import { getGeneralApiUrl } from '@/api'
import { getBasicToken } from '@/lib/credentials'
import { TCreateOfferParams, TUpdateOfferParams, TOffer, TOfferRss } from './offers.types'
import { toCamelCase, toSnakeCase } from '@/lib/obj'

export async function addPromoOffer(params: TCreateOfferParams): Promise<TOffer> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/offers`, {
    method: 'POST',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toSnakeCase(params)),
  })
  const json = await response.json()
  log(addPromoOffer.name, json)
  return toCamelCase(json) as TOffer
}

export async function updatePromoOffer(id: string, params: TUpdateOfferParams): Promise<TOffer> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/offers/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toSnakeCase(params)),
  })
  const json = await response.json()
  log(updatePromoOffer.name, json)
  return toCamelCase(json) as TOffer
}

export async function removePromoOffer(id: string): Promise<boolean> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/offers/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(removePromoOffer.name, json)
  return response.ok
}

export async function getPromoOffers(): Promise<TOffer[]> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/offers`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(getPromoOffers.name, json)
  return toCamelCase(json) as TOffer[]
}

export async function checkPromoOffer(id: string, sub: string): Promise<boolean> {
  const response = await fetch(`${getGeneralApiUrl()}/promo/offers/${id}/check?sub=${sub}`, {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  log(checkPromoOffer.name, json)
  return json
}

export async function getPromoOfferRss(params: { suiAddress?: string; evmAddress?: string }): Promise<TOfferRss[]> {
  const url = new URL(`${getGeneralApiUrl()}/promo/offers/rss`)
  if (params?.suiAddress) {
    url.searchParams.append('sui_address', params.suiAddress)
  } else if (params?.evmAddress) {
    url.searchParams.append('evm_address', params.evmAddress)
    throw new Error('Currently not supported for EVM') // Remove when implemented
  }

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: getBasicToken(),
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  console.log(json)
  log(getPromoOfferRss.name, json)
  return toCamelCase(json) as TOfferRss[]
}
