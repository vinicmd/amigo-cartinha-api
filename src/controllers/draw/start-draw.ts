import type { Request, Response } from 'express'
import { sendEmail } from '../email/send-email'
import { secretFriendEmail } from '../../utils/email-template'
import { getDraw } from '../../db/useCases/get-draw'
import { Account } from '../../db/models/Account'

export const StartDraw = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { drawId } = req.params

  const draw = await getDraw(drawId)
  const toEmail = 'viniciusduarte@outlook.com'
  const [secretFriend] = await Account.find({
    _id: '653d106641b780c835273c15'
  })
  const htmlContent = secretFriendEmail(secretFriend)

  await sendEmail({ htmlContent, toEmail })
  return res.status(200).json(draw)
}
