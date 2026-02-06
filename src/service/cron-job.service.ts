import cron from "node-cron";
import { getStocks } from "./stock.service";
import { fetchGet } from "../utils/fetchGet";
import Stock from "../db/schema/stock.schema";

interface StockHistory {
  date: string;
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  ltp?: number; // optional
  volume: number;
  amount: number;
}
export const startCronJobs = () => {
  cron.schedule("0 30 15 * * 0-4", async () => {
    const stocks = await getStocks();
    for (const stock of stocks) {
      handlePriceChange(stock);
    }
    console.log("🔄 Stock prices updated at", new Date().toLocaleTimeString());
  });

  console.log("✅ Cron jobs started");
};

const handlePriceChange = async (stock: any) => {
  const priceList = await getLTPFromChukul(stock.symbol);

  const latestLtpRecord = getLatestLtpRecord(priceList);
  if (!latestLtpRecord) {
    console.log(`❌ No LTP data found for ${stock.symbol}`);
    return;
  }

  updateStockPrice(
    stock._id,
    latestLtpRecord.ltp!,
    stock.lastPrice - latestLtpRecord.ltp!,
  );
};

const getLTPFromChukul = async (symbol: string): Promise<StockHistory[]> => {
  try {
    const data = await fetchGet<StockHistory[]>(
      "https://chukul.com/api/data/adjhistorydata/",
      {
        params: {
          symbol,
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          Referer: "https://chukul.com/nepse-charts",
        },
      },
    );
    // console.log("📈 NTC Data:", data);
    return data;
  } catch (error) {
    console.error(`❌ Error fetching LTP for ${symbol}:`, error);
    throw error;
  }
};

const updateStockPrice = async (
  stockId: string,
  newPrice: number,
  change: number,
) => {
  try {
   await Stock.updateOne(
      { _id: stockId },
      { $set: { lastPrice: newPrice, change } }
    );
  } catch (error) {
    console.error(`❌ Error updating stock price for ${stockId}:`, error);
  }
};

const getLatestLtpRecord = (data: StockHistory[]): StockHistory | null => {
  if (!data || data.length === 0) return null;
  const sorted = data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const latestWithLtp = sorted.find(
    (item) => item.ltp !== undefined && item.ltp !== null,
  );
  return latestWithLtp || null;
};
