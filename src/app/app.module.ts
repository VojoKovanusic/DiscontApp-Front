import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PopularPurchaseService } from './service/popular-purchase.service';
import { ProductService } from './service/product.service';
import { PurchaseService } from './service/purchase.service';
import { myRouting } from './routes/BasicAppRoutes';
import { FooterComponent } from './basic-components/footer/footer.component';
import { HomPageComponent } from './basic-components/hom-page/hom-page.component';
import { HowRunComponent } from './basic-components/how-run/how-run.component';
import { AboutAutorComponent } from './basic-components/about-autor/about-autor.component';
import { TaskComponent } from './basic-components/task/task.component';
import { AddProductComponent } from './basic-components/discont-components/add-product/add-product.component';
import { MySolutionComponent } from './discont-components/my-solution/my-solution.component';
import { AllProductsComponent } from './discont-components/all-products/all-products.component';
import { LikeComponent } from './discont-components/like/like.component';
import { ListPurchaseComponent } from './discont-components/list-purchase/list-purchase.component';
import { PopularPurchaseComponent } from './discont-components/popular-purchase/popular-purchase.component';
import { ProductByIdComponent } from './discont-components/product-by-id/product-by-id.component';
import { PurchaseByUsernameComponent } from './discont-components/purchase-by-username/purchase-by-username.component';
import { NavbarComponent } from './basic-components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomPageComponent,
    HowRunComponent,
    AboutAutorComponent, 
    TaskComponent,
    AddProductComponent
    ,MySolutionComponent, AllProductsComponent, LikeComponent, ListPurchaseComponent, PopularPurchaseComponent, ProductByIdComponent, PurchaseByUsernameComponent
  ],
  imports: [ 
    myRouting,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PopularPurchaseService,ProductService,PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
