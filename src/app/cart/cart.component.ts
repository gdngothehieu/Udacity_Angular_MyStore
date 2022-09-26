import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MessageService } from '../message.service';
import { ProductItem } from '../product-item';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Map<number, number> = new Map();
  products: ProductItem[] = [];

  constructor(private cartService: CartService, private productService: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getAll();
    this.productService.getAll().subscribe(data => {
      this.log(`Got products!`);
      this.products = data;
    });
  }

  getProduct(id: number): ProductItem {
    return this.cartService.getProduct(id);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  private log(message: string) {
    this.messageService.add(`CartComponent: ${message}`);
  }
}
