import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store', component: ProductListComponent },
  { path: 'store/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order_completed', component: OrderCompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
