export declare const getStocks: () => import("mongoose").Query<({
    symbol: string;
    name?: string | null;
    buyPrice?: number | null;
    quantity?: number | null;
    stopLoss?: number | null;
    target1?: number | null;
    target2?: number | null;
    change?: number | null;
    lastPrice?: number | null;
    lastUpdatedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: import("mongoose").Types.ObjectId;
}>)[], import("mongoose").Document<unknown, {}, {
    symbol: string;
    name?: string | null;
    buyPrice?: number | null;
    quantity?: number | null;
    stopLoss?: number | null;
    target1?: number | null;
    target2?: number | null;
    change?: number | null;
    lastPrice?: number | null;
    lastUpdatedAt?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    symbol: string;
    name?: string | null;
    buyPrice?: number | null;
    quantity?: number | null;
    stopLoss?: number | null;
    target1?: number | null;
    target2?: number | null;
    change?: number | null;
    lastPrice?: number | null;
    lastUpdatedAt?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {}, {
    symbol: string;
    name?: string | null;
    buyPrice?: number | null;
    quantity?: number | null;
    stopLoss?: number | null;
    target1?: number | null;
    target2?: number | null;
    change?: number | null;
    lastPrice?: number | null;
    lastUpdatedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "find", {
    id: string;
}>;
export declare const getStocksWithMarkers: () => Promise<{
    progressWidth: number;
    holdingDays: number;
    markers: {
        position: string;
        label: string;
        value: number | null | undefined;
        color: string;
    }[];
    symbol: string;
    name?: string | null;
    buyPrice?: number | null;
    quantity?: number | null;
    stopLoss?: number | null;
    target1?: number | null;
    target2?: number | null;
    change?: number | null;
    lastPrice?: number | null;
    lastUpdatedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    _id: import("mongoose").Types.ObjectId;
    __v: number;
}[]>;
//# sourceMappingURL=stock.service.d.ts.map