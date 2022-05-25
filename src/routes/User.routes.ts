import {Router} from 'express'
import UserController from "../controllers/User.controller";

const router = Router()
const userController = UserController

router.get('/user', userController.getAllUsers)
router.get('/user/:id', userController.getUser)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export default router;