import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { producList, Product } from '../products/product.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  producList: Product[] = producList;
  loding: boolean = true;
  color: string = '';

  get productPrice() {
    return this.product?.price;
  }

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe((params) => {
        this.product = this.producList.find(
          (product) => product.id == params['productId']
        );
        this.color = (this.product?.price as number) > 100000 ? 'green' : '';
        this.loding = false;

        console.log(this.product);
      });
    }, 1500);
  }
}
