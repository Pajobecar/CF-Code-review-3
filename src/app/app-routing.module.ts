import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"", component: HomeComponent
},{
  path:"about", component: AboutComponent
},{
  path:"menu", component: MenuComponent
},{
  path:"cart", component: CartComponent 
},{
  path:"details/:id", component: DetailsComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
