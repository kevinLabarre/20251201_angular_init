import { Component } from '@angular/core';
import { ComposantEnfant } from "../../components/composant-enfant/composant-enfant";
import { ComposantEnfantExemple2 } from "../../components/composant-enfant-exemple2/composant-enfant-exemple2";

@Component({
  selector: 'app-passage-de-donnees-entre-composants',
  imports: [ComposantEnfant, ComposantEnfantExemple2],
  templateUrl: './passage-de-donnees-entre-composants.html',
  styleUrl: './passage-de-donnees-entre-composants.css',
})
export class PassageDeDonneesEntreComposants {

  data: string = "Texte créé par le composant parent";

  childData: string = ""

  handlePassData(text: string) {
    this.childData = text
  }

}
