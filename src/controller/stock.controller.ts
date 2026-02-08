import type { Request, Response } from "express";
import stockService from "../service/stock.service";
import { stocksSymbol } from "../db/SymbolStock";

export const getDashboard = async (req: Request, res: Response) => {
  const stocks = await stockService.getStocksWithMarkers();

  res.render("dashboard", {
    title: "Stock Dashboard",
    stocks,
  });
};

export const getAddStock = (req: Request, res: Response) => {
  const stocks = stocksSymbol;
  res.render("add-stock", {
    title: "Add Stock",
    stocks,
  });
};


