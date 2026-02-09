import { Router } from "express";
import { addStock, bulkDeleteStocks, updateLtp } from "../controller/api.controller";

const api = Router();

api.post("/stock/add", addStock);
api.post("/update-ltp", updateLtp);

api.delete("/stocks/bulk-delete", bulkDeleteStocks);

export default api;
