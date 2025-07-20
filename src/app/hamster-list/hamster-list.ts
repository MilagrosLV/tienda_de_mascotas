import { Component } from '@angular/core';
import { Hamster } from "./hamster";
import { HamsterCart } from '../hamster-cart'; //Importar SERVICIO

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

  constructor(private cart: HamsterCart){ //El COMPONENTE necesita un Service. 
  // Inyectamos la dependencia del servicio. 
  // Se crea una variable privada con una instancia del servicio.    
  }

  addToCart(hamster: Hamster): void{ //usamos service
    this.cart.addToCart(hamster);

    //Control de STOCK
    hamster.stock -= hamster.quantity;
    hamster.quantity = 0; //Reiniciar a 0 para la sig compra refreshStock()

  }

  mError(m: string){
    alert(m);
  }

}
