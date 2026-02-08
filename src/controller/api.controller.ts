import { Request, Response } from "express";
import APIService from "../service/api.service";
import { updateAllStockPrices } from "../service/cron-job.service";

export const addStock = async (req: Request, res: Response) => {
  const isSaved = await APIService.addStockDB(req.body);
  if (isSaved) {
    res.json({
      success: true,
      message: "Stock added successfully",
    });
  } else {
  }
};

export const updateLtp = async (req: Request, res: Response) => {
  await updateAllStockPrices();
  res.redirect("/");
};
