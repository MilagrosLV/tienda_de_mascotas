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
  {
    type: "Phodopus sungorus",
    price: 100,
    stock: 5,
    image: "../../assets/img/hamster_ruso.jpg"
  },

  {
    type: "Cricetulus griseus",
    price: 200,
    stock: 7,
    image: "../../assets/img/hamster_chino.jpg"
  },

   {
    type: "Mesocricetus auratus",
    price: 150,
    stock: 3,
    image: "../../assets/img/hamster_sirio.jpg"
  },

  ];

  constructor(){ }
}
