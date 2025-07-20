import { Component } from '@angular/core';
import { Hamster } from "./hamster";

@Component({
  selector: 'app-hamster-list',
  standalone: false,
  templateUrl: './hamster-list.html',
  styleUrl: './hamster-list.scss'
})

export class HamsterList { //"export" makes the inteface public

  hamsters: Hamster[] = [ //Un arreglo, una colección del tipo Hamster
    //MOCK de Objeto literal
    {
      type: "Phodopus sungorus",
      price: 100,
      stock: 5,
      image: "../../assets/img/hamster_ruso.jpg",
      clearance: false,
      quantity: 0,
    },

    {
      type: "Cricetulus griseus",
      price: 200,
      stock: 7,
      image: "../../assets/img/hamster_chino.jpg",
      clearance: true,
      quantity: 0,
    },

    {
      type: "Mesocricetus auratus",
      price: 150,
      stock: 0,
      image: "../../assets/img/hamster_sirio.jpg",
      clearance: false,
      quantity: 0,
    },

  ];

  constructor(){ }

  upQuantity(hamster: Hamster): void{
    if (hamster.quantity < hamster.stock) {
      hamster.quantity++;
    }
  }

  downQuantity(hamster: Hamster): void{
    if (hamster.quantity > 0) {
      hamster.quantity--;
    }
  }

  changeQuantity(event: Event, hamster: Hamster): void {
    event.preventDefault();
    if ((hamster.quantity < 0) && (hamster.quantity > hamster.stock) ) {
      hamster.quantity = 0;
    }
  }

}
