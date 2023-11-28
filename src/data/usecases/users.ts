import { HttpClient, HttpStatusCode } from '../protocols/http'
import { UserModel, IUsers } from '../../domain/usecases'
import { Err } from '../../domain/errors'

export class UCUsers implements IUsers {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<any>
  ) {}

  async get_users (): Promise<UserModel.User[]> {
    const httpResponse = await this.httpClient.request({ url: this.url, method: 'get' })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new Err(httpResponse.body.message)
    }
  }

  // async create_user (params: UserModel.User): Promise<UserModel.ModelErr> {}
}
