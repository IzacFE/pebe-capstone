import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpClientModule } from '@angular/common/http';

// primeng
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyerComponent } from './pages/buyer/buyer/buyer.component';
import { RequesterComponent } from './pages/requester/requester/requester.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    BuyerComponent,
    RequesterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    TableModule,
    CommonModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
