import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  NotFoundComponent} from './not-found-pages/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
