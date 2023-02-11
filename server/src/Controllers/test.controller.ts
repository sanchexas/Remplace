import { Request, Response } from "express";

class TestController{
    getWelcome(req: Request, res: Response){
        return res.json('WELCOME TO MY API !!! :D')
    }
}

export default new TestController;