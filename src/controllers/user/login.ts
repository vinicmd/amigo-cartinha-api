import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Account } from '../../db/models/Account'
import { notFound } from '../../helpers/http'
import { comparePassword } from '../../helpers/compare-password'
import { envConfig } from '../../utils/env'

export async function Login(req: Request, res: Response): Promise<Response> {
  try {
    const { email, password } = req.body
    const user = await Account.find({ email })
    if (!user.length) {
      return notFound(res)
    }

    const { _id, password: hashedPassword } = user[0]

    const isValid = await comparePassword(password, hashedPassword)
    if (!isValid) return notFound(res)

    const token = jwt.sign({ _id }, envConfig.secret, {
      expiresIn: '60d'
    })

    return res.status(200).json({ auth: true, token })
  } catch (error: unknown) {
    console.log(error)
  }
}
