import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://fakestoreapi.com/products';
  constructor(private _httpClient: HttpClient) { }

  public getProducts(): Observable<IProducto[]> {
    return this._httpClient.get<IProducto[]>(this.baseUrl);
  }

  public getProductById(id: number): Observable<IProducto> {
    return this._httpClient.get<IProducto>(`${this.baseUrl}/${id}`);
  }

  public getProductCategory(): Observable<IProducto[]> {
    return this._httpClient.get<IProducto[]>(`${this.baseUrl}/category`);
  }
  public posProduct(product: IProducto): Observable<IProducto> {
    return this._httpClient.post<IProducto>(this.baseUrl, product);
  }

  public putProduct(product: IProducto, id: number): Observable<IProducto> {
    return this._httpClient.put<IProducto>(`${this.baseUrl}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProducto> {
    return this._httpClient.delete<IProducto>(`${this.baseUrl}/${id}`);
  }
}
