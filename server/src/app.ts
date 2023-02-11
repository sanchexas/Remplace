import express from 'express';
import { config } from 'dotenv';
config();
import { Application } from 'express';

export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3005);
    }
    listen(){
        this.app.listen(this.app.get('port'));
        console.log(`Server works on PORT ${this.app.get('port')}`);
    }
}