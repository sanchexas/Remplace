import { connection } from "../db.js";
export class UserRepository {
    async getAll() {
        const conn = await connection();
        return new Promise((resolve, reject) => {
            conn.query("SELECT login FROM users", (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
}
