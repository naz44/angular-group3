import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupComponent} from './group/group.component'
import { Group2Component } from './group2/group2.component';
import { Group3Component } from './group3/group3.component';

const routes: Routes = [
  {
    path:'Employee',
    component  : GroupComponent
  },
  {
    path:'Persons',
    component :Group2Component
  },
  {
    path:'you',
    component :Group3Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
