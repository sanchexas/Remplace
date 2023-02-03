import { dbConnection } from "../db.js";
export class UserRepository {
    getAll() {
        return new Promise((resolve, reject) => {
            dbConnection.query("SELECT * FROM users", (err, res) => {
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
