import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVolunteerComponent } from './volunteers/view-volunteer/view-volunteer.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

const routes: Routes = [
  {
    path: '',
    component: VolunteersComponent
  },
  {
    path: 'volunteers',
    component: VolunteersComponent
  },
  {
    path: 'volunteers/:id',
    component: ViewVolunteerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
