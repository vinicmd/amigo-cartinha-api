import type { Router } from 'express'
import { CreateAccount } from '../controllers/user/create-account'

export default (router: Router): void => {
  router.post('/signup', CreateAccount)
}
