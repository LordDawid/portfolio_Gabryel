import { Pipe, PipeTransform } from '@angular/core';

const MONTHS = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 
  'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 
  'listopad', 'grudzień']; 
@Pipe({
  name: 'polishDate',
  standalone: false
})
export class PolishDatePipe implements PipeTransform {
  date = new Date();
  monthNumber = 0; 
  month = ''; 

  transform(value: any, args?: any): any {
      this.date = new Date(value)
      this.monthNumber = this.date.getMonth();
      this.month = MONTHS[this.monthNumber]
      return this.date.getDate() + ' ' + this.month + '  ' + this.date.getFullYear();
  }

}
