import type { Request, Response } from 'express'
import { Account } from '../../db/models/Account'
import { secretFriendEmail } from '../../utils/email-template'
import { sendEmail } from '../email/send-email'

export const SendEmailPartitipants = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { secretFriendUserId } = req.params
    const { toEmail } = req.body
    const [account] = await Account.find({ _id: secretFriendUserId })

    const htmlContent = secretFriendEmail(account)

    await sendEmail({ toEmail, htmlContent })
    return res.status(200).json(account)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
