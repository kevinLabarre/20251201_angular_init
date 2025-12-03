import { Component, signal } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';
import { NewsList } from "../../components/news-list/news-list";

@Component({
  selector: 'app-service-page',
  imports: [NewsList],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage {
  constructor(private newsService: NewsService) {
    this.loadNews()
    this.loadNewsHttp()
  }

  news?: INews[]
  newsViaHttp = signal<INews[]>([] as INews[])

  // Exemple avec une liste directement créée dans le service
  loadNews() {
    this.news = this.newsService.getNews()
  }

  // Exemple avec un observable (requete http 'get')
  loadNewsHttp() {
    this.newsService.getNewsHttp().subscribe((resp) => {
      this.newsViaHttp.set(resp)
      console.log(this.newsViaHttp())
    })

    // Equivalent au code ci-dessus
    // this.newsService.getNewsHttp().subscribe({
    //   next: (resp) => this.newsViaHttp = resp
    // })
  }
}
