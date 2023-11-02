import type { Request, Response } from 'express'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http'
import { dbUpdateProfile } from '../../db/useCases/update-profile'

export async function CreatePerson(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const requiredFields = [
      'name',
      'userId',
      'address',
      'preferences',
      'helpContact',
      'teams'
    ]

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return badRequest(res, new MissingParamError(field))
      }
    }

    const { name, userId, address, preferences, helpContact, teams } = req.body

    const profile = await dbUpdateProfile({
      name,
      userId,
      address,
      preferences,
      helpContact,
      teams
    })

    return res.status(201).json(profile)
  } catch (error) {
    console.error(error)
  }
}
