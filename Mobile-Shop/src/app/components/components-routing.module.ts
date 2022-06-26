import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'connect',
    component: ContactUsComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'addToCart',
    component: AddToCartComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'admin',
    component: AdminDashComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
