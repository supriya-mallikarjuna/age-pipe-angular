import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  
  
  currentYear=new Date().getFullYear();
  transform(value: number): unknown {
   var age= this.currentYear-value
    return age;
  }

}
