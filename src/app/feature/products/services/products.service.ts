import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts() {
    console.log('inside product service');
    return this.http.get(this.url);
  }
}
