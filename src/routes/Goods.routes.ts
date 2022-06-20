import {Router} from 'express'
import GoodsController from "../controllers/Goods.controller";

const router = Router()

router.get('/goods', GoodsController.getAll)
router.post('/goods', GoodsController.getAll)
router.delete('/goods', GoodsController.getAll)
router.put('/goods', GoodsController.getAll)

export default router;