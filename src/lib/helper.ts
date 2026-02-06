// helpers.js
export function getProgressWidth(
  lastPrice: any,
  stopLoss: any,
  target2: any,
): number {
  const price = Number(lastPrice);
  const stop = Number(stopLoss);
  const target = Number(target2);

  const percentage =
    ((price - stop * 0.95) / (target * 1.04 - stop * 0.95)) * 100;

  return Math.min(100, Math.max(0, percentage));
}

export function getMarkerPosition(
  stock: Record<string, any>,
  value: number
): string {
  const start = stock.stopLoss * 0.95;
  const end = stock.target2 * 1.04;
  const position = ((value - start) / (end - start)) * 100;
  return `${position}%`;
}

export function getHoldingDays(buyDate: string): number {
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
