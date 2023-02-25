import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products, IProducts } from '../objects';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
product: IProducts = {} as IProducts;
id: number = 0;
constructor(private route: ActivatedRoute, private cs: CartService){}
addToCart(){
  alert("This item has been added to the cart");
  this.cs.addToCart(this.product);
}
ngOnInit(): void {
  this.route.params.subscribe((params: Params) =>{
    this.id = +params["id"];
    this.product = products[this.id];
  })
}
}
