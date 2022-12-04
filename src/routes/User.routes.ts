import {Router} from 'express'
import UserController from "../controllers/User.controller";
import authenticationMiddleware from "../middleware/AuthenticationMiddleware";

const router = Router()
const userController = UserController

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/authentication', authenticationMiddleware, userController.isAuthenticated)

export default router;
