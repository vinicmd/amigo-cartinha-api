import { model, Schema } from 'mongoose'

export const Account = model(
  'Account',
  new Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    }
  })
)
