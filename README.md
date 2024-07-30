# @credenza3/partner-sdk

## USAGE

```
npm install @credenza3/partner-sdk
```

```
import { useAuth, useEnv } from '@credenza3/partner-sdk'

useEnv('prod' | 'staging' | 'local') // 'prod'

useAuth({
  clientId: string,
  clientSecret: string,
})
```

## MODULES

[common](./src/common/README.md)

[evm](./src/evm/README.md)

[sui](./src/sui/README.md)

[sui/zk](./src/sui/zk/README.md)

