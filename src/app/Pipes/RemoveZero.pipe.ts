import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'RemoveZero'})
export class RemoveZeroPipe implements PipeTransform{
    
    transform(value:number):string{
        if(value == NaN || value == undefined || value == 0 || value == null) return null;
        else return value.toString();             
    }
}