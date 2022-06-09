import 'dotenv/config'
import express from 'express'
import userRoutes from "./routes/User.routes";
import DataBase from './../db.config'

const PORT = process.env.PORT || 5000
const app = express()
const dataBase = DataBase.initSQL
app.use(express.json())

app.use('/api', userRoutes)

const startServer = async () => {
  await dataBase.authenticate()
  await dataBase.sync()
  await app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
  })
}

startServer()
  .catch((error)=>{
    console.log(error)
  })
