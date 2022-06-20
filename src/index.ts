import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import DataBase from "../db.config";
import SQLModels from "./models/_SQLModels";
import router from "./routes/_index";
import fileUpload from "express-fileupload";
import errorHandler from "./middleware/ErrorHandlingMiddleware";
import path from "path";


const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '..', 'static')))
app.use(fileUpload({}))
app.use('/api', router)

/**  error handling should be in the end of the middleware including **/
app.use(errorHandler)

const startServer = async () => {
  await DataBase.openSQLConnection()
  await SQLModels.initModels()
  await DataBase.closeSQLConnection()
  await app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
  })
}

startServer()
  .catch((error) => {
    console.log(error)
  })
