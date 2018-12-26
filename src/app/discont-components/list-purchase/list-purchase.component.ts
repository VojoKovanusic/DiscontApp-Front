import { Component,Input } from '@angular/core';
import { Purchas } from '../../model/Purchas';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PurchaseService } from '../../service/purchase.service';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.scss']
})
export class ListPurchaseComponent {
  private purchases: Purchas[] = [];
  @Input("id") id: number;
  form = new FormGroup({
    id: new FormControl('', [
      Validators.required,
    ])
  });

  constructor(private service: PurchaseService) { }

  getPurchasesById() {
    this.purchases = [];
    return this.service.peopleWhoPreviouslyPurchasedProduct(this.id)
      .subscribe(purchases => {
        this.purchases = purchases
        console.log("  this.purchases "+this.purchases)
      },
      error => { console.log(error) });
  }

  isEmptu() {
    if (this.purchases.length < 1) {
      return true;
    }
    else return false;
  }

get idF(){
  return this.form.get('id');
} 
}
