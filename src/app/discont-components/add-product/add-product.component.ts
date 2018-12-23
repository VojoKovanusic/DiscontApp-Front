import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/Product';
import {  Router } from '@angular/router'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent  implements OnInit {
  private product:Product;
    constructor(private productService:ProductService, private router: Router) { }
   
    ngOnInit() {
      this.product=this.productService.getter();  
    }
    processFormOnSubmit(){
      console.log("usao-processFormOnSubmit()-create")
      if(this.product.id==undefined){
        this.productService.addProduct(this.product).subscribe(
          (user)=>
          {
          console.log(user),
          this.router.navigate(["/all/product"]),
          (error)=>
          {console.log(error)}
        } 
      )
      }
      else{
        console.log("usao-processFormOnSubmit()-update")
        this.productService.updateProduct(this.product).subscribe(
          (user)=>
          {
          console.log(user),
          this.router.navigate(["/all/product"]),
          (error)=>
          {console.log(error)}
        } 
      )
      }
    }
  }
  