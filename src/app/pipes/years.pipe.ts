import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years',
  standalone: false
})
export class YearsPipe implements PipeTransform {
  result: any = [];

  transform(value: any, ...args: any[]): any {
    value.forEach((item: any) => {
      if(this.result.indexOf(new Date(item.dateCreated).getFullYear()) < 0) {
        this.result.push(new Date(item.dateCreated).getFullYear());
      }
    });
    
    console.log(this.result)
    return this.result;
  }
}
