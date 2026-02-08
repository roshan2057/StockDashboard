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
  value: number,
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

  buy.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - buy.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays;
}

export const isSameDay = (d1: Date | string, d2: Date | string) => {
  const a = new Date(d1);
  const b = new Date(d2);
  return a.toISOString().slice(0, 10) === b.toISOString().slice(0, 10);
};
