import type { DrawModel } from '../../models/draw'
import { Draw } from '../models/Draw'

export async function getDraw(drawId: string): Promise<DrawModel> {
  const [draw] = await Draw.find({ _id: drawId }).populate(
    'participants.userId'
  )
  return draw
}
