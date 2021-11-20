import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

 imports: [BrowserModule, AppRoutingModule, HttpClientModule];

import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SigninComponent } from './signin/signin.component';
import { CustComponent } from './cust/cust.component';
import { AdminComponent } from './admin/admin.component';
import { CustserviceService } from './custservice.service';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { EditcustomerdetailsComponent } from './editcustomerdetails/editcustomerdetails.component';
import { ProfilepageforcustomerComponent } from './profilepageforcustomer/profilepageforcustomer.component';
import { DisplaypageforcustomerComponent } from './displaypageforcustomer/displaypageforcustomer.component';
import { CheckComponent } from './check/check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustregistrationService } from './custregistration.service';
import { CartComponent } from './cart/cart.component';
import { DoneComponent } from './done/done.component';


@NgModule({
  declarations: [
    AppComponent,
    
    RegistrationComponent,
         HomepageComponent,
         AboutusComponent,
         SigninComponent,
         CustComponent,
         AdminComponent,
         AlldetailsComponent,
         EditcustomerdetailsComponent,
         ProfilepageforcustomerComponent,
         DisplaypageforcustomerComponent,
         CheckComponent,
         CartComponent,
         DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustserviceService, CustregistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
