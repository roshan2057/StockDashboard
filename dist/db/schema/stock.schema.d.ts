import mongoose from "mongoose";
declare const _default: mongoose.Model<{
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
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
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
} & mongoose.DefaultTimestampProps, {
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
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
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
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
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
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
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
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
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
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
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
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=stock.schema.d.ts.map