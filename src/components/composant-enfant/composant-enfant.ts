import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  imports: [],
  templateUrl: './composant-enfant.html',
  styleUrl: './composant-enfant.css',
})
export class ComposantEnfant {

  @Input() parentText?: string // input optionnelle

  @Input({ required: true }) textRequired!: string // input obligatoire
}
