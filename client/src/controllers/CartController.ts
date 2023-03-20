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
    async deleteFromCart(){

    }
    async addQuantity(key: number){
        /*
            FUCK TYPESCRIPT!!! 
            Like bruh i know that value WONT BE UNDEFINED! 
            Why you make me do this all the time? - if a != undefined, if b != undefined, if c != undefined, if d != undefined... etc etc
            it makes my code look ugly
            i miss Js tbh
        */
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null){
            const cartObj: CartProductModel[] = JSON.parse(remcart) || [];
            let productQuantity = cartObj[key].quantity;
            if(productQuantity){
                productQuantity += 1;
                cartObj[key].quantity = productQuantity;
            }
            console.log(productQuantity)
            localStorage.setItem('remcart', JSON.stringify(cartObj));
        }
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