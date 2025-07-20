import { Component } from '@angular/core';
import { Hamster } from "../hamster-list/hamster";

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {
  cart: Hamster[] = [
    //MOCK
    {
      type: "Phodopus sungorus",
      price: 100,
      stock: 5,
      image: "../../assets/img/hamster_ruso.jpg",
      clearance: false,
      quantity: 0,
    },
  ]
}


