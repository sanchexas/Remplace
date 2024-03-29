import express from 'express';
import { config } from 'dotenv';
config();
import { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './Routes/user.routes';
import cookieParser from 'cookie-parser';
import orgRouter from './Routes/org.routes';
import categoryRouter from './Routes/category.routes';
import productRouter from './Routes/product.routes';
import reviewRouter from './Routes/review.routes';
import bankCardRouter from './Routes/bankcard.routes';
import orderRouter from './Routes/order.routes';

export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.usages();
        this.routes();
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3005);
    }
    usages(){
        this.app.use(cors({
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST"],
            credentials: true
        }));
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cookieParser());
    }
    routes(){
        this.app.use('/users',userRouter);
        this.app.use('/orgs',orgRouter);
        this.app.use('/categories',categoryRouter);
        this.app.use('/products', productRouter);
        this.app.use('/reviews', reviewRouter);
        this.app.use('/src/images', express.static('src/images'));
        this.app.use('/bankcards', bankCardRouter);
        this.app.use('/orders', orderRouter);
    }
    listen(){
        this.app.listen(this.app.get('port'));
        console.log(`Server works on PORT ${this.app.get('port')}`);
    }
}