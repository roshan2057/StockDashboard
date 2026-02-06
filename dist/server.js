"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env.config");
const app_1 = __importDefault(require("./app"));
const mongodb_1 = require("./db/mongodb");
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    await (0, mongodb_1.connectDB)();
    // startCronJobs();
    app_1.default.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
};
startServer();
//# sourceMappingURL=server.js.map