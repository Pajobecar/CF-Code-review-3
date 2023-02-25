import { Injectable } from '@angular/core';
import { IProducts } from './objects';



@Injectable({
  providedIn: 'root'
})
export class CartService {
cart: Array<IProducts> = [];
  constructor() { }
  addToCart(obj : IProducts){
    this.cart.push(obj);
  }
  getCart(){
    return this.cart;
  }
}
