export type TUpdateOfferParams = {
  title?: string
  description?: string
  includeRules?: string[]
  excludeRules?: string[]
  code?: string
}

export type TCreateOfferParams = Required<TUpdateOfferParams>

export type TOffer = TCreateOfferParams & {
  id: string
  clientId: string
}

export type TOfferRss = {
  code: string
  offerId: string
  rss: {
    title: string
    description: string
    link: string
    imageLink: string
    pubDate: string
    offerId: string
  }[]
}
