import type { Request, Response } from 'express'
import { badRequest } from '../../helpers/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { Account } from '../../db/models/Account'
// import type { AccountModel } from '../../models/account'
import { dbCreateDraw } from '../../db/useCases/create-draw'
import { dbAddParticipant } from '../../db/useCases/add-participant'

export const CreateDraw = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name } = req.body

    if (!name) return badRequest(res, new MissingParamError('name'))

    const draw = await dbCreateDraw({ name })

    const accounts = await Account.find()

    const shuffleArray = <T>(array: T[]): T[] => {
      for (let index = array.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * (index + 1))
        ;[array[index], array[j]] = [array[j], array[index]]
      }
      return array
    }

    const shuffledParticipants = shuffleArray(accounts)

    for (let index = 0; index < shuffledParticipants.length; index++) {
      const currentParticipant = shuffledParticipants[index]
      const nextParticipant =
        shuffledParticipants[(index + 1) % shuffledParticipants.length]

      await dbAddParticipant({
        drawId: draw._id,
        userId: currentParticipant._id,
        secretFriendUserId: nextParticipant._id
      })
    }

    res.status(201).json({ drawId: draw._id })
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
