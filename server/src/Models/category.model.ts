import { RowDataPacket } from "mysql2";

export interface CategoryModel extends RowDataPacket{ 
    id?: number;
    title: string;
    description?: string;
    image: string;
}