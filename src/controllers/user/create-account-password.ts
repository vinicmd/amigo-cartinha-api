import type { Request, Response } from 'express'
import { Account } from '../../db/models/Account'
import { badRequest } from '../../helpers/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { encrypter } from '../../helpers/encrypter'
import { dbChangePassword } from '../../db/useCases/change-password'

export async function CreatePassword(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { userId } = req.params
    console.log(userId)
    const { password, passwordConfirmation } = req.body

    if (password !== passwordConfirmation) {
      return badRequest(res, new InvalidParamError('Password'))
    }

    const requiredFields = ['password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return badRequest(res, new MissingParamError(field))
      }
    }

    const [account] = await Account.find({ _id: userId })
    if (!account.pendingPasswordChange || !account._id) {
      return res.sendStatus(404)
    }

    const hashedPassword = await encrypter(password)

    const updatedAccount = await dbChangePassword(userId, hashedPassword)

    return res.status(200).json(updatedAccount)
  } catch (error) {
    console.error(error)
    return res.sendStatus(404)
  }
}
