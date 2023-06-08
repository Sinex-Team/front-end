import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardHomeComponent } from './pages/dashboard-page/dashboard-home/dashboard-home.component';

const routes: Routes = [
  { path: 'reg', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardPageComponent, children: [
      { path: 'home', component: DashboardHomeComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
