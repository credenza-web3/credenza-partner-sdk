# @credenza3/partner-sdk/api/promo/offers

## USAGE

```
import { 
  addPromoOffer, 
  updatePromoOffer, 
  removePromoOffer, 
  getPromoOffers,
  checkPromoOffer,
  getPromoOfferRss
} from '@credenza3/partner-sdk/api/promo/offers'

const result = await addPromoOffer({
  title: string
  description: string
  includeRules: string[]
  excludeRules: string[]
  code: string
})

const result = await updatePromoOffer(id: string, {
  title?: string
  description?: string
  includeRules?: string[]
  excludeRules?: string[]
  code?: string
})

const result = await getPromoOffers(id: string)

const result = await checkPromoOffer(id: string, sub: string)

const result = await getPromoOfferRss({
  suiAddress?: string,
  evmAddress?: string
})

const result = await removePromoOffer(id: string)
```