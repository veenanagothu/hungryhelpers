import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { OurmenuComponent } from './ourmenu/ourmenu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'ourmenu',component:OurmenuComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'blog',component:BlogComponent},
 {path:'cart',component:CartComponent},
 {path:'aboutus',component:AboutusComponent},
 {path:'footer',component:FooterComponent},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'logo',component:LogoComponent},
 {path:'**',component:PagenotfoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
