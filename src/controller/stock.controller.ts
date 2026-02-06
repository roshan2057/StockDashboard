import type { Request, Response } from "express";
import { getStocksWithMarkers } from "../service/stock.service";

export const getDashboard = async (req: Request, res: Response) => {
  const stocks = await getStocksWithMarkers();

  res.render("dashboard", {
    title: "Stock Dashboard",
    stocks,
  });
};
