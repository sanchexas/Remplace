import { RowDataPacket } from "mysql2";

export interface IUserModel extends RowDataPacket{ 
    id?: number | string;
    fio: string;
    email: string;
    password: string;
    reppassword?: string;
    phone?: string;
    image?: string;
    roleId?: number | string;
    bank_card_id?: number;
    birthday?: string;
    messange?: string;
}


