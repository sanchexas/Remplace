import { RowDataPacket } from "mysql2";

export interface BankCardModel extends RowDataPacket{ 
    id_card: number | string;
    number: number | string;
    cvc: number | string;
    expire: number | string;
    owner: number | string;
    balance: number | string;
    is_selected: number;
}