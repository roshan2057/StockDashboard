import StockSchema from "../db/schema/stock.schema";
import {
  getHoldingDays,
  getMarkerPosition,
  getProgressWidth,
} from "../lib/helper";

class StockService {
  public async getStocks() {
    return StockSchema.find().sort({ createdAt: 1 }).lean();
  }
  public async getStocksWithMarkers() {
    const stocks = await this.getStocks();

    return stocks.map((stock: any) => {
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
  }
}

export default new StockService();
