import type mongoose from 'mongoose'
import type { DrawModel } from '../../models/draw'
import { Draw } from '../models/Draw'

interface DbAddParticipantType {
  drawId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  secretFriendUserId: mongoose.Types.ObjectId
}

export async function dbAddParticipant({
  drawId,
  userId,
  secretFriendUserId
}: DbAddParticipantType): Promise<DrawModel> {
  const draw = await Draw.findByIdAndUpdate(drawId, {
    $push: { participants: { userId, secretFriendUserId } }
  })

  return draw
}
