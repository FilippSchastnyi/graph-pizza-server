import {Router} from 'express'
import UserController from "../controllers/User.controller";

const router = Router()
const userController = UserController

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.checkIsAuth)

export default router;