import { model, Schema } from 'mongoose'

export const Profile = model(
  'Profile',
  new Schema({
    name: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      required: true,
      unique: true
    },
    address: {
      type: String,
      required: true
    },
    preferences: {
      type: String,
      required: true
    },

    teams: {
      type: String,
      required: true
    },
    helpContact: {
      type: String,
      required: true
    }
  })
)
