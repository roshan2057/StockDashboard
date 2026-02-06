import mongoose, { Schema } from "mongoose";

const StockSchema = new Schema(
  {
    symbol: { type: String, required: true },
    buyPrice: { type: Number },
    quantity: { type: Number },
    stopLoss: { type: Number },
    target1: { type: Number },
    target2: { type: Number },
    change: { type: Number },
    name: { type: String },
    lastPrice: { type: Number },
    lastUpdatedAt: { type: Date },
  },
  { timestamps: true },
);

export default mongoose.model("Stock", StockSchema);
