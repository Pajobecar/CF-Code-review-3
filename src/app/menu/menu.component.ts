import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import { products, IProducts } from '../objects';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products : Array<IProducts> = products;
constructor(private cs: CartService){}
addToCart(obj: IProducts){
  alert("Item is added to the cart");
  this.cs.addToCart(obj);
}
}
