# @credenza3/partner-sdk/api/promo/rules

## USAGE

```
import { 
  addPromoRule, 
  updatePromoRule, 
  removePromoRule, 
  getPromoRules,
} from '@credenza3/partner-sdk/api/promo/rules'

const result = await addPromoRule({
  title: string
  description: string
  resourceId: string
  chainType: string
  chainId: number
  type: string
  value: unknown
})

const result = await updatePromoRule(id: string, {
  title?: string
  description?: string
  resourceId?: string
  chainType?: string
  chainId?: number
  type?: string
  value?: unknown
})

const result = await getPromoRules(id: string)

const result = await removePromoRule(id: string)
```