import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// bootstrapApplication est un commande qui permet de lancer l'application

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
