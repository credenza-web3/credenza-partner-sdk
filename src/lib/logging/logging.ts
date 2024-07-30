let debugEnabled = false

export function log(methodName: string, ...args: unknown[]) {
  if (!debugEnabled) return
  console.log(`[CREDENZA_PARTNER_SDK#${methodName}]:`, ...args)
}

export function enableSdkDebug(enableDebug: boolean) {
  debugEnabled = enableDebug
}
