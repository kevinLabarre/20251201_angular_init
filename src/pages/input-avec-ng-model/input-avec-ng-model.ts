import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-avec-ng-model',
  imports: [FormsModule],
  templateUrl: './input-avec-ng-model.html',
  styleUrl: './input-avec-ng-model.css',
})
export class InputAvecNgModel {
  name: string = "Nom";
  search: string = "";

  checkBoxValue: boolean = false

  handleReset() {
    this.name = "";
  }

  handleSearchChange() {
    console.log(this.search)
  }

}
