import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
