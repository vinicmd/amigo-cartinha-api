import { Router, type Express } from 'express'
import { CreateAccount } from '../controllers/user/create-account'

export default (app: Express) => {
  const router = Router()
  router.post('/signup', CreateAccount)
  app.use(router)
}
