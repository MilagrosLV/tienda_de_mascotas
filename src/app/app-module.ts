import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module'; //importar las rutas
import { App } from './app';
import { HamsterList } from './hamster-list/hamster-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';

import {FormsModule} from '@angular/forms';
import { ShopAbout } from './shop-about/shop-about';
import { ShopHamsters } from './shop-hamsters/shop-hamsters';
import { InputInteger } from './input-integer/input-integer'; //Permite Two-Ways Data Binding

@NgModule({
  declarations: [ //Declaro todo los componentes  que voy a usar
    App,
    HamsterList,
    ShoppingCart,
    ShopAbout,
    ShopHamsters,
    InputInteger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //indica dónde está la config de las rutas
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App] //Este es el root component
})
export class AppModule { }
