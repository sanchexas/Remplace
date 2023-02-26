import { ParsedQs } from "qs";
import { connection } from "../db";
import { IUserModel } from "../Models/user.model";
import { IOrganisationModel } from "../Models/organisation.model";

class OrgRepository{
    async create(newOrg: IOrganisationModel){
        try{
            const conn = await connection();
            await conn.query<IOrganisationModel[]>('INSERT INTO organisations (name, address, owner_id, description, website_link, ogrn, inn, kpp) VALUES (?,?,?,?,?,?,?,?)', [newOrg.name, newOrg.address, newOrg.ownerId, newOrg.description, newOrg.link, newOrg.ogrn, newOrg.inn, newOrg.kpp]);
            await conn.query<IUserModel[]>('UPDATE users SET role_id = ? WHERE id_user = ?;', [3, newOrg.ownerId]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}

export default new OrgRepository;