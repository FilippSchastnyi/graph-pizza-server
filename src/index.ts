import 'dotenv/config'
import express from 'express'
import userRoutes from "./routes/User.routes";
import sequelize from "../db.config";


const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.use('/api', userRoutes)

const startServer = async () => {
  await sequelize.SQL.authenticate()
  await sequelize.SQL.sync()
  await app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
  })
}

startServer()
  .catch((error)=>{
    console.log(error)
  })
