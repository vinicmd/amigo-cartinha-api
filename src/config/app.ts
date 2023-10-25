import express from 'express'
import setupRoutes from './routes'
import middlewares from './middlewares'

const app = express()
setupRoutes(app)
middlewares(app)

export default app
