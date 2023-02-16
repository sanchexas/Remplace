import { RowDataPacket } from "mysql2";

export interface IUserModel extends RowDataPacket{ 
    id?: number;
    fio: string;
    email: string;
    password: string;
    reppassword?: string;
    phone?: string;
    image?: string;
    roleId: number;
    bankCardId?: number;
    birthday?: string;
    messange?: string;
}


