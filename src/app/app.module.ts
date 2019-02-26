import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatTableModule, MatNativeDateModule, MatInputModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { NgScrollbarModule } from 'ngx-scrollbar';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    NgScrollbarModule,
    MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
