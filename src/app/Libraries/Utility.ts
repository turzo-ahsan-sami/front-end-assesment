import { from, of, zip } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { SortArray } from './SortArray';

import * as moment from 'moment';

export class Utility {

    public static SQLDateFormat = 'YYYY-MM-DD';

    public static log(response: any) {
        console.log(response);
        return response;
    }


    public static encodeParams(params: any): string {         
        let body: string = "";  
        for (let key in params) {  
            if (body.length) {  
                body += "&";  
            }  
            body += key + "=";  
            body += encodeURIComponent(params[key]);  
        }  
        return body;  
    }


    public static encode(obj: object): string{
        if(obj==null) return "";
        return btoa(JSON.stringify(obj));
    }


    public static decode(str: string): object{
        try{
            if(str==null || str.trim().length==0) return null;
            return JSON.parse(atob(str));    
        }
        catch(e){
            return null;
        }
    }


    public static isNullOrUndefined(input: any){
        if(input==null || input== undefined ||input == "undefined" || input == "" || input == 0 || input == '0') return true;
        else return false;
    }



    public static  valueDouble(value: any){
        if(value==null || value==undefined || value=="undefined" || value=="" || value=="0" || value==0) return 0;
        value = value.toString().trim();        
        value = value.toString().replace(",","");
        value = value.toString().replace(",","");
        value = value.toString().replace(",","");   
        if(isNaN(value)) return 0;
        return parseFloat(value);
    }
   
    public static  valueInt(value: any){
        if(value==null || value==undefined || value=="undefined" || value=="" || value=="0" || value==0) return 0;
        value = value.toString().trim();   
        value = value.toString().replace(",","");
        value = value.toString().replace(",","");
        value = value.toString().replace(",","");        
        if(isNaN(value)) return 0;
        return parseInt(value);
    }



    public static ShortName(employeename: string){
        return employeename.replace('Mr.','').replace('Mrs.','').replace('MD','').replace('MD.','').replace('Md','').replace('Md.','').replace('.','').replace(' ','');
    }
    

    public static getPercentOfValue(value: number, percent: number){
		if(Utility.isNullOrUndefined(value)) return 0;
        if(Utility.isNullOrUndefined(percent) || Utility.valueDouble(percent) == 100) return value;
        else {
            return ( ( Utility.valueDouble(value) * Utility.valueDouble(percent) ) / 100 );
        }
    }
    
    public static getBase64(Source: string ):string{
        return btoa(Source);
    }


    public static getTotalValue(Data: any[], fieldName: string){
        var total = 0;
        Data.forEach(element =>  total += Utility.valueDouble(element[fieldName]));
        return total;
    }



    public static getLength(Data: any[]): number{
        if(Data!=null && Data.length>0) return Data.length;
        else return 0;
    }


    public static getValueByIndex(Data: any[], Index: number): any{
        if(Data==null || Data ==undefined ||  Data.length==0) return null;
        else return Data[Index];
    }

    public static setDataFilter(Data: any[], ColumnName: string, FilterValue: any): any[]{
        if(FilterValue=="0") return Data;
        return Data.filter(r => r[ColumnName] == FilterValue);
    }



    public static FindMaximum(data: any[], fieldName: string){
        if(Utility.getLength(data) == 0) return;
        data.forEach(item => { item[fieldName] = Utility.isNullOrUndefined(item[fieldName]) ? '0' : item[fieldName] });
        var maximum = data[0][fieldName]; 
        data.forEach(item => { maximum = item[fieldName] > maximum ? item[fieldName] : maximum });
        return maximum;
    }
    
    public static FindMinimum(data: any[], fieldName: string){
        if(Utility.getLength(data) == 0) return;
        data.forEach(item => { item[fieldName] = Utility.isNullOrUndefined(item[fieldName]) ? '0' : item[fieldName] });
        var minimum = data[0][fieldName]; 
        data.forEach(item => { minimum = item[fieldName] < minimum ? item[fieldName] : minimum });
        return minimum;
    }

    

    public static SearchFilter(Data: any[], searchText: string){
        if (!Data) return [];     
        if (!searchText) return Data;       

        const searchTerm = searchText.trim().toLowerCase();
		const keys = Object.keys(Data[0]).map(k => k.toLowerCase());

		let filteredList = Data.filter((item) => {
			var values = Object.values(item);
			var flag = false
			values.forEach((val) => {
				if (val) {
					if (val.toString().toLowerCase().indexOf(searchTerm) > -1) {
						flag = true;
						return;
					}
				}
			});
			if (flag) return item;
        });
        
        return filteredList;
    }


    public static GroupByProperty(Data: any[], Propertyname: string){
        var groupedData = [];
        if(Utility.getLength(Data) == 0) return groupedData;
        Data = SortArray.sortArrayAsc(Data, Propertyname);
        from(Data).pipe(
			groupBy(item => item[Propertyname]),
			mergeMap(group => group.pipe(toArray()))
        ).subscribe(val => groupedData.push(val));        
        return groupedData;
    }


    public static setGroupRow(Data: any[], PropertyName: string) {
        Data = SortArray.sortArrayAsc(Data, PropertyName);
        var ColumnValue = "";
		for(var x=0; x< Data.length; x++) Data[x][PropertyName] != ColumnValue ? ColumnValue = Data[x][PropertyName] : Data[x][PropertyName] = "";
    }


    public static removeDuplicates(Data: any[], fielName: string) {
		return Data.filter((obj, pos, arr) => {
			return arr.map(mapObj => mapObj[fielName]).indexOf(obj[fielName]) === pos;
		});
	}


	public static removeNull(Data: any[], fieldName: string){
        for(var x=0; x<Data.length; x++){
			if(Utility.isNullOrUndefined(Data[x][fieldName])) Data.splice(x,1);
        }
        return Data;
	}


    public static generateMonths(num: number){

        var months: {
			MonthNo: number,
			MonthName: string,
		}[] = [];

        for(var x=0; x<=num; x++){
            months.push({
                MonthNo: x,
                MonthName: moment().add(x, 'months').format('MMM YY')
            });
        }
        return months;
    }


    public static generateMonthsofYear(){
        var months: {
			MonthNo: number,
			MonthName: string,
		}[] = [];

        for(var x=1; x<=12; x++){
            months.push({
                MonthNo: x,
                MonthName: moment().startOf('year').add(x-1, 'months').format('MMM YY')
            });
        }
        return months;
    }


}