import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatTableModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { TaskListComponent } from './component/task-list/task-list.component';
import { ProjectMainHeaderComponent } from './component/project-main-header/project-main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ProjectMainHeaderComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
