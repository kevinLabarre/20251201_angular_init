import { Component } from '@angular/core';
import { ConsigneExerciceFruits } from "../../components/consigne-exercice-fruits/consigne-exercice-fruits";

@Component({
  selector: 'app-exercice-fruits',
  imports: [ConsigneExerciceFruits],
  templateUrl: './exercice-fruits.html',
  styleUrl: './exercice-fruits.css',
})
export class ExerciceFruits {
  produits: any[] = [
    { id: 1, nom: 'Pomme', quantite: 0, type: 'fruit', prix: 1.2 },
    { id: 2, nom: 'Banane', quantite: 6, type: 'fruit', prix: 0.9 },
    { id: 3, nom: 'Orange', quantite: 8, type: 'fruit', prix: 1.5 },
    { id: 4, nom: 'Fraise', quantite: 20, type: 'fruit', prix: 2.5 },
    { id: 5, nom: 'Carotte', quantite: 0, type: 'legume', prix: 0.8 },
    { id: 6, nom: 'Tomate', quantite: 12, type: 'legume', prix: 1.0 },
    { id: 7, nom: 'Poivron', quantite: 5, type: 'legume', prix: 1.3 },
    { id: 8, nom: 'Brocoli', quantite: 0, type: 'legume', prix: 1.8 }
  ];

  fruits = []
  legumes = []
}
