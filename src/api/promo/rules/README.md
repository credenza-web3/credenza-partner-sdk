# api/promo/rules

## USAGE

```
import { 
  api
} from '@credenza3/partner-sdk'

const result = await api.promo.rules.addPromoRule({
  title: string
  description: string
  resourceId: string
  chainType: string
  chainId: number
  type: string
  value: unknown
})

const result = await api.promo.rules.updatePromoRule(id: string, {
  title?: string
  description?: string
  resourceId?: string
  chainType?: string
  chainId?: number
  type?: string
  value?: unknown
})

const result = await api.promo.rules.getPromoRules(id: string)

const result = await api.promo.rules.removePromoRule(id: string)
```