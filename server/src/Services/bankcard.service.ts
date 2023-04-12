import { BankCardModel } from "../Models/bankcard.model";
import bankCardRepository from "../Repositories/bankcard.repository";

class BankCardService{
    async create(newCard: BankCardModel, idUser: string | number){
        await bankCardRepository.create(newCard, idUser);
        return {message: "yay"};
    }
    async getAll(idUser: number | string){
        const result = await bankCardRepository.getAll(idUser);
        if(result){
            return {message: result};
        }
        return {message: "Не удалось загрузить банковские карты."};
    }
}

export default new BankCardService;