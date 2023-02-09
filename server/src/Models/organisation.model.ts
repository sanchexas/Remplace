import { RowDataPacket } from "mysql2";

export interface OrganisationModel extends RowDataPacket{ 
    id?: number;
    name: string;
    address: string;
    ownerId: number;
    description?: string;
    logo: string;
    websiteLink?: string;
}