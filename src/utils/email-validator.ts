import { validate } from 'email-validator'

export const emailValidator = (email: string): boolean => {
  return validate(email)
}
