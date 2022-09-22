import {Router} from 'express'
import PizzaController from "../controllers/Pizza.controller";

const router = Router()

router.get('/', PizzaController.getAll)
router.post('/', PizzaController.createOne)
router.delete('/pizza', PizzaController.getAll)
router.put('/pizza', PizzaController.getAll)

export default router;