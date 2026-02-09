import { Router } from "express";
import { getAddStock, getDashboard, getEditStock } from "../controller/stock.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get("/", getDashboard);
router.get("/add-stock", getAddStock);
router.get("/edit-stock", getEditStock);

export default router;
