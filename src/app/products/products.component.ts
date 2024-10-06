import { Component } from '@angular/core';
import { producList } from '../products/product.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  producList = producList;
}
