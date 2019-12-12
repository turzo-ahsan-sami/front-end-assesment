export class SortArray {

private static FieldName : string = "";
    private static PreviousFieldName : string = "";
    private static SortIndex : number = 0;


    public static sortArray(Data: any[], FieldName: string): any[]{
        if(SortArray.PreviousFieldName!="" && SortArray.PreviousFieldName!= SortArray.FieldName) 
        {
            SortArray.PreviousFieldName = SortArray.FieldName;
            SortArray.SortIndex = 0;
        }
        else 
        {
            if(SortArray.SortIndex==0) SortArray.SortIndex = 1;
            else SortArray.SortIndex = 0;
        }

        SortArray.FieldName = FieldName;
        
        if(SortArray.SortIndex==0) return Data.sort(SortArray.sortByASC);
        else  return Data.sort(SortArray.sortByDESC);
    }

    public static sortArrayAsc(Data: any[], FieldName: string): any[]{
        if(SortArray.PreviousFieldName!="" && SortArray.PreviousFieldName!= SortArray.FieldName) 
        {
            SortArray.PreviousFieldName = SortArray.FieldName;
            SortArray.SortIndex = 0;
        }
        else 
        {
            if(SortArray.SortIndex==0) SortArray.SortIndex = 1;
            else SortArray.SortIndex = 0;
        }

        SortArray.FieldName = FieldName;
        
        return Data.sort(SortArray.sortByDESC);
    }

    public static sortArrayDesc(Data: any[], FieldName: string): any[]{
        if(SortArray.PreviousFieldName!="" && SortArray.PreviousFieldName!= SortArray.FieldName) 
        {
            SortArray.PreviousFieldName = SortArray.FieldName;
            SortArray.SortIndex = 0;
        }
        else 
        {
            if(SortArray.SortIndex==0) SortArray.SortIndex = 1;
            else SortArray.SortIndex = 0;
        }

        SortArray.FieldName = FieldName;
        
        return Data.sort(SortArray.sortByASC);
    }

    public static sortByASC(a,b){
        const item1 = a[SortArray.FieldName]; 
		const item2 = b[SortArray.FieldName]; 
        let comparison = 0;
        
        if (item1 < item2) comparison = 1;
        else if (item1 > item2) comparison = -1;

		return comparison;
    }

    public static sortByDESC(a,b){
        const item1 = a[SortArray.FieldName]; 
		const item2 = b[SortArray.FieldName]; 
		let comparison = 0;

        if (item1 > item2) comparison = 1;
        else if (item1 < item2) comparison = -1;
        
		return comparison;
    }


}