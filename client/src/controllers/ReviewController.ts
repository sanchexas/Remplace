import Axios from 'axios';
import apiPath from '../api-path';
Axios.defaults.withCredentials = true;

class ReviewController{
    async create(data: object){
        const response = await Axios.post(`${apiPath}/reviews/create`, data);
        return response;
    }
}

export default new ReviewController();