import { RowDataPacket } from "mysql2";

export interface IOrganisationModel extends RowDataPacket{ 
    id?: number;
    name: string;
    address: string;
    ownerId: number;
    description?: string;
    link?: string;
    ogrn: string;
    inn: string;
    kpp: string;
}