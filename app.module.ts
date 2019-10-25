import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { collegeComponent } from './college.component';
import { personComponent } from './persondetails/person.component';
import { GroupComponent } from './group/group.component';
import { Group2Component } from './group2/group2.component';
import { Group3Component } from './group3/group3.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    collegeComponent,
    personComponent,
    GroupComponent,
    Group2Component,
    Group3Component
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