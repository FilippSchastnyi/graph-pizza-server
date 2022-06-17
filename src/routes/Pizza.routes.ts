import {Router} from 'express'
import PizzaController from "../controllers/Pizza.controller";

const router = Router()

router.get('/pizza', PizzaController.checkIsAuth)
router.post('/pizza', PizzaController.checkIsAuth)
router.delete('/pizza', PizzaController.checkIsAuth)
router.put('/pizza', PizzaController.checkIsAuth)

export default router;