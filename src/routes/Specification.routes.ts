import {Router} from 'express'
import SpecificationController from "../controllers/Specification.controller";

const router = Router()

router.post('/', SpecificationController.create)

export default router;
