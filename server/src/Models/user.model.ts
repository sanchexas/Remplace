import { RowDataPacket } from "mysql2";
// Test model
export interface IUserModel extends RowDataPacket{ 
    id?: number
    login: string
}


