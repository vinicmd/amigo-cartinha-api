import type { AccountModel } from '../../models/account'
import { Account } from '../models/Account'

export const dbChangePassword = async (
  id: string,
  hashedPassword: string
): Promise<AccountModel> => {
  try {
    const account = await Account.findByIdAndUpdate(id, {
      password: hashedPassword,
      pendingPasswordChange: false
    })

    return account
  } catch (error: unknown) {
    console.error(error)
  }
}
