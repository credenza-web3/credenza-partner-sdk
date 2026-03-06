export type TOAuthAccountInfo = {
  id: string
  name: string
  loginType: string
  picture?: string
  email?: string
  phone?: string
}

export type TGetAccountInfoByContactParams = {
  email?: string
  phone?: string
}
