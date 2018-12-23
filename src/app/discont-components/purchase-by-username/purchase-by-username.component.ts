import { Component, OnInit, Input } from '@angular/core';
import { Purchas } from '../../model/Purchas';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PurchaseService } from '../../service/purchase.service';
import { UserNameValidators } from './username.validation';

@Component({
  selector: 'app-purchase-by-username',
  templateUrl: './purchase-by-username.component.html',
  styleUrls: ['./purchase-by-username.component.scss']
})
export class PurchaseByUsernameComponent {
  @Input("userName") userName:string;
  private purchases: Purchas[]=[];

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UserNameValidators.cannotContainSpace
    ])
  });
  constructor(private service: PurchaseService) { }

  getPurchasesByUserName() {
    this.purchases= [];
    return this.service.allPurchasesByUser(this.userName)
    .subscribe(purchases => {
      this.purchases = purchases 
    }
    ,
      error => { console.log(error) });
  }
  isEmptu(){
    
    if (this.purchases.length < 1){
    return true;}
    else return false;

  }
  get uname(){
    return this.form.get('username');
  } 

}
