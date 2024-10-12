import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { IProducto } from '../Models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  producList: IProducto[] = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProducto[]) => {
      this.producList = data;
      console.log(this.producList);
    })

  }

}
