import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/Product';
import { PopularPurchases } from '../../model/PopularPurchases';
import { PopularPurchaseService } from '../../service/popular-purchase.service';

@Component({
  selector: 'app-popular-purchase',
  templateUrl: './popular-purchase.component.html',
  styleUrls: ['./popular-purchase.component.scss']
})
export class PopularPurchaseComponent  {
  private product: Product=new Product();
  private recentUserNames: string[]=[];
  private purchase=new PopularPurchases(this.product, this.recentUserNames);
  private list:PopularPurchases;
  @Input("userName") userName: string;
  
  constructor(private service: PopularPurchaseService) { }

  usersWhoRecentlyPurchased() {
    return this.service.usersWhoRecentlyPurchased(this.userName)
      .subscribe(list => { 
        this.list = list
    console.log(this.list)
  },
  error => console.log(error));
  }
  isEmptu(){
    
    if (this.purchase== null){
    return true;}
    else return false;

  }
  
}