import 'dotenv/config'

export const envConfig = {
  port: Number(process.env.PORT) || 8080,
  mongoUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/amigocartinha',
  secret: process.env.SECRET,
  resendKey: process.env.RESEND_SECRET
}
