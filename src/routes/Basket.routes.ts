import {Router} from 'express'
import UserController from "../controllers/User.controller";

const router = Router()
const userController = UserController

router.get('/user', userController.getAllUsers)

export default router;