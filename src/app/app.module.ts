import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import { CartComponent } from "./components/cart/cart.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProductItemCartComponent } from "./components/product-item-cart/product-item-cart.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { OrderCompletedComponent } from "./components/order-completed/order-completed.component";
import { OrderComponent } from "./components/order/order.component";

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
    OrderCompletedComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
