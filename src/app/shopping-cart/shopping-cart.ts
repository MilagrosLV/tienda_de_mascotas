import { Component } from '@angular/core';
import { Hamster } from "../hamster-list/hamster";
import { HamsterCart } from '../hamster-cart';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {
  constructor(private cart: HamsterCart){ 
    //La misma INSTANCIA que en hamster-list.ts
  }




  emptyCart (cart: Hamster): void {
    
  }
}


