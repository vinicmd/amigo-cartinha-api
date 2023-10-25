import express from 'express'
import { envConfig } from './utils/config/env'

const app = express()

const { port } = envConfig
app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
