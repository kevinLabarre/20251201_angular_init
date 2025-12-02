import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AngularFondamentaux } from '../pages/angular-fondamentaux/angular-fondamentaux';
import { BindDesProprietesEtEvenements } from '../pages/bind-des-proprietes-et-evenements/bind-des-proprietes-et-evenements';
import { PassageDeDonneesEntreComposants } from '../pages/passage-de-donnees-entre-composants/passage-de-donnees-entre-composants';
import { Compteur } from '../pages/compteur/compteur';

export const routes: Routes = [
  { path: "", component: HomePage, title: "Accueil" },
  { path: "angular-fondamentaux", component: AngularFondamentaux, title: "angular fondamentaux" },
  { path: "bind-proprietes-et-evenements", component: BindDesProprietesEtEvenements, title: "bind proprietes et evenements" },
  { path: "passage-de-donnees-entre-composants", component: PassageDeDonneesEntreComposants, title: "Passage de données entre composants" },
  { path: "compteur", component: Compteur, title: "compteur" }
];
