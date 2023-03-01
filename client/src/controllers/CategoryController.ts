import Axios from 'axios';
import apiPath from '../api-path';
Axios.defaults.withCredentials = true;

class CategoryController{
    async getAll(){
        const result = await Axios.get(`${apiPath}/categories/getall`);
        return result;
    }
}

export default new CategoryController();