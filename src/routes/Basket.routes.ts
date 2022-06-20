import {Router} from 'express'
import BaskedController from "../controllers/Basked.controller";

const router = Router()

router.get('/basket', BaskedController.get)
router.post('/basket', BaskedController.get)
router.delete('/basket', BaskedController.get)
router.put('/basket', BaskedController.get)

export default router;