import { Component } from '@angular/core';


// Un composant contient au minimum :
// - un sélecteur
// - un template (template ou templateUrl)

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  // template: `
  // <h1>Bienvenue sur angular :) </h1>
  // `,
  styleUrl: './app.css'
})
export class App {

  title: string = "Bienvenue sur angular :) "
  myNumber: number = 0;
  myBoolean: boolean = true;

  displayTitle() {
    return "Bienvenue sur angular :) "
  }

  get titleGetter() {
    return "Bienvenue sur angular (en passant par le getter) :) "
  }

}
