import { RowDataPacket } from "mysql2";

export interface ServiceModel extends RowDataPacket{ 
    id?: number;
    title: string;
    description: string;
    price: number;
    image: string;
    organisationId: number;
    categoryId: number;
}