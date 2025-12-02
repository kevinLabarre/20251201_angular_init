import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AngularFondamentaux } from '../pages/angular-fondamentaux/angular-fondamentaux';

export const routes: Routes = [
  { path: "", component: HomePage },
  { path: "angular-fondamentaux", component: AngularFondamentaux }
];
