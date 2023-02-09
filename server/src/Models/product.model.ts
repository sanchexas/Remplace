import { RowDataPacket } from "mysql2";

export interface ProductModel extends RowDataPacket{ 
    id?: number;
    title: string;
    description: string;
    originPrice: string;
    image: string;
    categoryId: number;
    organisationId: number;
    pickUpAddress?: string;
}