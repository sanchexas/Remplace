import { BankCardModel } from "../Models/bankcard.model";
import { connection } from "../db";

class BankCardRepository{
    async create(newCard: BankCardModel, idUser: string | number){
        try{
            const conn = await connection();
            const response = await conn.query<BankCardModel[]>('INSERT INTO bank_cards (number, cvc, expire, owner, is_selected, balance) VALUES (?,?,?,?,?,?)', [newCard.number, newCard.cvc, newCard.expire, idUser, 1, 0]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async getAll(idUser: number | string){
        try{
            const conn = await connection();
            const response = await conn.query<BankCardModel[]>('SELECT * FROM bank_cards WHERE owner = ?', idUser);
            await conn.end();
            return response[0];
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
    async minusBalance(idCard: string | number, value: string | number){
        try{
            const conn = await connection();
            const response = await conn.query('UPDATE bank_cards SET balance = (balance - ?) WHERE id_card = ?', [value, idCard]);
            await conn.end();
        }catch(e){
            throw new Error("ОшибОчка");
        }
    }
}
export default new BankCardRepository;