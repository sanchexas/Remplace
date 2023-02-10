import { connection } from "../db.js";
class UserRepository {
    async getAll() {
        const conn = await connection(); // ПЕРЕНЕСТИ В ДРУГОЙ ФАЙЛ И ИМПОРТИРОВАТЬ ОТТУДА, ЧТОБЫ НЕ БЫЛО ДУБЛИКАТОВ
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM users", (err, res) => {
                if (err) {
                    reject(err);
                    conn.end();
                }
                else {
                    resolve(res);
                    conn.end();
                }
            });
        });
    }
    async getUserById(id) {
        const conn = await connection();
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM users WHERE id_user = ?`, id, (err, res) => {
                if (err) {
                    reject(err);
                    conn.end();
                }
                else {
                    resolve(res);
                    conn.end();
                }
            });
        });
    }
}
export default new UserRepository();
