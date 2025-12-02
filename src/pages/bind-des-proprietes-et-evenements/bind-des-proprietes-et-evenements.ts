import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-des-proprietes-et-evenements',
  imports: [],
  templateUrl: './bind-des-proprietes-et-evenements.html',
  styleUrl: './bind-des-proprietes-et-evenements.css',
})
export class BindDesProprietesEtEvenements {

  imgSrc: string = "favicon.ico";

  buttonDisabled: boolean = false

  handleClick() {
    alert("click");
  }

}
