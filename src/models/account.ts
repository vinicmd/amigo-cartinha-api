import type mongoose from 'mongoose'

export interface AccountModel {
  _id: mongoose.Types.ObjectId
  email: string
  password: string
  createdAt: Date
}
