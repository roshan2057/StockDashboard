import StockSchema from "../db/schema/stock.schema";

class APIService {
  public async addStockDB(body: Record<string, any>) {
    const calculated = this.calculateTradeLevels(body);
    const stock = await StockSchema.create(calculated);
    if (!stock) {
      return false;
    }
    return true;
  }

  private calculateTradeLevels(body: Record<string, any>) {
    const price = Number(body.price);

    return {
      symbol: body.symbol,
      name: body.name,
      buyPrice: Number(body.price),
      quantity: parseInt(body.quantity, 10),
      lastPrice: price,
      stopLoss: price - price * 0.08,
      target1: price + price * 0.15,
      target2: price + price * 0.2,
      change: 0,
    };
  }

  public async bulkDeleteStocks(ids: string[]) {
    try {
      await StockSchema.deleteMany({ _id: { $in: ids } });
      return true;
    } catch (error) {
      console.error("Error deleting stocks:", error);
      return false;
    }
  }
}

export default new APIService();
