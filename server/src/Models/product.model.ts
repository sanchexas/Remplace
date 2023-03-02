import { RowDataPacket } from "mysql2";

export interface ProductModel extends RowDataPacket{ 
    id?: number;
    title: string;
    description: string;
    originPrice: string;
    image: string | null;
    categoryId: number;
    organisationId: number;
    pickUpAddress?: string;
    quantity: number | string;
}