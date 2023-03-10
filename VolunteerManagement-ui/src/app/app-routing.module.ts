import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ViewMainComponent } from './layout/mainPage/view-main/view-main.component';
import { LoginReactiveFormsComponent } from './login/login-reactive-forms/login-reactive-forms.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import { AuthGuard } from './services/guard/auth.guard';
import { AuthService } from './services/guard/auth.service';
import { RoleGuard } from './services/guard/role.guard';
import { AllTasksComponent } from './tasks/all-tasks/all-tasks.component';
import { ViewTasksComponent } from './tasks/view-tasks/view-tasks.component';
import { ViewVolunteerComponent } from './volunteers/view-volunteer/view-volunteer.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMainComponent
  },
  {
    path: 'volunteers',
    component: VolunteersComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'volunteers/admin',
    component: VolunteersComponent,
    canActivate:[AuthGuard, RoleGuard],
  },
  {
    path: 'volunteers/:id',
    component: ViewVolunteerComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'volunteers/admin/:id',
    component: ViewVolunteerComponent,
    canActivate:[AuthGuard, RoleGuard]
  },
  {
    path: 'user/authentificate',
    component: LoginReactiveFormsComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'create/user',
    component: RegisterUserComponent
  },
  {
    path: 'tasks/:id',
    component: ViewTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'tasks',
    component: AllTasksComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
