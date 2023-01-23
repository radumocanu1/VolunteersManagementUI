import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMainComponent } from './layout/mainPage/view-main/view-main.component';
import { LoginReactiveFormsComponent } from './login/login-reactive-forms/login-reactive-forms.component';
import { AuthGuard } from './services/guard/auth.guard';
import { AuthService } from './services/guard/auth.service';
import { ViewVolunteerComponent } from './volunteers/view-volunteer/view-volunteer.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMainComponent
  },
  {
    path: 'volunteers',
    component: VolunteersComponent
  },
  {
    path: 'volunteers/admin',
    component: VolunteersComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'volunteers/:id',
    component: ViewVolunteerComponent
  },
  {
    path: 'volunteers/admin/:id',
    component: ViewVolunteerComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'user/authentificate',
    component: LoginReactiveFormsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
