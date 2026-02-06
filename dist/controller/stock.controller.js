"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
const stock_service_1 = require("../service/stock.service");
const getDashboard = async (req, res) => {
    const stocks = await (0, stock_service_1.getStocksWithMarkers)();
    res.render("dashboard", {
        title: "Stock Dashboard",
        stocks,
    });
};
exports.getDashboard = getDashboard;
//# sourceMappingURL=stock.controller.js.map