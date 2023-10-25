import 'dotenv/config'

if (!process.env.PORT) {
  throw new Error('Please, set up your .env file')
}

export const envConfig = {
  port: process.env.PORT
}
