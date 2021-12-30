import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginCardComponent } from './components/auth/login-card/login-card.component';
import { InputFieldComponent } from './components/input/input-field/input-field.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/main/dashboard.component';
import { UserSettingsComponent } from './components/auth/user-settings/user-settings.component';
import { UserProfileComponent } from './components/auth/user-profile/user-profile.component';
import { NavTopbarComponent } from './components/layout/nav-topbar/nav-topbar.component';
import { NavSidebarComponent } from './components/layout/nav-sidebar/nav-sidebar.component';
import { InputSelectComponent } from './components/input/input-select/input-select.component';
import { LayoutFooterComponent } from './components/layout/layout-footer/layout-footer.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

import { AppService } from './services/app.service';
import { ConfigService } from './services/config.service';

import { RootGuard } from './guards/root.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    InputFieldComponent,
    LoginComponent,
    DashboardComponent,
    UserSettingsComponent,
    UserProfileComponent,
    NavTopbarComponent,
    NavSidebarComponent,
    InputSelectComponent,
    LayoutFooterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ConfigService,
    AppService,
    RootGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
