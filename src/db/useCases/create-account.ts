import { encrypter } from '../../helpers/encrypter'
import type { AccountModel } from '../../models/account'
import { Account } from '../models/Account'

interface CreateAccount {
  email: string
  password?: string
  name: string
  address: string
  helpContact: string
  teams: string
}

export async function dbCreateAccount({
  email,
  password = '',
  name,
  address,
  helpContact,
  teams
}: CreateAccount): Promise<AccountModel> {
  const hash = await encrypter(password)
  const account = await Account.create({
    email,
    password: hash,
    name,
    address,
    helpContact,
    teams
  })

  return account
}
