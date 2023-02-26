import { IOrganisationModel } from "../Models/organisation.model";
import orgRepository from "../Repositories/org.repository";


class OrgService{
    async create(newOrg: IOrganisationModel){
        console.log(newOrg)
        if(newOrg.name.length < 10 || newOrg.name.length > 100){
            return {message: "Наименование не должно быть меньше 10 либо больше 100 символов"};
        }
        await orgRepository.create(newOrg);
        return {message: "Успешно"};
    }
}

export default new OrgService;