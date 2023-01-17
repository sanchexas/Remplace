import express from 'express';

const PORT: number = 3005;
const app = express();

app.listen(PORT, ()=>{
    console.log(`Server works on PORT ${PORT}`);
});

app.get('/', (req, res)=>{
    res.status(200).json("Server works");
});
//testing commits after renaming repo