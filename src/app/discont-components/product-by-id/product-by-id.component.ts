import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/Product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.scss']
})
export class ProductByIdComponent  {
  @Input('id') id: number;
  private product: Product;
  form = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });
  constructor(private service: ProductService) { }

  getProductByID() {
 
    this.product = new Product();
    return this.service.getProductByID(this.id)
      .subscribe(product => {
        this.product = product;
       
      },
       
      error => { console.log(error); });
  }
  isNull() {
 
    if (this.product.isNull)
      return true;
  }
  get idF() {
    return this.form.get('id');

  }

}
