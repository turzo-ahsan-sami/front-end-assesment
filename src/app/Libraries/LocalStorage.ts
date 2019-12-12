import { Utility } from './Utility';

export class LocalStorage{

    public static BookListToken: string = 'book_list';

    public static getLocalStorageItem(token: string){
        var data;
        data = JSON.parse(localStorage.getItem(token));
        if(Utility.isNullOrUndefined(data)) return;
        return data;
    }
    
    public static setLocalStorageItem(token: string, value: string){
        localStorage.setItem(token, value);        
    }

}