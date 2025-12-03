import { inject, Injectable } from '@angular/core';
import { INews } from '../../interfaces/INews';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // constructor(private http: HttpClient){}
  private http = inject(HttpClient)

  private list: INews[] = [
    {
      "titre": "La FakeBank lance un fonds d'investissement dans les mèmes",
      "texte": "Notre équipe d'analystes a déterminé que les mèmes représentent désormais une classe d'actifs plus stable que l'immobilier. Investissez dès maintenant dans notre nouveau fonds 'MèmeStonks' et recevez un NFT gratuit de notre PDG qui fait un dab. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ex error asperiores ipsa non, blanditiis quasi repellendus ad consequuntur facilis consequatur minima beatae quod cum, repudiandae earum nobis ipsum autem! Fugit voluptas harum magnam dolore omnis, aspernatur, sed tenetur, ullam sequi sapiente et officia? Esse aliquid quod enim quia autem minima iusto, minus cupiditate, soluta veritatis voluptate ducimus aut omnis! Reprehenderit eius optio necessitatibus quidem deserunt sapiente. Iure tempora maiores dolores sunt eos non doloribus voluptate deserunt possimus amet excepturi quidem, voluptatem assumenda rem provident eum laboriosam ducimus officiis mollitia. Consectetur animi magni aliquid corporis provident omnis voluptate quasi consequatur saepe dolores dicta voluptatibus, nam debitis cupiditate deserunt labore culpa eaque? Ducimus ad deleniti repudiandae dolorum consequuntur doloremque nesciunt commodi. Amet placeat temporibus repellat, consequatur cupiditate illum tempore aspernatur aliquid velit maiores corrupti repellendus dolore deleniti magnam sapiente voluptatum magni sunt totam unde accusamus nesciunt omnis! Omnis quam culpa qui?",
      "image": "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=800",
      "categorie": "Investissement",
      "id": "1",
      "datePublication": "2023-10-15",
      "dateModification": "2025-07-04T12:42:10.600Z"
    },
    {
      "id": "2",
      "categorie": "Sécurité",
      "titre": "Nouveau système de sécurité : votre argent est si bien caché que même nous ne savons pas où il est",
      "texte": "FakeBank est fière d'annoncer son nouveau protocole de sécurité révolutionnaire. Votre argent est désormais si bien protégé que même nos comptables ne peuvent pas le trouver. Nous appelons cela 'la sécurité par confusion totale'.",
      "datePublication": "2023-11-02",
      "dateModification": null,
      "image": "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=800"
    }]

  getNews(): INews[] {
    return this.list
  }

  getNewsHttp(): Observable<INews[]> {
    return this.http.get<INews[]>("http://localhost:3000/actualites")
  }

  addOneNews(news: INews): Observable<INews> {
    return this.http.post<INews>("http://localhost:3000/actualites", news)
  }
}
