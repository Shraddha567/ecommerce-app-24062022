import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent }from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
