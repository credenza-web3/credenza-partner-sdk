import { SDK_ENV } from './sdk-env.constants'

export type TSdkEnv = (typeof SDK_ENV)[keyof typeof SDK_ENV]
