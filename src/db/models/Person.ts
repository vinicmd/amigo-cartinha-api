import { model, Schema } from 'mongoose'

export const Person = model(
  'Person',
  new Schema({
    name: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Account'
    },
    address: {
      type: String,
      required: true
    },
    preferences: {
      type: String,
      required: true
    },
    helpContact: {
      type: String,
      required: true
    }
  })
)
