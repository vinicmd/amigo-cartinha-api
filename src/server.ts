import { envConfig } from './utils/config/env'
import app from './config/app'

const { port } = envConfig
app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
