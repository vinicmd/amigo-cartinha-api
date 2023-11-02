import type { Request, Response } from 'express'
import { getDraw } from '../../db/useCases/get-draw'

export const GetDraw = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { drawId } = req.params
  const draw = await getDraw(drawId)

  if (!draw) {
    return res.sendStatus(404)
  }

  return res.status(200).json(draw)
}
