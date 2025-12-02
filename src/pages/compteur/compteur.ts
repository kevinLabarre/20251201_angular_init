import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class Compteur {
  count: number = 0;

  handleIncrement() {
    this.count++
    console.log(this.count)
  }

  handleDecrement() {
    this.count--
    console.log(this.count)
  }

}
