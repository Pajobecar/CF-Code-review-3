import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../objects';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart : Array<IProducts> = []; 
  sum : number = 0;
  service : number = 0;
  discount: number = 0;
constructor(private cs: CartService){}
ngOnInit(): void {
  
  this.cart = this.cs.getCart();
  if (this.cart.length != 0){
  this.sum = this.cart.map(a => a.price).reduce(function(a, b)
  {
    return a + b;
  });
}
  this.service = +(this.sum * 0.10).toFixed(2);
  this.discount = +(this.sum * 0.85).toFixed(2);
}

customer = new FormGroup({
  name: new FormControl('',Validators.required),
  adress: new FormControl('',Validators.required)
});
onSubmit(){
  if(this.customer.valid){
    let order = this.customer.value;
    alert("Thanks for ordering! You will recive your order as soon as possible.");
    this.customer.reset();
  }
  }
}
