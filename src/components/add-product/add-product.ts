import { Component } from '@angular/core';
import { NewsService } from '../../services/news/news-service';
import { INews } from '../../interfaces/INews';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  constructor(private service: NewsService) { }

  titre: string = ""
  texte: string = ""
  image: string = ""
  categorie: string = ""

  handleChangeTitle(event: Event) {
    const target = event.target as HTMLInputElement
    this.titre = target.value
  }

  handleChangeTexte(event: Event) {
    const target = event.target as HTMLInputElement
    this.texte = target.value
  }

  handleChangeImage(event: Event) {
    const target = event.target as HTMLInputElement
    this.image = target.value
  }

  handleChangeCategorie(event: Event) {
    const target = event.target as HTMLInputElement
    this.categorie = target.value
  }

  handleSubmit(event: Event) {
    event.preventDefault()

    const result: INews = {
      titre: this.titre,
      texte: this.texte,
      image: this.image,
      categorie: this.categorie,
      datePublication: String(new Date()), // Pour conversion en string
      dateModification: null,
    }

    this.service.addOneNews(result).subscribe({
      next: (resp) => {
        console.log("Ajout effectué", resp)
      },
      error: (e) => {
        console.error("Erreur lors de l'ajout", e)
      }
    })

  }
}
