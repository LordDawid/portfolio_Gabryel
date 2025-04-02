import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { SearchGalleriesPipe } from './pipes/search-galleries.pipe';
import { YearsPipe } from './pipes/years.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe,
    SearchGalleriesPipe,
    YearsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
