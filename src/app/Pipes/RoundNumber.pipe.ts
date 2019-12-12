import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'RoundNumber'})

export class RoundNumberPipe implements PipeTransform{

    transform(value:number):string{
        if(value==NaN || value==undefined) return "";
        return Math.round(value).toLocaleString('en-IN');        
    }
}