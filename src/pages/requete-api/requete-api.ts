import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { NewsList } from "../../components/news-list/news-list";
import { NewsService } from '../../services/news/news-service';
import { AddProduct } from "../../components/add-product/add-product";

@Component({
  selector: 'app-requete-api',
  imports: [NewsList, AddProduct],
  templateUrl: './requete-api.html',
  styleUrl: './requete-api.css',
})
export class RequeteApi {
  constructor(
    private httpClient: HttpClient,
    private newsService: NewsService
  ) {
    // this.loadData()
    this.loadDataWithService()
  }

  // Exemple avec l'utilisation de HttpClient directement dans le composant
  news?: INews[]
  newsSignal = signal<INews[]>([] as INews[])

  loadData() {
    this.httpClient.get<INews[]>("http://localhost:3000/actualites").subscribe({
      next: (responseData) => {
        console.log(responseData)
        this.news = responseData
        this.newsSignal.set(responseData)
      }, // La fonction qui sera exécuté après avoir une réponse; et uniquement si on n'a pas d'erreur
      error: (e) => { console.error(e) }, // La fonction qui sera exécuté après la réponse si il y a une erreur
      complete: () => console.log("Requette terminée"), // Toujours exécuté après la réponse
    })
  }

  // Exemple en utilisation notre service:
  loadDataWithService() {
    this.newsService.getNewsHttp().subscribe({
      next: (responseData) => {
        console.log(responseData)
        this.news = responseData
        this.newsSignal.set(responseData)
      },
      error: (e) => { console.error(e) },
      complete: () => console.log("Requette terminée"),
    })
  }

}
