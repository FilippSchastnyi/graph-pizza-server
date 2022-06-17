import Router from "express";
const router = Router()
import userRoutes from "./User.routes";
import goodsRoutes from "./Goods.routes";
import basketRoutes from "./Basket.routes";
import pizzaRoutes from "./Pizza.routes";
import rateRoutes from "./Rate.routes";

router.use('/user', userRoutes)
router.use('/goods', goodsRoutes)
router.use('/basket', basketRoutes)
router.use('/pizza', pizzaRoutes)
router.use('/rate', rateRoutes)

export default router
