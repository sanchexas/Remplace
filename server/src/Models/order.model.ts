import { RowDataPacket } from "mysql2";

export interface OrderModel extends RowDataPacket{ 
    id?: number;
    productsIds: string;
    generalPrice: number;
    buyerId: number;
    createdAt: string;
}