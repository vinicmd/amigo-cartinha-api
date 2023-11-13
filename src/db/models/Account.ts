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
      required: false
    },
    pendingPasswordChange: {
      type: Boolean,
      required: false,
      default: true
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    },
    name: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    teams: {
      type: String,
      required: false
    },
    helpContact: {
      type: String,
      required: false
    }
  })
)
