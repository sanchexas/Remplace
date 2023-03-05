import { RowDataPacket } from "mysql2";

export interface ProductModel extends RowDataPacket{ 
    id_product?: number;
    title: string;
    description: string | null;
    price: string;
    image?: string;
    category_id: number;
    organisation_id?: number;
    pickup_address?: string | null;
    quantity: number | string;
}