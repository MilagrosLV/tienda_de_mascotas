import { Component } from '@angular/core';

@Component({
  selector: 'app-hamster-list',
  standalone: false,
  templateUrl: './hamster-list.html',
  styleUrl: './hamster-list.scss'
})
export class HamsterList {
  hamster = {
    "type": "Phodopus sungorus",
    "price": 100,
    "stock": 5,
    "image": "../../assets/img/hamster_ruso.jpg"
  }

  constructor(){ }
}
