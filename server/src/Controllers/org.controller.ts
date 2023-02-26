import e, { Request, Response } from "express";
import { IOrganisationModel } from "../Models/organisation.model";
import orgService from "../Services/org.service";

class OrgController{
    async create(req: Request, res: Response){
        const newOrg: IOrganisationModel = req.body;
        if(newOrg !== undefined){
            try{
                const result = await orgService.create(newOrg);
                return res.json({
                    message: result.message,
                });
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
}

export default new OrgController;