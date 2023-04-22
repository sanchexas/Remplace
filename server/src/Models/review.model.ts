import { RowDataPacket } from "mysql2";

export interface ReviewModel extends RowDataPacket{ 
    id_review?: number | string
    text: string
    author_id: number | string
    product_id: number | string
    rate: number
    sent_at?: string
    fio: string
    image: string
}