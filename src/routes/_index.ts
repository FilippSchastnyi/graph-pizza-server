import Router from "express";
const router = Router()

router.use('/user')
router.use('/goods')
router.use('/basket')
router.use('/pizza')
router.use('/rate')

export default router
