"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCronJobs = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const stock_service_1 = require("./stock.service");
const fetchGet_1 = require("../utils/fetchGet");
const stock_schema_1 = __importDefault(require("../db/schema/stock.schema"));
const startCronJobs = () => {
    node_cron_1.default.schedule("*/10 * * * * *", async () => {
        const stocks = await (0, stock_service_1.getStocks)();
        for (const stock of stocks) {
            handlePriceChange(stock);
        }
        console.log("🔄 Stock prices updated at", new Date().toLocaleTimeString());
    });
    console.log("✅ Cron jobs started");
};
exports.startCronJobs = startCronJobs;
const handlePriceChange = async (stock) => {
    const priceList = await getLTPFromChukul(stock.symbol);
    const latestLtpRecord = getLatestLtpRecord(priceList);
    if (!latestLtpRecord) {
        console.log(`❌ No LTP data found for ${stock.symbol}`);
        return;
    }
    updateStockPrice(stock._id, latestLtpRecord.ltp, stock.lastPrice - latestLtpRecord.ltp);
};
const getLTPFromChukul = async (symbol) => {
    try {
        const data = await (0, fetchGet_1.fetchGet)("https://chukul.com/api/data/adjhistorydata/", {
            params: {
                symbol,
            },
            headers: {
                Accept: "application/json, text/plain, */*",
                Referer: "https://chukul.com/nepse-charts",
            },
        });
        // console.log("📈 NTC Data:", data);
        return data;
    }
    catch (error) {
        console.error(`❌ Error fetching LTP for ${symbol}:`, error);
        throw error;
    }
};
const updateStockPrice = async (stockId, newPrice, change) => {
    try {
        await stock_schema_1.default.updateOne({ _id: stockId }, { $set: { lastPrice: newPrice, change } });
    }
    catch (error) {
        console.error(`❌ Error updating stock price for ${stockId}:`, error);
    }
};
const getLatestLtpRecord = (data) => {
    if (!data || data.length === 0)
        return null;
    const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const latestWithLtp = sorted.find((item) => item.ltp !== undefined && item.ltp !== null);
    return latestWithLtp || null;
};
//# sourceMappingURL=cron-job.service.js.map