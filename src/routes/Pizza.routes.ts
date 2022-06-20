import {Router} from 'express'
import PizzaController from "../controllers/Pizza.controller";

const router = Router()

router.get('/pizza', PizzaController.getAll)
router.post('/pizza', PizzaController.getAll)
router.delete('/pizza', PizzaController.getAll)
router.put('/pizza', PizzaController.getAll)

export default router;