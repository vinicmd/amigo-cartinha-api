/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router, type Express } from 'express'
import { CreateAccount } from '../controllers/user/create-account'
import { Login } from '../controllers/user/login'
import { CreatePerson } from '../controllers/user/create-person'
import { CreateDraw } from '../controllers/draw/create-draw'
// import { SendEmailPartitipants } from '../controllers/draw/send-email-participants'
import { GetDraw } from '../controllers/draw/get-draw'
import { SendEmailPartitipants } from '../controllers/draw/send-email-participants'
import { CreatePassword } from '../controllers/user/create-account-password'
import { CheckPasswordChangeStatus } from '../controllers/user/check-password-status'

export default (app: Express): void => {
  const router = Router()

  router.get('/', (_req, res) => res.status(200).json({ message: 'alive' }))

  router.post('/signup', CreateAccount)

  router.get('/signup/:userId', CheckPasswordChangeStatus)

  router.post('/signup/:userId/password', CreatePassword)

  router.post('/signin', Login)

  router.put('/profile', CreatePerson)

  router.post('/draw', CreateDraw)

  router.get('/draw/:drawId', GetDraw)

  router.post('/email/:secretFriendUserId', SendEmailPartitipants)

  router.get('*', (_req, res) => res.sendStatus(404))

  app.use(router)
}
