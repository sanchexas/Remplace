import Axios from 'axios';
import apiPath from '../api-path';
Axios.defaults.withCredentials = true;

class ReviewController{
    async create(data: object){
        const response = await Axios.post(`${apiPath}/reviews/create`, data);
        return response;
    }
    async getByProdId(prodId: number | string){
        const response = await Axios.get(`${apiPath}/reviews/getbyprodid`, {params: {prodId: prodId}});
        return response;
    }
    async getAveregeRateByProdId(prodId: string | number | null | undefined){
        const response = await Axios.get(`${apiPath}/reviews/getratebyprodid`, {params: {prodId: prodId}});
        return response;
    }
}

export default new ReviewController();