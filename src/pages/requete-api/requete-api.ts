import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-requete-api',
  imports: [],
  templateUrl: './requete-api.html',
  styleUrl: './requete-api.css',
})
export class RequeteApi {
  constructor(private httpClient: HttpClient) { }

  // loadData() {
  //   this.httpClient.
  // }

}
