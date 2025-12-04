import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INews } from '../../interfaces/INews';
import { NewsService } from '../../services/news/news-service';

@Component({
  selector: 'app-add-product-with-controls',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-with-controls.html',
  styleUrl: './add-product-with-controls.css',
})
export class AddProductWithControls {

  @Output() handleAdd = new EventEmitter<INews>()

  constructor(private newsService: NewsService) { }

  newsForm = new FormGroup({
    titre: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    texte: new FormControl("", Validators.required),
    categorie: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required)
  })

  get titleError() {
    const error = this.newsForm.get('titre')!.errors
    if (error) {
      if (error['required']) {
        return "Le titre est obligatoire"
      } else if (error['maxlength']) {
        return `Le nombre de caractères max est de ${error['maxlength'].requiredLength}`
      }
    }

    return false
  }

  // Exemple pour écrire la fonction "getRequiredError()"

  // get textRequired() {
  //   const error = this.newsForm.get('text')!.errors
  //   if (error) {
  //     if (error['required']) {
  //       return "Description requise"
  //     }
  //   }

  //   return false
  // }

  getRequiredError(formControlName: string): boolean {
    const error = this.newsForm.get(formControlName)!.errors
    if (error) {
      if (error['required']) {
        return true
      }
    }
    return false
  }

  getTouched(formControlName: string): boolean {
    return this.newsForm.get(formControlName)!.touched
  }

  handleSubmit() {
    if (this.newsForm.valid) {

      const formResult = this.newsForm.value

      // const news: INews = {
      //   titre: formResult.titre!,
      //   texte: formResult.texte!,
      //   categorie: formResult.categorie!,
      //   image: formResult.image!
      // }

      const news: INews = {
        titre: formResult.titre || "",
        texte: formResult.texte || "",
        categorie: formResult.categorie || "",
        image: formResult.image || "",
        datePublication: String(new Date()),
        dateModification: null
      }

      this.newsService.addOneNews(news).subscribe({
        next: (resp) => this.handleAdd.emit(resp),
        error: (e) => console.error(e)
      })

    } else this.newsForm.markAllAsTouched()
  }

}
