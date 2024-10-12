import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProducto } from '../Models/product.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: IProducto;
  loading: boolean = true;  // Renombramos a loading
  color: string = '';




  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe({

        next: (params: Params) => {
          this._apiService.getProductById(Number(params['productId'])).subscribe({

            next: (data: IProducto) => {
              this.product = data;

              // Cambia el color según el precio
              this.color = (this.product?.price as number) > 100000 ? 'green' : '';
              this.loading = false;  // Cambia loading a false cuando los datos se reciben

              console.log(this.product);
            },

            error: (error: any) => {
              console.log(error);
              this.loading = false;  // Cambia loading a false en caso de error
            }
          });
        },

        error: (error: any) => {
          console.log(error);
        }
      });
    }, 1500);  // Simulación de retraso de 1.5 segundos
  }
}
