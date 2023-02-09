import { RowDataPacket } from "mysql2";

export interface MessageModel extends RowDataPacket{ 
    id?: number;
    text: string;
    chatRoomId: number;
    sentFromId: number;
    sentToId: number;
    sentAt: string;
}