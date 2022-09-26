import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductItemCartComponent } from './product-item-cart/product-item-cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrderComponent } from './order/order.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    CartComponent,
    MessagesComponent,
    ProductItemCartComponent,
    NavBarComponent,
    OrderComponent,
    OrderCompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
