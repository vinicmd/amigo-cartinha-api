/* import type { Request, Response } from 'express'
import { badRequest } from '../../helpers/http'
import { MissingParamError } from '../../errors/missing-param-error'
import { dbAddParticipant } from '../../db/useCases/add-participant'

export const AddParticipant = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { drawId } = req.params
    const { userId } = req.body

    if (!userId) return badRequest(res, new MissingParamError('userId'))

    const draw = await dbAddParticipant({ drawId, userId })

    return res.status(200).json(draw)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
 */
