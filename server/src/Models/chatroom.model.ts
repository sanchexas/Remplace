import { RowDataPacket } from "mysql2";

export interface ChatRoom extends RowDataPacket{ 
    id?: number;
}