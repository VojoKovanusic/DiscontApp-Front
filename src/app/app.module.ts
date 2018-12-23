import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomPageComponent } from './components/hom-page/hom-page.component'; 
import { PopularPurchaseService } from './service/popular-purchase.service';
import { ProductService } from './service/product.service';
import { PurchaseService } from './service/purchase.service';
import { HowRunComponent } from './components/how-run/how-run.component';
import { AboutAutorComponent } from './components/about-autor/about-autor.component';
import { MySolutionComponent } from './components/my-solution/my-solution.component';
import { TaskComponent } from './components/task/task.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { myRouting } from './routes/BasicAppRoutes';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomPageComponent,
    HowRunComponent,
    AboutAutorComponent,
    MySolutionComponent,
    TaskComponent,
    AddProductComponent
  ],
  imports: [ 
    myRouting,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],
  providers: [PopularPurchaseService,ProductService,PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
