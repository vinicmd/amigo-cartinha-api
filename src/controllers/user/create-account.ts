import type { Request, Response } from 'express'
import { badRequest, ok } from '../../helpers/http'
import { dbCreateAccount } from '../../db/useCases/create-account'
import { MissingParamError } from '../../errors/missing-param-error'
/* import { emailValidator } from '../../utils/email-validator'
import { InvalidParamError } from '../../errors/invalid-param-error' */

export async function CreateAccount(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const requiredFields = ['email', 'name', 'address', 'helpContact', 'teams']

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return badRequest(res, new MissingParamError(field))
      }
    }

    const { email, name, address, helpContact, teams } = req.body

    /* if (!emailValidator(email)) {
      return badRequest(res, new InvalidParamError('email'))
    }

    if (password !== passwordConfirmation) {
      return badRequest(res, new InvalidParamError('passwordConfirmation'))
    } */

    const account = await dbCreateAccount({
      email,
      name,
      address,
      helpContact,
      teams
    })

    return ok(res, account)
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}
