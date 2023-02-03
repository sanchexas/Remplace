import { config } from 'dotenv';
config();
import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`Server works on PORT ${PORT}`);
});

app.get('/', (req, res)=>{
    res.status(200).json("Server works");
});