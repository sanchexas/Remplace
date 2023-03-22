import Axios from 'axios';
import { CartProductModel } from '../models/CartProductModel';
Axios.defaults.withCredentials = true;

class CartController{
    async addToCart(product: CartProductModel){
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null && product !== undefined){
            const cartObj: object[] = JSON.parse(remcart) || [];
            product.quantity = 1;
            product.full_price = product.price;
            cartObj.push(product);
            localStorage.setItem('remcart', JSON.stringify(cartObj));
        }
    }
    async deleteFromCart(key: number){
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null){
            const cartObj: CartProductModel[] = JSON.parse(remcart) || [];
            cartObj.splice(key, 1);
            localStorage.setItem('remcart', JSON.stringify(cartObj));
        }
    }
    addQuantity(key: number): number{
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null){
            const cartObj: CartProductModel[] = JSON.parse(remcart) || [];
            cartObj[key].quantity += 1;
            cartObj[key].full_price += cartObj[key].price;
            localStorage.setItem('remcart', JSON.stringify(cartObj));
            return cartObj[key].quantity += 1;
        }
        return 0;
    }
    subQuantity(key: number): number{
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null){
            const cartObj: CartProductModel[] = JSON.parse(remcart) || [];
            if(cartObj[key].quantity > 1){
                cartObj[key].quantity -= 1;
                cartObj[key].full_price -= cartObj[key].price;
                localStorage.setItem('remcart', JSON.stringify(cartObj));
                return cartObj[key].quantity -= 1;
            }
        }
        return 0;
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