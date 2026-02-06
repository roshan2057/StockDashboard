"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
require("../config/env.config");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
exports.authMiddleware = (0, express_basic_auth_1.default)({
    users: {
        [process.env.SYSTEM_USERNAME]: process.env.SYSTEM_PASSWORD,
    },
    challenge: true,
    realm: "Protected Area",
});
//# sourceMappingURL=auth.middleware.js.map