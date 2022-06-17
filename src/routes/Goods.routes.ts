import {Router} from 'express'
import GoodsController from "../controllers/Goods.controller";

const router = Router()

router.get('/goods', GoodsController.checkIsAuth)
router.post('/goods', GoodsController.checkIsAuth)
router.delete('/goods', GoodsController.checkIsAuth)
router.put('/goods', GoodsController.checkIsAuth)

export default router;