import {createPool} from 'mysql2/promise'; //probably i should to delete 'promise' in future
import { config } from 'dotenv';
config();

export const dbConnection = createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: '',
        database: process.env.DB_NAME,
});
