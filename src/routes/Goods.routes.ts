import {Router} from 'express'
import GoodsController from "../controllers/Goods.controller";

const router = Router()

router.get('/', GoodsController.getAll)
router.post('/', GoodsController.create)

export default router;
