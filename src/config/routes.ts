import { Router, type Express } from 'express'
import FastGlob from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  FastGlob.sync('**/src/routes/**route.ts').map(async file =>
    (await import(`../../${file}`)).default(router)
  )
}
