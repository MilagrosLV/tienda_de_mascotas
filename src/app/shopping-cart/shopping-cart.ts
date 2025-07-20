import { Component } from '@angular/core';
import { Hamster } from "../hamster-list/hamster";
import { HamsterCart } from '../hamster-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {
  
  cartList$: Observable<Hamster[]> | undefined;
  constructor(private cart: HamsterCart){ 
    //La misma INSTANCIA que en hamster-list.ts

    this.cartList$ = cart.cartList.asObservable();
  }




  emptyCart (cart: Hamster): void {
    
  }
}


