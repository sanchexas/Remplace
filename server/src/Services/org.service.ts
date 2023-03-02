import { ParsedQs } from "qs";
import { IOrganisationModel } from "../Models/organisation.model";
import orgRepository from "../Repositories/org.repository";


class OrgService{
    async create(newOrg: IOrganisationModel){
        if(newOrg.name.length < 10 || newOrg.name.length > 100){
            return {message: "Наименование не должно быть меньше 10 либо больше 100 символов"};
        }
        await orgRepository.create(newOrg);
        return {message: "Успешно"};
    }
    async getByOwnerId(ownerId: string | ParsedQs | string[] | ParsedQs[]){
        if(ownerId){
            const result = await orgRepository.getByOwnerId(ownerId);
            return {
                message: result[0]
            }
        }
        return {message: "Организация не найдена"}
    }
}

export default new OrgService;