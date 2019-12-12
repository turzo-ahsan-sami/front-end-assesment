import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Filter' })

export class FilterPipe implements PipeTransform {

    transform(Data: any[], searchText: string): any[] {
        
        if (!Data) {
            return [];
        }
        
        if (!searchText) {
            return Data;
        }
        
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

}