import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerorderService {

  constructor(
    private httpClient: HttpClient,){}

  gatherProducts(): Observable<Product[]> {
      return this.httpClient.get<Product[]>("http://localhost:3000/products")
  }

  postProduct(newProduct: Product): Observable<Product>{
      return this.httpClient.post<Product>("http://localhost:3000/products", newProduct);
  }

}
