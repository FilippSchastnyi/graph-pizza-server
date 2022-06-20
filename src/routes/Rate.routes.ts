import {Router} from 'express'
import RateController from "../controllers/Rate.controller";

const router = Router()

router.get('/rate', RateController.getOne)
router.post('/rate', RateController.getOne)
router.delete('/rate', RateController.getOne)
router.put('/rate', RateController.getOne)

export default router;