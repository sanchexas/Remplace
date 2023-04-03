import { BankCardModel } from "../Models/bankcard.model";
import { connection } from "../db";

class BankCardRepository{
    async create(newCard: BankCardModel, idUser: string | number){
        try{
            const conn = await connection();
            const response = await conn.query<BankCardModel[]>('INSERT INTO bank_cards (number, cvc, expire, owner, is_selected) VALUES (?,?,?,?,?)', [newCard.number, newCard.cvc, newCard.expire, idUser, 1]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}
export default new BankCardRepository;