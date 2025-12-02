import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-effect-et-computed',
  imports: [],
  templateUrl: './effect-et-computed.html',
  styleUrl: './effect-et-computed.css',
})
export class EffectEtComputed {

  constructor() {
    effect(() => {
      document.title = `number: ${this.number()}`
    })
  }

  number: WritableSignal<number> = signal(0)

  // Un calcul avec computed est relancé uniquement lorsque la valeur d'un signal
  // utilisé à l'intérieur de la fonction change
  numberCarre = computed(() => this.number() * this.number())

  handleIncrement() {
    this.number.update((prev) => prev + 1)
  }

}
