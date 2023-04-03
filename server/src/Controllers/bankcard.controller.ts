import { Request, Response } from "express";
import { BankCardModel } from "../Models/bankcard.model";
import bankcardService from "../Services/bankcard.service";

class BankCardController{
    // async getAll(req: Request, res: Response){
    //     const result = await categoryService.getAll();
    //     return res.json({
    //         message: result.message,
    //     });
    // }
    async create(req: Request, res: Response){
        const newCard: BankCardModel = req.body;
        const idUser: number | string = req.cookies.id_user;
        if(newCard !== undefined && idUser !== undefined){
            try{
                const result = await bankcardService.create(newCard, idUser);
                return res.json({
                    message: result.message,
                });
            }catch(e){
                return res.json({err: "Ошибка", click_here: `https://youtu.be/dQw4w9WgXcQ`});
            }
        }
    }
}

export default new BankCardController;