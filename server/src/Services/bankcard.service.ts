import { BankCardModel } from "../Models/bankcard.model";
import bankCardRepository from "../Repositories/bankcard.repository";

class BankCardService{
    async create(newCard: BankCardModel, idUser: string | number){
        await bankCardRepository.create(newCard, idUser);
        return {message: "yay"};
    }
}

export default new BankCardService;