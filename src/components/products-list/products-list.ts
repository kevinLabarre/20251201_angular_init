import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  @Input({ required: true }) products!: any[]
}
