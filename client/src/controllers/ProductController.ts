import Axios from 'axios';
import apiPath from '../api-path';
import Cookies from 'universal-cookie';
import { IProductModel } from '../models/IProductModel';
Axios.defaults.withCredentials = true;

class ProductController{
    cookies = new Cookies();
    async create(data: IProductModel){ 
        const response = await Axios.post(`${apiPath}/products/create`, data);
    }
}

export default new ProductController();