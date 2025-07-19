import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HamsterList } from './hamster-list/hamster-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';

@NgModule({
  declarations: [ //Declaro todo los componentes  que voy a usar
    App,
    HamsterList,
    ShoppingCart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App] //Este es el root component
})
export class AppModule { }
