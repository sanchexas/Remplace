import { RowDataPacket } from "mysql2";

export interface ReviewModel extends RowDataPacket{ 
    id?: number;
    text: string;
    authorId: number;
    productId: number;
    sentAt: string;
}