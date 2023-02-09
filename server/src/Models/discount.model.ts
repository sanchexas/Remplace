import { RowDataPacket } from "mysql2";

export interface DiscountModel extends RowDataPacket{ 
    id?: number;
    productId: number;
    discountPercent: number;
    discountSettedAt: string;
}