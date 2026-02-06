"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgressWidth = getProgressWidth;
exports.getMarkerPosition = getMarkerPosition;
exports.getHoldingDays = getHoldingDays;
// helpers.js
function getProgressWidth(lastPrice, stopLoss, target2) {
    const price = Number(lastPrice);
    const stop = Number(stopLoss);
    const target = Number(target2);
    const percentage = ((price - stop * 0.95) / (target * 1.04 - stop * 0.95)) * 100;
    return Math.min(100, Math.max(0, percentage));
}
function getMarkerPosition(stock, value) {
    const start = stock.stopLoss * 0.95;
    const end = stock.target2 * 1.04;
    const position = ((value - start) / (end - start)) * 100;
    return `${position}%`;
}
function getHoldingDays(buyDate) {
    const buy = new Date(buyDate);
    if (isNaN(buy.getTime())) {
        console.error("Invalid buyDate:", buyDate);
        return 0;
    }
    const today = new Date();
    const diffTime = today.getTime() - buy.getTime(); // no need for Math.abs
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return Math.ceil(diffDays);
}
//# sourceMappingURL=helper.js.map