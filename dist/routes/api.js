"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stock_controller_1 = require("../controller/stock.controller");
const api = (0, express_1.Router)();
api.get("/", stock_controller_1.getDashboard);
exports.default = api;
//# sourceMappingURL=api.js.map