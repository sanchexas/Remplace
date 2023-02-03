require('dotenv').config();
import express from 'express';
const PORT = process.env.PORT;
const app = express();
const cors = require('cors');


app.listen(PORT, ()=>{
    console.log(`Server works on PORT ${PORT}`);
});

app.get('/', (req, res)=>{
    res.status(200).json("Server works");
});
//testing commits after renaming repo