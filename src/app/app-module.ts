import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HamsterList } from './hamster-list/hamster-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';

import {FormsModule} from '@angular/forms'; //Permite Two-Ways Data Binding

@NgModule({
  declarations: [ //Declaro todo los componentes  que voy a usar
    App,
    HamsterList,
    ShoppingCart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App] //Este es el root component
})
export class AppModule { }
