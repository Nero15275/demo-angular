import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BuynowComponent } from './buynow/buynow.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:SigninComponent,
    path:'signin'
  },
  {
    component:AboutusComponent,
    path:'aboutus'
  },
  {
    component:ContactusComponent,
    path:'contactus'
  },
  {
    component:SignupComponent,
    path:'signup'
  },
  {
    component:BuynowComponent,
    path:'buynow'
  },

  {
    component:CartComponent,
    path:'cart'
  },
  {
    component:NotfoundComponent,
    path:'**'
  }
 
 
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
