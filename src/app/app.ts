import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../components/navbar/navbar";



// Un composant contient au minimum :
// - un sélecteur
// - un template (template ou templateUrl)

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  // template: `
  // <h1>Bienvenue sur angular :) </h1>
  // `,
  styleUrl: './app.css',
  imports: [RouterOutlet, Navbar]
})
export class App {

}
