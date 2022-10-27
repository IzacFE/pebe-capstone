import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BuyerComponent } from './pages/buyer/buyer/buyer.component';
import { ErrorComponent } from './pages/error/error.component';
import { RequesterComponent } from './pages/requester/requester/requester.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'buyer', component: BuyerComponent },
  { path: 'requester', component: RequesterComponent },
  { path: 'auth/login', component: LoginComponent },
  {
    path: 'auth/signup',
    component: RegisterComponent,
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
