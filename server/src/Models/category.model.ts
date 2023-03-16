import { RowDataPacket } from "mysql2";

export interface CategoryModel extends RowDataPacket{ 
    id?: number;
    cat_title: string;
    cat_image: string;
}