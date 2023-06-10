import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './layouts/header/header.component';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardHomeComponent } from './pages/dashboard-page/dashboard-home/dashboard-home.component';
import { DashboardHistoryComponent } from './pages/dashboard-page/dashboard-history/dashboard-history.component';
import { DashboardPumpSettingsComponent } from './pages/dashboard-page/dashboard-pump-settings/dashboard-pump-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    HeaderComponent,
    DashboardPageComponent,
    DashboardHomeComponent,
    DashboardHistoryComponent,
    DashboardPumpSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
