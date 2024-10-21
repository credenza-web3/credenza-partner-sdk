# accounts/oauth

## USAGE

```
import { accounts } from '@credenza3/partner-sdk'

const result = await accounts.oauth.exchangeCodeForToken({
  code: string,
  codeVerifier: string,
  redirectUri: string | null,
})

const result = await accounts.oauth.refreshToken(refreshTokenValue: string)
```