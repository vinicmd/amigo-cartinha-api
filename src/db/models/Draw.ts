import { model, Schema } from 'mongoose'

export const Draw = model(
  'Draw',
  new Schema({
    name: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE'
    },
    participants: {
      type: [
        {
          userId: {
            type: Schema.Types.ObjectId,
            ref: 'Account',
            unique: true
          },
          secretFriendUserId: {
            type: Schema.Types.ObjectId,
            ref: 'Account'
          }
        }
      ]
    }
  })
)
