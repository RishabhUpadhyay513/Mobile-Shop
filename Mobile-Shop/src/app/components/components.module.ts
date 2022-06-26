import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    AddToCartComponent,
    AdminDashComponent,
    PageNotFoundComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    GooglePayButtonModule,
  ],
})
export class ComponentsModule {}
