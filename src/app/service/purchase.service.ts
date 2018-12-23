import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Purchas } from '../model/Purchas';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private baseUrl: string = 'http://localhost:8090/discont.com';

  constructor(private httpClient: HttpClient) { }

  allPurchasesByUser(userName: string): Observable<Purchas[]> {
    return this.httpClient.get<Purchas[]>(this.baseUrl + '/purchases/by-user/' + userName)
  }

  peopleWhoPreviouslyPurchasedProduct(id: Number): Observable<Purchas[]> {

    return this.httpClient.get<Purchas[]>(this.baseUrl + '/purchases/by-product/' + id)
  }

}
