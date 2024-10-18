# @credenza3/partner-sdk/accounts/oauth

## USAGE

```
import { exchangeCodeForToken, refreshToken } from '@credenza3/partner-sdk/accounts/oauth'

const result = await exchangeCodeForToken({
  code: string,
  codeVerifier: string,
  redirectUri: string | null,
})

const result = await refreshToken(refreshTokenValue: string)
```