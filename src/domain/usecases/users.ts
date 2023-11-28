import { Err } from '@/domain/models'

export interface IUsers {
  get_users: () => Promise<UserModel.User[]>
  // create_user: (params: UserModel.User) => Promise<UserModel.ModelErr>
}

export namespace UserModel {
  export type User = {
    id: string
    name: string
    identificator: string
    created_at: string
  }

  export type ModelErr = Err
}
