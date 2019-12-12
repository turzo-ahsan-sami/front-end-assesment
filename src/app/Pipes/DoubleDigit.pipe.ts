import { Pipe, PipeTransform } from '@angular/core';
import { Utility } from '../Libraries/Utility';

@Pipe({name:'DoubleDigit'})

export class DoubleDigit implements PipeTransform{

    transform(Value:number):string{

        if(Utility.isNullOrUndefined(Value)) return "";                
        if(Value==0) return "00";

        if(Value<10) return "0" + Value.toFixed().toString();
        else return Value.toString();
    }
}