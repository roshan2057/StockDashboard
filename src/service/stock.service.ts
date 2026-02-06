import StockSchema from "../db/schema/stock.schema";
import {
  getHoldingDays,
  getMarkerPosition,
  getProgressWidth,
} from "../lib/helper";

export const getStocks = () => {
  return StockSchema.find().sort({ createdAt: 1 }).lean();
};

export const getStocksWithMarkers = async () => {
  const stocks = await getStocks();

  const stocksWithMarkers = stocks.map((stock) => {
    const markers = [
      { label: "Stop Loss", value: stock.stopLoss, color: "red-400" },
      { label: "Buy", value: stock.buyPrice, color: "blue-400" },
      { label: "Target1", value: stock.target1, color: "yellow-400" },
      { label: "Target2", value: stock.target2, color: "purple-400" },
    ];

    return {
      ...stock,
      progressWidth: getProgressWidth(
        stock.lastPrice,
        stock.stopLoss,
        stock.target2,
      ),
      holdingDays: getHoldingDays(stock.createdAt.toString()),
      markers: markers.map((marker) => ({
        ...marker,
        position: getMarkerPosition(stock, marker.value!),
      })),
    };
  });
  return stocksWithMarkers;
};
