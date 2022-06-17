import {Router} from 'express'
import BaskedController from "../controllers/Basked.controller";

const router = Router()

router.get('/basket', BaskedController.checkIsAuth)
router.post('/basket', BaskedController.checkIsAuth)
router.delete('/basket', BaskedController.checkIsAuth)
router.put('/basket', BaskedController.checkIsAuth)

export default router;