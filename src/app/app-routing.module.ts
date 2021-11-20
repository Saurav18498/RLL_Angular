import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { AuthGuard } from './auth.guard';
import { CheckComponent } from './check/check.component';
import { CustComponent } from './cust/cust.component';
import { DisplaypageforcustomerComponent } from './displaypageforcustomer/displaypageforcustomer.component';
import { EditcustomerdetailsComponent } from './editcustomerdetails/editcustomerdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilepageforcustomerComponent } from './profilepageforcustomer/profilepageforcustomer.component';

import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { DoneComponent } from './done/done.component';
const routes: Routes = [
  
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path:'registration', component:RegistrationComponent},
{path:'homepage', component:HomepageComponent},
{path:'aboutus', component:AboutusComponent},
{path:'signin', component:SigninComponent},
{path:'cust', component:CustComponent},
{path:'admin', component:AdminComponent},
{path:'alldetails', component:AlldetailsComponent},
{path:'editcustomerdetails', component:EditcustomerdetailsComponent},
{path:'profilepageforcustomer', component:ProfilepageforcustomerComponent},
{path:'displaypageforcustomer', component:DisplaypageforcustomerComponent
},
{path:'check', component:CheckComponent},
{path:'cart', component:CartComponent},
{path:'done', component:DoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
