import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //importar router

//importar componentes
import { ShopHamsters } from './shop-hamsters/shop-hamsters';
import { ShopAbout } from './shop-about/shop-about';


const routes: Routes = [ //Ponemos todo el routeo de la app, creamos las rutas
  
  {//Raíz del proyecto
    path: '',
    redirectTo: 'hamsters',
    pathMatch: 'full'
  },
  {
    path: 'hamsters',
    component: ShopHamsters
  },
  {
    path: 'about',
    component: ShopAbout
  },
];

@NgModule({ //Define el router
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
