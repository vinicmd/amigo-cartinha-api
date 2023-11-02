import type { DrawModel } from '../../models/draw'
import type { DrawProtocol } from '../../protocols/draw'
import { Draw } from '../models/Draw'

export async function dbCreateDraw({ name }: DrawProtocol): Promise<DrawModel> {
  const draw = await Draw.create({
    name
  })

  return draw
}
