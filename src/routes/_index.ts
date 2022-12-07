import Router from "express";
const router = Router()
import userRoutes from "./User.routes";
import goodsRoutes from "./Goods.routes";
import categoryRoutes from "./Category.routes";
import specificationRoutes from "./Specification.routes";

router.use('/user', userRoutes)
router.use('/goods', goodsRoutes)
router.use('/category', categoryRoutes)
router.use('/specification', specificationRoutes)

export default router
