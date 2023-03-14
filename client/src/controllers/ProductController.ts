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
    async createWithFormData(formData: FormData){
        const result = await Axios.post(`${apiPath}/products/createwithformdata`, formData);
    }
    async getAll(){
        const result = await Axios.get(`${apiPath}/products/getall`);
        if(result){
            return result;
        }
    }
    async getTopSix(){
        const result = await Axios.get(`${apiPath}/products/gettopsix`);
        if(result){
            return result;
        }
    }
    async getByOrgId(idOrg: string | number){
        const result = await Axios.get(`${apiPath}/products/getbyorgid`, {params: {idOrg: idOrg}});
        return result;
    }
    async deleteById(idProduct: number | string){
        await Axios.post(`${apiPath}/products/deletebyid`, {idProduct});
    }
    async getById(idProduct: number | string){
        const result = await Axios.get(`${apiPath}/products/getbyid`, {params: {idProduct: idProduct}});
        return result;
    }
    async update(formData: FormData){
        const result = await Axios.post(`${apiPath}/products/update`, formData);
    }
}

export default new ProductController();