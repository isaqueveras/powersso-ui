import { makeApiUrl, makeAxiosHttpClient } from '../http'
import { RemoteCreateAccount } from '../../../data/usecases'
import { CreateAccount } from '../../../domain/usecases'

export const makeRemoteUsers = (): CreateAccount =>
  new RemoteCreateAccount(makeApiUrl('auth/register'), makeAxiosHttpClient())
