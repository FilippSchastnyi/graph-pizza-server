import {Router} from 'express'
import RateController from "../controllers/Rate.controller";

const router = Router()

router.get('/rate', RateController.checkIsAuth)
router.post('/rate', RateController.checkIsAuth)
router.delete('/rate', RateController.checkIsAuth)
router.put('/rate', RateController.checkIsAuth)

export default router;