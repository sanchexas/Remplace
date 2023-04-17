import Axios from 'axios';
import { CartProductModel } from '../models/CartProductModel';
Axios.defaults.withCredentials = true;

class CartController{
    addToCart(product: CartProductModel){
        const remcart = localStorage.getItem('remcart');
        const generalPrice = localStorage.getItem('general_price');
        if(remcart !== null && product !== undefined && generalPrice !== null){
            const cartObj: object[] = JSON.parse(remcart) || [];
            let generalPriceObj: number = JSON.parse(generalPrice);
            product.cart_quantity = 1;
            product.full_price = product.price;
            generalPriceObj += product.price;
            cartObj.push(product);
            localStorage.setItem('general_price', '' + generalPriceObj);
            localStorage.setItem('remcart', JSON.stringify(cartObj));
        }
    }
    deleteFromCart(key: number){
        const remcart = localStorage.getItem('remcart');
        const generalPrice = localStorage.getItem('general_price');
        if(remcart !== null && generalPrice !== null){
            const cartObj: CartProductModel[] = JSON.parse(remcart) || [];
            let generalPriceObj: number = JSON.parse(generalPrice);
            generalPriceObj -= cartObj[key].full_price;
            cartObj.splice(key, 1);
            localStorage.setItem('general_price', '' + generalPriceObj);
            localStorage.setItem('remcart', JSON.stringify(cartObj));
            return true;
        }
        return false;
    }
    addQuantity(key: number): number{
        const remcart = localStorage.getItem('remcart');
        const generalPrice = localStorage.getItem('general_price');
        if(remcart !== null && generalPrice !== null){
            const cartObj: CartProductModel[] = JSON.parse(remcart) || [];
            let generalPriceObj: number = JSON.parse(generalPrice);
            cartObj[key].cart_quantity += 1;
            cartObj[key].full_price += cartObj[key].price;
            generalPriceObj += cartObj[key].price;
            localStorage.setItem('general_price', '' + generalPriceObj);
            localStorage.setItem('remcart', JSON.stringify(cartObj));
            return cartObj[key].cart_quantity += 1;
        }
        return 0;
    }
    subQuantity(key: number): number{
        const remcart = localStorage.getItem('remcart');
        const generalPrice = localStorage.getItem('general_price');
        if(remcart !== null && generalPrice !== null){
            const cartObj: CartProductModel[] = JSON.parse(remcart) || [];
            let generalPriceObj: number = JSON.parse(generalPrice);
            if(cartObj[key].cart_quantity > 1){
                cartObj[key].cart_quantity -= 1;
                cartObj[key].full_price -= cartObj[key].price;
                generalPriceObj -= cartObj[key].price;
                localStorage.setItem('general_price', '' + generalPriceObj);
                localStorage.setItem('remcart', JSON.stringify(cartObj));
                return cartObj[key].cart_quantity -= 1;
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