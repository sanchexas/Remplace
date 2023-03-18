import Axios from 'axios';
Axios.defaults.withCredentials = true;

class CartController{
    //Работа с localstorage. 
    addToCart(product: object){
        const remcart = localStorage.getItem('remcart');
        if(remcart !== null){
            const a = JSON.parse(remcart) || [];
            console.log(typeof a);
            a.push(product);
            localStorage.setItem('remcart', JSON.stringify(a));
        }
    }
    deleteFromCart(){

    }
    addQuantity(){

    }
    subQuantity(){

    }
    saveProducts(){
        
    }
}

export default new CartController();