import type { Request, Response } from "express";
import stockService from "../service/stock.service";
import { stocksSymbol } from "../db/SymbolStock";
import { getHoldingDays } from "../lib/helper";

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

export const getEditStock = async (req: Request, res: Response) => {
  const stocks = await stockService.getStocks();
  for (const stock of stocks) {
    (stock as any).holdingDays = getHoldingDays(stock.createdAt.toString());
  }
  res.render("edit-stock", {
    title: "Edit Stock",
    stocks,
  });
};
