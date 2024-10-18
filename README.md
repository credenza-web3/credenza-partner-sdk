# @credenza3/partner-sdk

## USAGE

```
npm install @credenza3/partner-sdk
```

```
import { useAuth, useEnv } from '@credenza3/partner-sdk'

debug(true) // Defaults to false

useEnv('prod' | 'staging' | 'local') // Defaults to 'prod'

useAuth({
  clientId: string,
  clientSecret: string,
})
```

## MODULES

[api](./src/api/README.md)

[accounts](./src/accounts/README.md)

[evm](./src/evm/README.md)

[sui](./src/sui/README.md)
