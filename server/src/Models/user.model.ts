import { RowDataPacket } from "mysql2";
// Test model
export interface IUserModel extends RowDataPacket{ //need to learn better about rowdatapacket
    id?: number
    login: string
}

