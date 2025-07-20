import { Injectable } from '@angular/core';
import { Hamster } from './hamster-list/hamster';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

//Código que maneja la lígica del carrito
export class HamsterCart {//El SERVICIO es una clase publica
  
  constructor(){}

  private _cartList: Hamster [] = [];
  cartList: BehaviorSubject<Hamster[]> = new BehaviorSubject<Hamster[]>([]);

  //AGREGAR
  addToCart(hamster: Hamster) {
    //Lo que quiere que pase el usuario
    //Busca si hay algún Hamster en la lista del mismo tipo
    let item: Hamster | undefined  = this._cartList.find((v1) => v1.type == hamster.type);
    if (!item) {
      this._cartList.push({... hamster}); //Si no existe en la lista hay que agregarlo y clonamos el objeto

    } else { //Si ya existe
      item.quantity += hamster.quantity;
    }

    
    console.log(this._cartList);
    //throw new Error('Method not implemented.');

    this.cartList.next(this._cartList); //Notifoca que hubo un cambio, equivalente al emit de eventos
  }
  


  
}
