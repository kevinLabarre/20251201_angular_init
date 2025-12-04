import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AngularFondamentaux } from '../pages/angular-fondamentaux/angular-fondamentaux';
import { BindDesProprietesEtEvenements } from '../pages/bind-des-proprietes-et-evenements/bind-des-proprietes-et-evenements';
import { PassageDeDonneesEntreComposants } from '../pages/passage-de-donnees-entre-composants/passage-de-donnees-entre-composants';
import { Compteur } from '../pages/compteur/compteur';
import { EffectEtComputed } from '../pages/effect-et-computed/effect-et-computed';
import { InputAvecNgModel } from '../pages/input-avec-ng-model/input-avec-ng-model';
import { ExerciceFruits } from '../pages/exercice-fruits/exercice-fruits';
import { RequeteApi } from '../pages/requete-api/requete-api';
import { ServicePage } from '../pages/service-page/service-page';
import { Formulaire } from '../pages/formulaire/formulaire';

export const routes: Routes = [
  { path: "", component: HomePage, title: "Accueil" },
  { path: "angular-fondamentaux", component: AngularFondamentaux, title: "angular fondamentaux" },
  { path: "bind-proprietes-et-evenements", component: BindDesProprietesEtEvenements, title: "bind proprietes et evenements" },
  { path: "passage-de-donnees-entre-composants", component: PassageDeDonneesEntreComposants, title: "Passage de données entre composants" },
  { path: "compteur", component: Compteur, title: "compteur" },
  { path: "effect-et-computed", component: EffectEtComputed, title: "effect et computed" },
  { path: "input-avec-ngModel", component: InputAvecNgModel, title: "input avec ngModel" },
  { path: "exercice-fruits", component: ExerciceFruits, title: "Exercice fruits / légumes" },
  { path: "requete-api", component: RequeteApi, title: "les requetes Api" },
  { path: "service", component: ServicePage, title: "les services" },
  { path: "formulaire", component: Formulaire, title: "les formulaires" }
];
