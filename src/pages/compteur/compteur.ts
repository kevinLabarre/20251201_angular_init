import { Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class Compteur {

  // Quand on utilise zoneJs

  count: number = 0;

  handleIncrement() {
    this.count++
    console.log(this.count)
  }

  handleDecrement() {
    this.count--
    console.log(this.count)
  }

  // Quand on utilise les signaux
  countSignal: WritableSignal<number> = signal(0)

  handleIncrementSignal() {
    this.countSignal.update((prev) => prev + 1)
  }

  handleDecrementSignal() {
    this.countSignal.update((prev) => prev - 1)
  }

  handleReset() {
    this.countSignal.set(0)
  }

}
