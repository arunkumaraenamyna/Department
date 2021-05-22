import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentDetailFormComponent } from './department-details/department-detail-form/department-detail-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentDetailsComponent,
    DepartmentDetailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
