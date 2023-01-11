import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteersComponent } from './volunteers/volunteers.component';

const routes: Routes = [
  {
    path: '',
    component: VolunteersComponent
  },
  {
    path: 'volunteers',
    component: VolunteersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
