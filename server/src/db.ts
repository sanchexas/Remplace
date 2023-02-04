import {createPool} from 'mysql2';
import { config } from 'dotenv';
config();

export async function connection(){
        const dbConnection = await createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: '',
                database: process.env.DB_NAME,
        });
        return dbConnection;
}
