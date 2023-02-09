import { connection } from "../db.js";
export class UserRepository {
    async getAll() {
        const conn = await connection();
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
}
