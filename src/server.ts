import { envConfig } from './utils/env'
import app from './config/app'
import mongoose from 'mongoose'

const { port, mongoUrl } = envConfig

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`)
    })
  })
  .catch((error: unknown) => {
    console.error(error)
  })
