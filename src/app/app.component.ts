import { Component } from '@angular/core';
import { IGallery } from './interfaces/IGallery'; 
import { Galleries } from './constants/galleries.constant'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string;
  year: number;
  constructor() {
    this.title = 'Moje podróże';
    this.description = 'Gdzie, kiedy i czemu mnie tam wywiało.';
    this.galleries = Galleries;
    this.searchValue = '';
    this.year = 0;
  }
  setYear(year: number){
    this.year = year;
    console.log(year)
  }
trackByGalleryId(index: number, gallery: any): 
  number {
  return gallery.id
}

}
