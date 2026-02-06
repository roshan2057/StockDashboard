"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStocksWithMarkers = exports.getStocks = void 0;
const stock_schema_1 = __importDefault(require("../db/schema/stock.schema"));
const helper_1 = require("../lib/helper");
const getStocks = () => {
    return stock_schema_1.default.find().sort({ createdAt: 1 }).lean();
};
exports.getStocks = getStocks;
const getStocksWithMarkers = async () => {
    const stocks = await (0, exports.getStocks)();
    const stocksWithMarkers = stocks.map((stock) => {
        const markers = [
            { label: "Stop Loss", value: stock.stopLoss, color: "red-400" },
            { label: "Buy", value: stock.buyPrice, color: "blue-400" },
            { label: "Target1", value: stock.target1, color: "yellow-400" },
            { label: "Target2", value: stock.target2, color: "purple-400" },
        ];
        return {
            ...stock,
            progressWidth: (0, helper_1.getProgressWidth)(stock.lastPrice, stock.stopLoss, stock.target2),
            holdingDays: (0, helper_1.getHoldingDays)(stock.createdAt.toString()),
            markers: markers.map((marker) => ({
                ...marker,
                position: (0, helper_1.getMarkerPosition)(stock, marker.value),
            })),
        };
    });
    return stocksWithMarkers;
};
exports.getStocksWithMarkers = getStocksWithMarkers;
//# sourceMappingURL=stock.service.js.map