import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-composant-enfant-exemple2',
  imports: [],
  templateUrl: './composant-enfant-exemple2.html',
  styleUrl: './composant-enfant-exemple2.css',
})
export class ComposantEnfantExemple2 {

  @Output() passData = new EventEmitter<string>()

  data: string = "Texte créé par le composant enfant"

  handleClick() {
    this.passData.emit(this.data)
  }
}
