import 'dotenv/config'
import express from 'express'
import userRoutes from "./routes/User.routes";

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.use('/api', userRoutes)

const start = async () => {
  app.listen(PORT)
}

start()
  .then(() => {
    console.log(`Server has been started on port ${PORT}`)
  }, (e) => {
    console.log(e)
  })