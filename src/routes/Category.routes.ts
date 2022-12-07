import {Router} from "express";
import CategoryController from "../controllers/Category.controller";

const router = Router()

router.post('/', CategoryController.postNewCategory)

export default router
