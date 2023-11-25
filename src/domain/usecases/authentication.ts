import { AccountModel, Err } from '@/domain/models'

export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Authentication.Model>
}

export namespace Authentication {
  export type Params = {
    email: string
    password: string
    otp: string
  }

  export type Model = AccountModel & Err
}
