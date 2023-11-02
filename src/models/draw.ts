import type mongoose from 'mongoose'

export interface DrawModel {
  _id: mongoose.Types.ObjectId
  name: string
  createdAt: Date
  participats?: [
    {
      userId: mongoose.Types.ObjectId
      secretFriendUserId: mongoose.Types.ObjectId
    }
  ]
}
