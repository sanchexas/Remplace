import Axios from 'axios';
import { CartProductModel } from '../models/CartProductModel';
Axios.defaults.withCredentials = true;

class CartController{
    async addToCart(product: CartProductModel){
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null && product !== undefined){
            const cartObj: object[] = JSON.parse(remcart) || [];
            product.quantity = '1';
            product.full_price = product.price;
            cartObj.push(product);
            localStorage.setItem('remcart', JSON.stringify(cartObj));
        }
    }
    async deleteFromCart(){

    }
    async addQuantity(){

    }
    async subQuantity(){

    }
    async saveProducts(){
        
    }
    async getAll(){
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null){
            const cartObj = JSON.parse(remcart) || [];
            return cartObj;
        }
        return [];
    }
}

export default new CartController();