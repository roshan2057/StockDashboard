import { Request, Response } from "express";
import APIService from "../service/api.service";
import { updateAllStockPrices } from "../service/cron-job.service";

export const addStock = async (req: Request, res: Response) => {
  const isSaved = await APIService.addStockDB(req.body);
  if (isSaved) {
    res.status(200).json({
      success: true,
      message: "Stock added successfully",
    })
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to add stock",
    });
  }
};

export const updateLtp = async (req: Request, res: Response) => {
  await updateAllStockPrices();
  res.redirect("/");
};

export const bulkDeleteStocks = async (req: Request, res: Response) => {
  const { ids } = req.body;
  console.log("Received stock IDs for deletion:", ids);
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({
      success: false,
      message: "No stock IDs provided for deletion",
    });
  }
 const isDeleted = await APIService.bulkDeleteStocks(ids);
  if (!isDeleted) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete stocks",
    });
  }
  res.sendStatus(204);
};
