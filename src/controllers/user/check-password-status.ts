import type { Request, Response } from 'express'
import { Account } from '../../db/models/Account'

export async function CheckPasswordChangeStatus(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { userId } = req.params

    const [account] = await Account.find({ _id: userId })

    if (!account._id || !account.pendingPasswordChange) {
      return res.sendStatus(404)
    }

    return res.status(200).json(account)
  } catch (error) {
    console.error(error)
    return res.sendStatus(404)
  }
}
