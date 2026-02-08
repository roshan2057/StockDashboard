import { Router } from "express";
import { addStock, updateLtp } from "../controller/api.controller";

const api = Router();

api.post("/stock/add", addStock);
api.get("/update-ltp", updateLtp);

export default api;
