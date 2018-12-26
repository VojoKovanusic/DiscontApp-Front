import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopularPurchases } from '../model/PopularPurchases';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PopularPurchaseService {

  private baseUrl: string = 'http://localhost:8090/api.discont.com/recent-purchases/';
  
  constructor(private http: HttpClient) { }

  usersWhoRecentlyPurchased(userName: string): Observable <PopularPurchases > {
    return this.http.get <PopularPurchases >(this.baseUrl + userName)
  
  }
}