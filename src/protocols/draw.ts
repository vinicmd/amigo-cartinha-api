import type mongoose from 'mongoose'

export interface DrawProtocol {
  name: string
  participants?: [
    {
      userId: mongoose.Types.ObjectId
      secretFriendUserId: mongoose.Types.ObjectId
    }
  ]
}
