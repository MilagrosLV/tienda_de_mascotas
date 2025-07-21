import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-shop-about',
  standalone: false,
  templateUrl: './shop-about.html',
  styleUrl: './shop-about.scss'
})
export class ShopAbout {
  contacts: Contact[] = [ //Un arreglo, una colección del tipo Hamster
      //MOCK de Objeto literal
      {
        name: "Clara Franco",
        tel: 2494571250,
        email: "francoclara@gmail.com",
      },
  
      {
        name: "Milagros Lopez",
        tel: 2494655633,
        email: "lopezvmila@gmail.com",
      },
  
      {
        name: "Victoria Franceschetti",
        tel: 2494900349,
        email: "vickyfrances@gmail.com",
      },
  
  ];
}
