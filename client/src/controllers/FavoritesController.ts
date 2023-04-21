import { IFavoriteModel } from "../models/IFavoriteModel";


class FavoritesController{
    addToFav(favProduct: IFavoriteModel){
        const getFavorites = localStorage.getItem('favorite');
        if(getFavorites){
            const favoritesToObj: object[] = JSON.parse(getFavorites);
            favoritesToObj.push(favProduct);
            localStorage.setItem('favorite', JSON.stringify(favoritesToObj));
        }
    }
    deleteFromFav(id: string | number | null | undefined){
        const getFavorites = localStorage.getItem('favorite');
        if(getFavorites){
            const favoritesToObj: IFavoriteModel[] = JSON.parse(getFavorites) || [];
            for(let i = 0; i < favoritesToObj.length;){
                if(favoritesToObj[i].id === id){
                    favoritesToObj.splice(i, 1);
                    localStorage.setItem('favorite', JSON.stringify(favoritesToObj));
                }
                i++;
            }
        }
    }
    isInFav(id: string | number | null | undefined){
        const getFavorites = localStorage.getItem('favorite');
        if(getFavorites !== null){
            const favoritesToObj: IFavoriteModel[] = JSON.parse(getFavorites) || [];
            for(let i = 0; i < favoritesToObj.length;){
                if(favoritesToObj[i].id === id){
                    return true;
                }
                i++;
            }
        }
    }
}

export default new FavoritesController();