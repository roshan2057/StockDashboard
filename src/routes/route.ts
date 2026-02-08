import { Router } from "express";
import { getAddStock, getDashboard } from "../controller/stock.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get("/", getDashboard);
router.get("/add-stock", getAddStock);

export default router;
