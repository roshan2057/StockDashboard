import { Router } from "express";
import { getDashboard } from "../controller/stock.controller";

const api = Router();

api.get("/", getDashboard);

export default api;
