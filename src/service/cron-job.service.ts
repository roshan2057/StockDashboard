import cron from "node-cron";
import Stock from "../db/schema/stock.schema";
import { fetchGet } from "../utils/fetchGet";
import stockService from "./stock.service";
import { isSameDay } from "../lib/helper";

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
  cron.schedule("0 30 15 * * 0-4", async () => {});
  updateAllStockPrices();
  console.log("✅ Cron jobs started");
};

export const updateAllStockPrices = async () => {
  try {
    const stocks = await stockService.getStocks();
    for (const stock of stocks) {
      await handlePriceChange(stock);
    }
    console.log("🔄 Stock prices updated at", new Date().toLocaleString());
  } catch (error) {
    console.error("❌ Error updating stock prices:", error);
  }
};

const handlePriceChange = async (stock: any) => {
  const priceList = await getLTPFromChukul(stock.symbol);

  const latestLtpRecord = getLatestLtpRecord(priceList);
  if (!latestLtpRecord) {
    console.log(`❌ No LTP data found for ${stock.symbol}`);
    return;
  }

  const newPrice = latestLtpRecord.ltp!;
  const marketDate = latestLtpRecord.date;

  let change: number | undefined = undefined;

  const alreadyUpdatedForThisMarketDay = isSameDay(stock.updatedAt, marketDate);

  const createdToday = isSameDay(stock.createdAt, marketDate);

  if (!alreadyUpdatedForThisMarketDay) {
    change = newPrice - stock.lastPrice;
  } else if (createdToday && stock.change == null) {
    change = newPrice - stock.lastPrice;
  }
  await updateStockPrice(stock._id, newPrice, change);
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
    return data;
  } catch (error) {
    console.error(`❌ Error fetching LTP for ${symbol}:`, error);
    throw error;
  }
};

const updateStockPrice = async (
  stockId: string,
  newPrice: number,
  change?: number | undefined,
) => {
  try {
    const update: any = { lastPrice: newPrice };

    if (change !== undefined) {
      update.change = change;
    }

    await Stock.updateOne({ _id: stockId }, { $set: update });
  } catch (error) {
    console.error(`❌ Error updating stock price for ${stockId}:`, error);
  }
};

const getLatestLtpRecord = (data: StockHistory[]): StockHistory | null => {
  if (!data?.length) return null;

  let latest: StockHistory | null = null;
  let latestTime = -Infinity;

  for (const item of data) {
    if (item.ltp == null) continue;
    const time = new Date(item.date).getTime();
    if (isNaN(time)) continue;

    if (time > latestTime) {
      latestTime = time;
      latest = item;
    }
  }

  return latest;
};
