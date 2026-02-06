import { Router } from "express";
import { getDashboard } from "../controller/stock.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);


router.get("/", getDashboard);

export default router;
