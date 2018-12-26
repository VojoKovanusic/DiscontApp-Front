import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  private baseUrl: string = 'http://localhost:8090/discont.com/products/';
  private CRUDproductUrl: string = 'http://localhost:8090/api.discont.com/product/';

  private product: Product;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getProductByID(id: number): Observable<Product> {

    return this.httpClient.get<Product>(this.baseUrl + id);
  }

  getAllProduct(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(this.baseUrl)
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.CRUDproductUrl + id)
  }

  updateProduct(product: Product) { 
    return this.httpClient.put(this.CRUDproductUrl + product.id, product)
  }
  addProduct(product: Product) {
    return this.httpClient.post(this.CRUDproductUrl, product)
  }


  setter(product: Product) {
    this.product = product;
  }
  getter() {
    return this.product;
  }
}
