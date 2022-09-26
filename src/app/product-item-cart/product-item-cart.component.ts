import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductItem } from '../product-item';

@Component({
  selector: 'app-product-item-cart',
  templateUrl: './product-item-cart.component.html',
  styleUrls: ['./product-item-cart.component.css']
})
export class ProductItemCartComponent implements OnInit {
  @Input() product: ProductItem = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: ''
  };
  @Input() quantity: number = 1;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  quantityChanged(): void {
    this.cartService.edit(this.product.id, this.quantity);
  }

  removeFromCart(): void {
    this.cartService.remove(this.product.id);
  }
}
