/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router, type Express } from 'express'
import { CreateAccount } from '../controllers/user/create-account'
import { Login } from '../controllers/user/login'
import { CreatePerson } from '../controllers/user/create-person'
import { CreateDraw } from '../controllers/draw/create-draw'
// import { SendEmailPartitipants } from '../controllers/draw/send-email-participants'
import { GetDraw } from '../controllers/draw/get-draw'
import { SendEmailPartitipants } from '../controllers/draw/send-email-participants'

export default (app: Express): void => {
  const router = Router()

  router.post('/signup', CreateAccount)

  router.post('/signin', Login)

  router.put('/profile', CreatePerson)

  router.post('/draw', CreateDraw)

  router.get('/draw/:drawId', GetDraw)

  router.post('/email/:secretFriendUserId', SendEmailPartitipants)

  app.use(router)
}
