# api/promo/offers

## USAGE

```
import { 
  api
} from '@credenza3/partner-sdk'

const result = await api.promo.offers.addPromoOffer({
  title: string
  description: string
  includeRules: string[]
  excludeRules: string[]
  code: string
})

const result = await api.promo.offers.updatePromoOffer(id: string, {
  title?: string
  description?: string
  includeRules?: string[]
  excludeRules?: string[]
  code?: string
})

const result = await api.promo.offers.getPromoOffers(id: string)

const result = await api.promo.offers.checkPromoOffer(id: string, sub: string)

const result = await api.promo.offers.getPromoOfferRss({
  suiAddress?: string,
  evmAddress?: string
})

const result = await api.promo.offers.removePromoOffer(id: string)
```