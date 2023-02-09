import { RowDataPacket } from "mysql2";

export interface RoleModel extends RowDataPacket{ 
    id?: number;
    title: string;
}