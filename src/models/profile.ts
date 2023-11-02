import type mongoose from 'mongoose'

export interface ProfileModel {
  _id: mongoose.Types.ObjectId
  name: string
  userId: mongoose.Types.ObjectId
  address: string
  preferences: string
  helpContact: string
  teams: string
}
