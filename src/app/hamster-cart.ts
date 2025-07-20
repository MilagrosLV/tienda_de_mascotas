import { Injectable } from '@angular/core';
import { Hamster } from './hamster-list/hamster';

@Injectable({
  providedIn: 'root'
})

//Código que maneja la lígica del carrito
export class HamsterCart {//El SERVICIO es una clase publica
  
  constructor(){}

  cartList: Hamster [] = [];

  //AGREGAR
  addToCart(hamster: Hamster) {
    this.cartList.push(hamster);
    console.log(this.cartList.length);
    //throw new Error('Method not implemented.');
  }
  


  
}
