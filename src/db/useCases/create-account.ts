import { encrypter } from '../../helpers/encrypter'
import type { AccountModel } from '../../models/account'
import type { User } from '../../protocols/user'
import { Account } from '../models/Account'

export async function dbCreateAccount({
  email,
  password
}: User): Promise<AccountModel> {
  const hash = await encrypter(password)
  const account = await Account.create({
    email,
    password: hash
  })

  return account as AccountModel
}
