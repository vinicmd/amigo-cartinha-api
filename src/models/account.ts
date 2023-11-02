import type mongoose from 'mongoose'

export interface AccountModel {
  _id: mongoose.Types.ObjectId
  email: string
  password?: string
  name?: string
  address?: string
  teams?: string
  helpContact?: string
  createdAt: Date
}
